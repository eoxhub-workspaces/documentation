# Publish Insights

WIP

To support the presentation of datasets, EOxHub includes a publishing layer that leverages tools such as [eodash](https://eodash.org/). Operators can describe their datasets using structured JSON Schema based forms, which are translated into STAC metadata and managed via a Git-based flow using Data Editor and Narrative Editor

This approach allows updates to be reviewed, versioned, and automatically reflected in the workspace data catalogs. Every editting session corresponds to a separate named branch in a personal GitHub fork of a target catalog repository.