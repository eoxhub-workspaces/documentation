# Argo Versioning

**Argo Versioning** provides version management, change tracking, and streamlined configuration for [Argo Workflows](argo.md) in EOxHub Workspaces. It is built on the open-source software [gitargo](https://github.com/eoxhub-workspaces/gitargo) developed by EOX.

After using and providing standard Argo UI within EOxHub workspaces, one larger limitation we found was how users could keep track of changes to their workflow definitions. In a collaborative environment, it was also difficult to know if a colleague had changed something, or what exactly they had changed. That is why we developed the open-source software gitargo, which is made available as **Argo Versioning** to highlight exactly that aspect.

```{figure} assets/gitargo-history.png
---
name: argo_versioning_history
---
Argo Versioning workflow change history interface showing version history timeline
```

```{figure} assets/gitargo-diffview.png
---
name: argo_versioning_diffview
---
Argo Versioning workflow definition diff comparison view
```

## Key Capabilities

Argo Versioning tries to provide all aspects needed for working with workflows throughout their lifecycle:

### Workflow Versioning & Change History
As illustrated in {numref}`argo_versioning_history` and {numref}`argo_versioning_diffview`, Argo Versioning maintains a complete audit trail of workflow definitions using git. Users can inspect past versions, track who modified a workflow, compare differences between versions in the diff view, and revert to previous states when necessary.

### Execution Tracking & Status
Users can monitor the latest workflow runs directly within the application interface. As shown in {numref}`argo_versioning_runs` and {numref}`argo_versioning_overview`, the run history provides real-time status updates, step-by-step execution logs, and output details for ongoing and completed executions.

```{figure} assets/gitargo-executions-list.png
---
name: argo_versioning_runs
---
Argo Versioning execution dashboard showing latest workflow runs and status
```

```{figure} assets/gitargo-workflow-overview.png
---
name: argo_versioning_overview
---
Argo Versioning workflow execution overview displaying step-by-step logs for a workflow run
```

### Integrated Resource Overview
To aid in performance optimization and capacity planning, Argo Versioning includes an integrated resource overview (see {numref}`argo_versioning_resources`). This feature displays peak resource usage metrics, such as CPU utilization, memory consumption, and storage demands, for individual workflow executions and steps.

```{figure} assets/gitargo-resource-dashboard.png
---
name: argo_versioning_resources
---
Integrated resource usage overview displaying CPU, memory, and execution metrics.
```

### Profile Logic for Cloud & Kubernetes Configuration
Configuring complex cloud and Kubernetes parameters such as node selectors, pod tolerations, and resource allocations can be error-prone and tedious when editing raw workflow manifests.

In order to support users with configuration of important cloud and Kubernetes configurations, Argo Versioning introduces **profile logic** mirroring the profile definitions used in [JupyterLab](jupyterlab.md). As shown in {numref}`argo_versioning_profiles`, these profiles let you automatically configure tolerations, node selection, resource configuration, etc. by selecting one of them.

```{figure} assets/gitargo-profile-selection.png
---
name: argo_versioning_profiles
---
Profile selection dropdown for automated Kubernetes and cloud resource configuration
```

## Workspace Operating Modes

Argo Versioning can run in two operating modes depending on the workspace environment configuration:

- **Team Workspaces**: All users within the workspace can view, collaborate on, and execute all available workflows.
- **Workshop Workspaces**: Access is scoped so users can only view, manage, and manipulate their own workflows (addressing another limitation of standard Argo UI).

## Resources

- [gitargo GitHub Repository](https://github.com/eoxhub-workspaces/gitargo)
- [Argo Workflows Documentation](argo.md)

## Related use cases

- [Generate Results](../use_cases/result_generation.md)
- [Provide an Algorithm as a Service](../use_cases/algorithm_as_a_service.md)


## Related tutorials

- [Get Started with Argo Versioning](../tutorials/processing_analysis/argo_versioning.md)