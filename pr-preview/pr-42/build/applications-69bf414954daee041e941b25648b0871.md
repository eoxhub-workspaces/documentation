# Applications

EOxHub Workspaces bring together applications for developing algorithms, processing Earth Observation data, providing reusable services, and publishing insights.

Applications can support several stages of a workflow. The sections below follow the four main EOxHub Use Cases and show which applications can help you accomplish each goal.

The applications available in a particular Workspace depend on its configuration. Some applications and capabilities may therefore not be enabled in every Workspace.

## Algorithm Development

[Algorithm Development](../use_cases/algorithm_development.md) focuses on exploring data, designing processing methods, testing algorithms, and creating reproducible development environments.

- **[JupyterLab](jupyterlab.md)** provides an interactive environment for exploring data, writing code, and developing algorithms in notebooks.
- **[Conda Store](conda_store.md)** creates reproducible software environments and manages the dependencies required by an algorithm.
- **[File Browser](file_browser.md)** provides access to input data, notebooks, scripts, and generated files stored within the Workspace.
- **[Credentials Manager](secret_manager.md)** securely provides credentials for protected data sources, APIs, and cloud storage.
- **[Container Registry](container_registry.md)** stores versioned container images when an algorithm is ready to be packaged for reproducible execution.

## Result Generation

[Result Generation](../use_cases/result_generation.md) uses a developed or existing algorithm to process input data consistently, either on demand, on a schedule, or as part of a larger workflow.

- **[JupyterLab](jupyterlab.md)** can be used to execute and validate processing interactively before moving to automated execution.
- **[Argo Workflows](argo.md)** provides scalable and repeatable execution pipelines for processing larger volumes of data.
- **[Headless Execution](headless_execution.md)** runs parameterized notebooks or workflows without direct user interaction and records their jobs and outputs.
- **[Credentials Manager](secret_manager.md)** securely provides processing jobs with access to protected data and external services.
- **[File Browser](file_browser.md)** provides access to input data and generated outputs stored within the Workspace.

## Algorithm as a Service

[Algorithm as a Service](../use_cases/algorithm_as_a_service.md) turns an algorithm into a reusable capability that can be accessed by other users, applications, or automated systems.

- **[Container Registry](container_registry.md)** stores versioned container images containing the algorithm and its dependencies.
- **[Argo Workflows](argo.md)** executes containerized algorithms as scalable and repeatable processing workflows.
- **[eoAPI](eoapi.md)** provides standardized API access to data and processing capabilities.
- **[Headless Execution](headless_execution.md)** enables parameterized processing jobs to be triggered and monitored without opening the original development environment.
- **[Publishing Dashboard](publishing_dashboard.md)** can provide an interactive interface where users select parameters, trigger processing, and explore generated results.

## Publish Insights

[Publish Insights](../use_cases/publish_insights.md) communicates analysis results through interactive dashboards, maps, charts, and structured data stories.

- **[File Browser](file_browser.md)** stores datasets, styles, preview images, and other files required during publication.
- **[Data Editor](data_editor.md)** provides a collaborative and traceable workflow for describing, validating, reviewing, and publishing datasets.
- **[Publishing Dashboard](publishing_dashboard.md)** presents datasets and processing results through interactive maps, charts, and controls.
- **[Narrative Editor](narrative_editor.md)** combines explanatory text with maps, charts, images, and published datasets to create structured stories.

## Learn by Doing

For step-by-step guidance using these applications, explore the [Tutorials](../tutorials/tutorials.md).