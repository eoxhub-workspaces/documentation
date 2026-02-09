const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const POTENTIAL_DIRS = ['./_build/html', './_build/site'];

// --- TEST CONFIGURATION ---
// Set to NULL for production (wait for Luigi).
const MOCK_AVAILABLE_SERVICES = null; 

const SERVICE_MAPPING = {
    "JupyterLab": "hub",
    "JupyterHub": "hub",
    "Conda Store": "conda-store-server",
    "File Browser": "filebrowser",
    "Data Editor": "data-editor", 
    "Publishing Dashboard": "publishing",
    "Narrative Editor": "narrative",
    "Argo Workflows": "argo-workflows",
    "Headless Execution": "headless",
    "Secret Manager": "secrets",
    "EOAPI": "eoapi",
    "VS Code": "vscode",
    "Dask Dashboard": "dask-gateway"
};

const DYNAMIC_SCRIPT = `
<style>
  /* VISUALS FOR UNAVAILABLE APPS */
  .service-unavailable-link {
    opacity: 0.4 !important;
    color: #999 !important;
    transition: opacity 0.2s;
  }
  .service-unavailable-link:hover {
    opacity: 0.7 !important;
  }
  
  /* Icon for inline content links */
  main a.service-unavailable-link::after, 
  article a.service-unavailable-link::after {
    content: " 🚫";
    font-size: 0.8em;
  }
</style>

<script>
  (function() {
    const LINK_TO_KEY_MAP = ${JSON.stringify(SERVICE_MAPPING)};
    const MOCK_SERVICES = ${JSON.stringify(MOCK_AVAILABLE_SERVICES)};
    
    let state = { 
        ready: false, 
        services: [],
        isConnected: false
    };

    function log(msg, data) { console.log(\`🛠️ [Context] \${msg}\`, data || ""); }

    // --- HELPER: ROBUST NAME EXTRACTION ---
    function getCleanLinkName(el) {
        if (el.getAttribute('title')) return el.getAttribute('title').trim();
        const clone = el.cloneNode(true);
        clone.querySelectorAll('.sr-only, .visually-hidden, svg').forEach(n => n.remove());
        return clone.innerText.replace(/[\\n\\r]+/g, ' ').replace(/\\s+/g, ' ').trim();
    }

    // --- 1. APPLY VISUALS (GREY OUT / RED WARNING) ---
    function applyVisuals() {
        if (!state.ready) return;
        const allowedKeys = state.services;

        // A. Links
        const allLinks = document.querySelectorAll('nav a, main a, article a');
        allLinks.forEach(link => {
            const name = getCleanLinkName(link);
            if (LINK_TO_KEY_MAP.hasOwnProperty(name)) {
                const requiredKey = LINK_TO_KEY_MAP[name];
                if (!allowedKeys.includes(requiredKey)) {
                    if (!link.classList.contains('service-unavailable-link')) {
                        link.classList.add('service-unavailable-link');
                        link.title = "Not available in this workspace";
                    }
                } else {
                    link.classList.remove('service-unavailable-link');
                }
            }
        });

        // B. Red Warning (If connected but app is missing)
        ensureRedWarning(allowedKeys);
    }

    // --- 2. WARNING BANNERS (RED & YELLOW) ---
    
    // A. RED WARNING: Connected, but App is missing
    function ensureRedWarning(allowedKeys) {
        const h1 = document.querySelector('h1');
        if (!h1) return;
        
        // Remove Yellow warning if we are connected (Red takes precedence)
        const yellow = document.getElementById('standalone-warning');
        if (yellow) yellow.remove();

        const title = h1.innerText.trim();
        let currentKey = null;
        if (LINK_TO_KEY_MAP.hasOwnProperty(title)) currentKey = LINK_TO_KEY_MAP[title];
        
        if (!currentKey) return; 

        if (allowedKeys.includes(currentKey)) {
            const existing = document.getElementById('app-unavailable-warning');
            if (existing) existing.remove();
            return;
        }

        if (document.getElementById('app-unavailable-warning')) return;

        const aside = createAdmonition('danger', 'Application Unavailable', 
            'This application is not available in your current workspace configuration.');
        injectBanner(aside, h1);
    }

    // B. YELLOW WARNING: Not Connected (Standalone Mode)
    function ensureStandaloneWarning() {
        // Only show if NOT connected
        if (state.isConnected) return;
        
        // Only show on Application pages
        const h1 = document.querySelector('h1');
        if (!h1) return;
        
        const title = h1.innerText.trim();
        // Check if current page is in our known apps list OR is the main "Applications" page
        if (!LINK_TO_KEY_MAP.hasOwnProperty(title) && title !== "Applications") return;

        if (document.getElementById('standalone-warning')) return;

        const aside = createAdmonition('warning', 'Context Warning', 
            'You are viewing this documentation outside of a Workspace context. Applications shown here might not be available in your specific environment.');
        aside.id = 'standalone-warning';
        
        injectBanner(aside, h1);
    }

    // --- HELPER: DOM CREATION ---
    function createAdmonition(type, title, text) {
        const colors = type === 'danger' 
            ? { border: 'border-red-500', text: 'text-red-600', bg: 'bg-red-50', icon: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' }
            : { border: 'border-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' };

        const aside = document.createElement('aside');
        // Native MyST Classes
        aside.className = \`myst-admonition myst-admonition-\${type} my-5 shadow-md \${colors.bg}/10 dark:bg-stone-800 overflow-hidden myst-admonition-default rounded border-l-4 \${colors.border}\`;
        
        aside.innerHTML = \`
            <div class="myst-admonition-header m-0 font-medium py-1 flex min-w-0 text-lg \${colors.text} \${colors.bg} dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="2rem" height="2rem" class="myst-admonition-header-icon inline-block pl-2 mr-2 self-center flex-none \${colors.text}">
                    <path stroke-linecap="round" stroke-linejoin="round" d="\${colors.icon}" />
                </svg>
                <div class="myst-admonition-header-text text-neutral-900 dark:text-white grow self-center overflow-hidden break-words">
                    \${title}
                </div>
            </div>
            <div class="myst-admonition-body px-4 py-1">
                <p>\${text}</p>
            </div>
        \`;
        return aside;
    }

    function injectBanner(element, h1) {
        const block = h1.closest('#skip-to-frontmatter');
        if (block) block.parentNode.insertBefore(element, block.nextSibling);
        else h1.parentNode.insertBefore(element, h1.nextSibling);
    }

    // --- 3. INIT ---
    window.addEventListener('load', () => {
        // MOCK DATA
        if (MOCK_SERVICES) {
            console.log("⚠️ Using Mock Data:", MOCK_SERVICES);
            state.ready = true;
            state.services = MOCK_SERVICES;
            state.isConnected = true; // Pretend we are connected
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@luigi-project/client/luigi-client.js';
        script.onload = () => {
            if (window.LuigiClient) {
                window.LuigiClient.addInitListener((context) => {
                    const gateway = context.userArea?.gatewayUrl;
                    const wsId = context.workspaceConfig?.id;
                    if (gateway && wsId) {
                        fetch(\`\${gateway.replace(/\\/$/, "")}/\${wsId}/whoami\`, { credentials: 'include' })
                            .then(r => r.json())
                            .then(data => {
                                state.ready = true;
                                state.isConnected = true;
                                state.services = (data.services || []).map(s => s.key);
                                
                                // Remove standalone warning immediately if it exists
                                const w = document.getElementById('standalone-warning');
                                if(w) w.remove();
                            })
                            .catch(e => console.warn("API Error", e));
                    }
                });
            }

            // --- TIMEOUT FOR STANDALONE WARNING ---
            // If we are not connected after 1 second, assume standalone
            setTimeout(() => {
                if (!state.isConnected) {
                    ensureStandaloneWarning();
                }
            }, 1000);
        };
        document.head.appendChild(script);

        // PERSISTENCE LOOP
        setInterval(() => {
            if (state.ready) {
                applyVisuals();
            }
            // If we are definitely disconnected, keep enforcing the yellow warning
            // (in case navigation wipes it)
            if (!state.isConnected) {
                ensureStandaloneWarning();
            }
        }, 500);
        
        // Click Listener for immediate updates
        document.body.addEventListener('click', () => {
            setTimeout(() => { 
                if (state.ready) applyVisuals();
                if (!state.isConnected) ensureStandaloneWarning();
            }, 50);
        });
    });

  })();
</script>
`;

function injectScripts(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      injectScripts(filePath); 
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('CONTEXT-AWARE INJECTION START')) return;

      if (/<\/body>/i.test(content)) {
        const newContent = content.replace(/<\/body>/i, `${DYNAMIC_SCRIPT}</body>`);
        fs.writeFileSync(filePath, newContent, 'utf8');
      } 
    }
  });
}

console.log('🚀 Starting Injection...');
let found = false;
POTENTIAL_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
        found = true;
        injectScripts(dir);
    }
});

if (!found) console.error("❌ Could not find build directory.");
else console.log('✨ Done.');