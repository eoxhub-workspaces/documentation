# Headless Execution


The **Headless Execution** feature in EOxHub Workspaces enables automated execution of Jupyter notebooks and Argo Workflows directly from the eodash dashboard or programmatically via API endpoints. It is designed for streamlined, reproducible, and user-friendly processing of Earth Observation tasks and workflows.

![headless_execution](assets/pygeoapi.png)

---

## What is Headless Execution?

Headless execution allows you to:

- Trigger processing jobs (e.g. notebooks, workflows) without manual interaction
- Run parameterized notebooks via API (e.g. different AOIs, time ranges, datasets)
- Connect dashboard buttons or UI elements directly to backend EO analysis pipelines
- Monitor job status and outputs centrally

It is particularly useful for:
- End-user-triggered tasks in EO dashboards
- Scheduled or batch analyses
- Lightweight data services

---

## Argo Workflows & pygeoapi Integration

EOxHub uses **pygeoapi** to expose Argo Workflows as standard OGC-compliant processes. This enables external tools or dashboards to:

- **Discover** available jobs and workflows
- **Submit** parameterized execution requests
- **Track** status and retrieve results

Each job has:
- A unique identifier and description
- A list of accepted parameters (e.g. AOI, date, dataset)
- Execution logs and outputs available via API or the EOxHub UI

![headless_execution](assets/pygeoapi2.png)

---

## Triggering Notebook Jobs

Parameterized **Jupyter notebooks** can also be exposed for headless execution. This provides a direct path from interactive algorithm development in JupyterLab to repeatable, automated processing.

Input variables are defined in a notebook cell tagged `parameters`. Values supplied with an execution request replace the defaults before the complete notebook is run.

This makes it possible to reuse the same notebook with different:

- areas of interest
- dates or time ranges
- input datasets
- algorithm settings
- output configurations
- or any other parameters

The executed notebook is retained as part of the result, including the supplied parameters, generated outputs, and any errors. This supports reproducibility, traceability, and debugging.

For a practical walkthrough, see [Run a Parameterized Notebook with Headless Execution tutorial](../tutorials/processing_analysis/headless_notebook_execution.md).

### Notebooks or Argo Workflows?

Parameterized notebooks are a convenient starting point when an algorithm is already being developed in JupyterLab and can run within a single notebook environment.

Argo Workflows are more suitable when processing consists of multiple steps, uses custom container images, requires explicit orchestration, or is intended for recurring operational execution.



---

## Monitoring and Managing Jobs

Once triggered, jobs can be tracked in the **Headless Execution** section of the workspace UI:

- View job queue and running/completed status
- Inspect input parameters and output previews
- Access generated outputs or executed notebooks
- Inspect errors when processing fails
- Re-run or cancel jobs if needed

![headless_execution](assets/pygeoapi3.png)

## Related tutorials

- [Run a Parameterized Notebook with Headless Execution](../tutorials/processing_analysis/headless_notebook_execution.md)
- [Run the Polar Warp Capability](../tutorials/exploring_capabilities/polar_warp.md)

## Related use cases

- [Generate Results](../use_cases/result_generation.md)
- [Provide an Algorithm as a Service](../use_cases/algorithm_as_a_service.md)

## Integration Guidance

- [Integration Requirements for Argo Workflows](argo/capability_integration.md)