# Data Publication

To support the presentation of datasets, EOxHub includes a publishing layer that leverages tools such as [eodash](https://eodash.org/). Operators can describe their datasets using structured JSON Schema based forms, which are translated into STAC metadata and managed via a Git-based flow.

This approach allows updates to be reviewed, versioned, and automatically reflected in the workspace data catalogs. Every editting session corresponds to a separate named branch in a personal GitHub fork of a target catalog repository.

## Overview of the process

Generally for including a supported type of EO collection into a eodash deployed within EOxHub, the steps are summarized as follows:

- Start a new `session` in the Data Editor and create a new collection configuration file.
- Fill metadata fields split into thematic groups. Mainly filling the [Resource](https://github.com/eodash/eodash_catalog/wiki/Resource) is important to visualize the data on the web map.
- For raw data and client only rendering (GeoJSON, flatgeobuf or GeoTIFF as direct access), eodash supports an [OpenLayers flatstyle](https://openlayers.org/en/latest/apidoc/module-ol_style_flat.html). More information on styling can be [found here](https://eodash.org/data.html#vector-data).
- eodash project offers [eodash-style-editor](https://github.com/eodash/eodash-style-editor) for editing the flatstyle definitions with updating the visualization in real time when definition is changed
- To define interactions for the user (e.g. modify the style within the eodash app), the style can be extended with variables, combined with [JSON Form definition](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-jsonform--docs).
- After finishing the updates confirmed by the layer live preview panel and approving of the corresponding Data editing session (GitHub Pull Request), the changes can be merged to production catalog.

