# Publish Insights

After data is processed and analyzed, the final step is to communicate the results in an accessible way. This use case focuses on turning technical outputs into engaging narratives or interactive dashboards that help stakeholders understand key findings and make informed decisions.

Insights might be shared with policymakers, researchers, or the public through dashboards, map-based stories, or small reports. The goal is to present complex data in a visual and context-rich format.

To support the presentation of datasets, EOxHub includes a publishing layer that leverages tools such as [eodash](https://eodash.org/). Operators can describe their datasets using structured JSON Schema based forms, which are translated into STAC metadata and managed via a Git-based flow using Data Editor and Narrative Editor.

This approach allows updates to be reviewed, versioned, and automatically reflected in the workspace data catalogs. Every editing session corresponds to a separate named branch in a personal GitHub fork of a target catalog repository.

🛠 **Workspace tools:**
- **[Narrative Editor](../applications/narrative_editor.md)** allows creation of scrollytelling stories that combine maps, markdown text, and data visualizations
- **[Data Editor](../applications/data_editor.md)** allows addition of data sets into the eodash dashboard
- **[JupyterLab](../applications/jupyterlab.md)** can be used to generate plots, charts, and descriptions to support your story
- **[Publishing Dashboard](../applications/publishing_dashboard.md)** build your own dashboard full of datasets and interactive visualizations.
