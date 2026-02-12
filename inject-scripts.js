const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const POTENTIAL_DIRS = ['./_build/html', './_build/site'];

// --- TEST CONFIGURATION ---
const MOCK_AVAILABLE_SERVICES = null; 
// const MOCK_AVAILABLE_SERVICES = ['filebrowser']; 

const SERVICE_MAPPING = {
    "JupyterLab": "hub",
    "JupyterHub": "hub",
    "Conda Store": "conda-store-server",
    "File Browser": "workspace-ui",
    "Data Editor": "catalog-git-clerk", 
    "Publishing Dashboard": "publishing",
    "Narrative Editor": "narratives-git-clerk",
    "Argo": "argo-workflows-server",
    "Headless Execution": "pygeoapi-eoxhub-pygeoapi-eoxhub",
    "Credentials Manager": "credentials-manager",
    "eoAPI": "eoapi-rw-stac", 
    "Dask Dashboard": "dask-gateway-dashboard"
};

// APPS THAT SHOULD NOT BE GREYED OUT, JUST WARNED
const OPTIONAL_APPS = [
    "Narrative Editor",
    "Publishing Dashboard"
];

const DYNAMIC_SCRIPT = `
<style>
  /* VISUALS FOR UNAVAILABLE APPS */
  /* We target the data attribute to avoid React className conflicts */
  a[data-service-status="unavailable"] {
    opacity: 0.4 !important;
    color: #5c5c5cff !important;
    transition: opacity 0.2s;
  }
  a[data-service-status="unavailable"]:hover {
    opacity: 0.7 !important;
  }
  
  /* Icon for inline content links */
  main a[data-service-status="unavailable"]::after, 
  article a[data-service-status="unavailable"]::after {
    content: " 🚫";
    font-size: 0.8em;
  }
</style>

<script>
  (function() {
    // --- INJECT VARIABLES ---
    const LINK_TO_KEY_MAP = ${JSON.stringify(SERVICE_MAPPING)};
    const OPTIONAL_APPS_LIST = ${JSON.stringify(OPTIONAL_APPS)}; 
    const MOCK_SERVICES = ${JSON.stringify(MOCK_AVAILABLE_SERVICES)};
    
    let state = { 
        ready: false, 
        services: [],
        isConnected: false
    };

    function log(msg, data) { console.log(\`🛠️ [Context] \${msg}\`, data || ""); }
    function error(msg, err) { console.error(\`🛠️ [Context Error] \${msg}\`, err || ""); }

    log("Script Started. Waiting for Window Load...");

    // --- HELPER: ROBUST NAME EXTRACTION ---
    function getCleanLinkName(el) {
        if (el.getAttribute('title')) return el.getAttribute('title').trim();
        const clone = el.cloneNode(true);
        clone.querySelectorAll('.sr-only, .visually-hidden, svg').forEach(n => n.remove());
        return clone.innerText.replace(/[\\n\\r]+/g, ' ').replace(/\\s+/g, ' ').trim();
    }

    // --- 1. APPLY VISUALS ---
    function applyVisuals() {
        // Run inside requestAnimationFrame to minimize UI blocking
        requestAnimationFrame(() => {
            if (!state.ready) return;
            const allowedKeys = state.services;

            const allLinks = document.querySelectorAll('nav a, main a, article a');
            allLinks.forEach(link => {
                const name = getCleanLinkName(link);
                
                if (LINK_TO_KEY_MAP.hasOwnProperty(name)) {
                    const requiredKey = LINK_TO_KEY_MAP[name];
                    
                    if (!allowedKeys.includes(requiredKey)) {
                        const isOptional = OPTIONAL_APPS_LIST.includes(name);
                        if (!isOptional) {
                            if (link.getAttribute('data-service-status') !== 'unavailable') {
                                link.setAttribute('data-service-status', 'unavailable');
                            }
                        } else {
                            link.removeAttribute('data-service-status');
                        }
                    } else {
                        link.removeAttribute('data-service-status');
                    }
                }
            });

            ensurePageWarning(allowedKeys);
        });
    }

    // --- 2. WARNING BANNERS ---
    
    function ensurePageWarning(allowedKeys) {
        const h1 = document.querySelector('h1');
        if (!h1) return;
        
        if (state.isConnected) {
            const w = document.getElementById('standalone-warning');
            if (w) w.remove();
        }

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

        const isOptional = OPTIONAL_APPS_LIST.includes(title);

        let aside;
        if (isOptional) {
            aside = createAdmonition('warning', 'Application Availability', 
                'This application might not be enabled in your current workspace configuration.');
        } else {
            aside = createAdmonition('danger', 'Application Unavailable', 
                'This application does not seem to be available in your current workspace configuration. If you think this is an error please contact your workspace administrator.');
        }
        aside.id = 'app-unavailable-warning';
        injectBanner(aside);
    }

    function ensureStandaloneWarning() {
        if (state.isConnected) return;
        
        const h1 = document.querySelector('h1');
        if (!h1) return;
        
        const title = h1.innerText.trim();
        if (!LINK_TO_KEY_MAP.hasOwnProperty(title) && title !== "Applications") return;

        if (document.getElementById('standalone-warning')) return;

        log("Showing Standalone Warning (No Context Detected)");
        const aside = createAdmonition('warning', 'Context Warning', 
            'You are viewing this documentation outside of a Workspace context. Applications shown here might not be available in your specific environment.');
        aside.id = 'standalone-warning';
        
        injectBanner(aside);
    }

    function createAdmonition(type, title, text) {
        const colors = type === 'danger' 
            ? { border: 'border-red-500', text: 'text-red-600', bg: 'bg-red-50', icon: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' }
            : { border: 'border-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' };

        const aside = document.createElement('aside');
        
        // --- SPACING ADJUSTMENTS ---
        aside.className = \`myst-admonition myst-admonition-\${type} mt-6 mb-4 shadow-md \${colors.bg}/10 dark:bg-stone-800 overflow-hidden myst-admonition-default rounded border-l-4 \${colors.border}\`;     
        aside.style.setProperty('margin-top', '24px', 'important');
        aside.style.marginBottom = '-45px';

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

    function injectBanner(element) {
        const container = document.querySelector('main') || document.querySelector('article') || document.querySelector('.bd-article');
        
        if (container) {
            const existing = container.querySelector(\`#\${element.id}\`);
            if (existing) existing.remove();
            container.prepend(element);
        }
    }

    // --- 3. INIT LOGIC (LUIGI CONNECTION) ---
    function handleContext(context) {
        log("Context Handshake Received!", context);
        
        const gateway = context.workspaceConfig?.userArea?.gatewayUrl;
        const wsId = context.workspaceConfig?.id;
        
        if (gateway && wsId) {
            fetch(\`\${gateway.replace(/\\/$/, "")}/\${wsId}/whoami\`, { credentials: 'include' })
                .then(r => r.json())
                .then(data => {
                    log("Services Loaded:", data.services);
                    state.ready = true;
                    state.isConnected = true;
                    state.services = (data.services || []).map(s => s.key);
                    const w = document.getElementById('standalone-warning');
                    if(w) w.remove();
                    applyVisuals();
                })
                .catch(e => error("API Fetch Failed", e));
        }
    }

    window.addEventListener('load', () => {
        if (MOCK_SERVICES) {
            log("Using Mock Data:", MOCK_SERVICES);
            state.ready = true;
            state.services = MOCK_SERVICES;
            state.isConnected = true; 
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@luigi-project/client/luigi-client.js';
        
        script.onload = () => {
            log("Luigi Client Script Loaded.");
            
            if (window.LuigiClient) {
                log("LuigiClient Object found.");
                
                window.LuigiClient.addInitListener((context) => {
                    log("Event: InitListener Triggered");
                    handleContext(context);
                });

                window.LuigiClient.addContextUpdateListener((context) => {
                    log("Event: ContextUpdateListener Triggered");
                    handleContext(context);
                });

                // 3. Fallback check (If context was already there)
                const existingData = window.LuigiClient.getEventData();
                if (existingData && existingData.context) handleContext(existingData.context);
            }

            setTimeout(() => {
                if (!state.isConnected) ensureStandaloneWarning();
            }, 2000);
        };

        script.onerror = (e) => error("Failed to load Luigi Client script", e);
        document.head.appendChild(script);

        // PERSISTENCE LOOP
        setInterval(() => {
            if (state.ready) applyVisuals();
            if (!state.isConnected) ensureStandaloneWarning();
        }, 500);
        
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

console.log('🚀 Starting Injection (React-Prop-Safe Mode)...');
let found = false;
POTENTIAL_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
        found = true;
        injectScripts(dir);
    }
});

if (!found) console.error("❌ Could not find build directory.");
else console.log('✨ Done.');