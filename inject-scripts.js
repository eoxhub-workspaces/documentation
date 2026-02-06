const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const POTENTIAL_DIRS = ['./_build/html', './_build/site'];

// MAPPING: Title in your TOC/Text -> Service Key from API
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
  /* 1. UNAVAILABLE LINK STYLE */
  a.service-unavailable {
    opacity: 0.5 !important;
    pointer-events: none !important;
    cursor: default !important;
    text-decoration: none !important;
    color: #999 !important;
  }
  
  a.service-unavailable::after {
    content: " 🚫 (Unavailable)";
    font-size: 0.75em;
    margin-left: 6px;
    color: #d9534f; 
    font-weight: normal;
  }

  /* No custom CSS needed for the banner anymore! 
     We rely on the theme's native classes. */
</style>

<script>
  (function() {
    const LINK_TO_KEY_MAP = ${JSON.stringify(SERVICE_MAPPING)};
    const LOG_PREFIX = "🛠️ [Context]:";
    let isConnected = false;

    function log(msg, data) { console.log(\`\${LOG_PREFIX} \${msg}\`, data || ""); }

    // --- 1. SCOPE CHECK ---
    function shouldApplyLogic() {
        // Check Title
        const h1 = document.querySelector('h1');
        if (h1) {
            const title = h1.innerText.trim();
            if (title === "Applications") return true;
            if (LINK_TO_KEY_MAP.hasOwnProperty(title)) return true;
        }
        // Check Breadcrumbs
        const breadcrumbs = document.querySelector('.bd-breadcrumbs, .breadcrumbs, nav[aria-label="breadcrumb"]');
        if (breadcrumbs && breadcrumbs.innerText.includes("Applications")) return true;

        return false;
    }

    // --- 2. SERVICE CHECKER ---
    async function checkServiceAvailability(context) {
        if (!shouldApplyLogic()) return;

        const gateway = context.userArea?.gatewayUrl;
        const wsId = context.workspaceConfig?.id;
        if (!gateway || !wsId) return;

        const cleanGateway = gateway.replace(/\\/$/, "");
        const url = \`\${cleanGateway}/\${wsId}/whoami\`;
        
        try {
            const response = await fetch(url, { credentials: 'include' });
            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
            
            const userData = await response.json();
            const availableServices = userData.services || [];
            const availableKeys = availableServices.map(s => s.key);
            
            log("✅ Available Services:", availableKeys);
            applyServiceAvailability(availableKeys, wsId);
        } catch (err) {
            console.warn(\`\${LOG_PREFIX} API Error:\`, err);
        }
    }

    function applyServiceAvailability(availableKeys, wsId) {
        const contentLinks = document.querySelectorAll('main a, article a, .bd-article a, .section a');
        contentLinks.forEach(link => {
            const linkText = link.innerText.trim();
            if (LINK_TO_KEY_MAP.hasOwnProperty(linkText)) {
                const requiredKey = LINK_TO_KEY_MAP[linkText];
                if (!availableKeys.includes(requiredKey)) {
                    log(\`🚫 Disabling \${linkText}\`);
                    link.classList.add('service-unavailable');
                    link.removeAttribute('href'); 
                    link.title = \`Application not enabled in workspace "\${wsId}"\`;
                }
            }
        });
    }

    // --- 3. WARNING BANNER (NATIVE MYST STYLE) ---
    function createWarningBanner() {
        const aside = document.createElement('aside');
        aside.id = 'standalone-warning';
        
        // Native MyST classes for styling
        // Swapped border-blue-500 -> border-amber-500 (Warning Orange/Yellow)
        // Swapped bg-blue-50 -> bg-amber-50
        aside.className = "myst-admonition myst-admonition-warning my-5 shadow-md dark:shadow-2xl dark:shadow-neutral-900 bg-gray-50/10 dark:bg-stone-800 overflow-hidden myst-admonition-default rounded border-l-4 border-amber-500";
        
        aside.innerHTML = \`
            <div class="myst-admonition-header m-0 font-medium py-1 flex min-w-0 text-lg text-amber-600 bg-amber-50 dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" width="2rem" height="2rem" class="myst-admonition-header-icon inline-block pl-2 mr-2 self-center flex-none text-amber-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div class="myst-admonition-header-text text-neutral-900 dark:text-white grow self-center overflow-hidden break-words">
                    Note
                </div>
            </div>
            <div class="myst-admonition-body px-4 py-1">
                <p>
                    You are viewing this documentation outside of a Workspace context. 
                    All Applications are shown here, but availability can differ based on your Workspace configuration.
                    There is a Documentation section inside the Workspace that will reflect the Applications available.
                </p>
            </div>
        \`;
        return aside;
    }

    function showStandaloneWarning() {
        if (isConnected) return;
        if (!shouldApplyLogic()) return;
        if (document.getElementById('standalone-warning')) return;

        const banner = createWarningBanner();

        // --- INJECTION STRATEGY ---
        const h1 = document.querySelector('h1');
        if (h1) {
            // Find the frontmatter container that was causing layout issues
            const frontMatterBlock = h1.closest('#skip-to-frontmatter');
            
            if (frontMatterBlock) {
                // Place AFTER the frontmatter block
                frontMatterBlock.parentNode.insertBefore(banner, frontMatterBlock.nextSibling);
            } else {
                // Standard fallback
                h1.parentNode.insertBefore(banner, h1.nextSibling);
            }
        } else {
            const main = document.querySelector('main') || document.querySelector('article') || document.body;
            main.insertBefore(banner, main.firstChild);
        }
    }

    // --- 4. LUIGI INIT ---
    window.addEventListener('load', () => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@luigi-project/client/luigi-client.js';
        
        script.onload = () => {
            if (window.LuigiClient) {
                window.LuigiClient.addInitListener((context) => {
                    isConnected = true;
                    const w = document.getElementById('standalone-warning');
                    if(w) w.remove();
                    checkServiceAvailability(context);
                });
            }

            setTimeout(() => {
                if (!isConnected) showStandaloneWarning();
            }, 1000);
        };
        
        document.head.appendChild(script);
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

console.log('🚀 Starting Native-Look Injection...');
let found = false;
POTENTIAL_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
        found = true;
        injectScripts(dir);
    }
});

if (!found) console.error("❌ Could not find build directory.");
else console.log('✨ Done.');