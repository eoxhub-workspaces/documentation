# Algorithm as a Service

In this use case, algorithms are made available to others as callable services. Instead of running code manually, users can trigger processing via a web interface or API by providing input parameters (e.g., area of interest, start and end time).

This approach allows your logic to be reused consistently, integrated into dashboards, or shared with partners without exposing the underlying code. It's ideal for creating operational tools and shared analytics infrastructure.

🛠 **Workspace tools:**
- **[Argo Workflows](../applications/argo.md)** can be exposed as callable jobs.
- **[Headless Execution](../applications/headless_execution.md)** enables algorithms, mainly Argo Workflows to be published as OGC-compliant API endpoints.
