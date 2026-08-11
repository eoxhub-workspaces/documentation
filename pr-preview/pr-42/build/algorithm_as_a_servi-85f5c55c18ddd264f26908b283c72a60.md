# Algorithm as a Service

In this use case, algorithms are made available to others as callable services. Instead of running code manually, users can trigger processing via a web interface or API by providing input parameters (e.g., area of interest, start and end time).

This approach allows your logic to be reused consistently, integrated into dashboards, or shared with partners without exposing the underlying code. It's ideal for creating operational tools and shared analytics infrastructure.

🛠️ **Workspace tools:**

- **[Container Registry](../applications/container_registry.md)** stores versioned container images containing the algorithm and its required dependencies.
- **[Argo Workflows](../applications/argo.md)** executes the containerized algorithm as a scalable, repeatable processing workflow.
- **[eoAPI](../applications/eoapi.md)** exposes data through standardized STAC interface so they can be discovered and executed by other applications.
- **[Headless Execution](../applications/headless_execution.md)** provides an interface for triggering processing jobs and inspecting their status, parameters, and outputs.
- **[Publishing Dashboard](../applications/publishing_dashboard.md)** allows users to provide parameters, trigger an algorithm, and explore its generated results through a web interface.
