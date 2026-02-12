# Data Editor

The Data Editor application, provides a traceable review and approval path of collection configurations before data is published to the configured STAC catalog. This STAC catalog is used in the [Publishing Dashboard](publishing_dashboard.md) which is based on [eodash](https://eodash.org).

It is based on [git-clerk](https://github.com/EOX-A/git-clerk) - Open-Source Content Management System based on Git workflows with a friendly file-editing GUI.

It enables workspace owners to describe their datasets using simple forms, validate them against JSON schema definitions, and commit them via Git-based sessions.

Data Editor collaborative publishing diagram 1
```{mermaid}
flowchart LR
  A[User <br> Git Clerk UI] --> B[Create Session]
  B --> C[Write Narrative<br/>in Online Editor]
  C --> D[Integrate <br> Maps <br> Charts]
  D --> E[Preview <br> Draft Content]
  E --> F{Is Content Ready?}
  F -- No --> C
  F -- Yes --> G[Submit]
style A fill:#f9f,stroke:#333,stroke-width:2px
```

Data Editor collaborative publishing diagram 2
```{mermaid}
flowchart LR
  G[Submit] --> H[Manager <br> Reviews PR]
  H --> I{Approve or Request Changes?}
  I -- Request Changes --> C[Write Narrative<br/>in Online Editor]
  I -- Approve --> J[Merge Pull Request]
  J --> K[Narrative Added to Catalog<br/>via GitHub Actions]
  G --> L[Public Preview Link Available]
  L --> M[Share with 3rd Party for Feedback]
  M --> G

style K fill:#bbf,stroke:#333,stroke-width:2px
```

```{figure} assets/data_editor.png
---
name: data_editor
---
Data Editor schema validation for a new collection
```

## Supported data types
Currently supported data (resource) types are: 

* Raw sources:
  * COG source
  * GeoJSON source
  * FlatGeobuf source
* SentinelHub
* SentinelHub WMS
* GeoDB
* GeoDB Vector Tile
* WMS
* VEDA - Visualization, Exploration, and Data Analysis
* XCube Server
* Copernicus Marine Data Store WMTS


List of all supported resources is kept up to date on [eodash wiki](https://github.com/eodash/eodash_catalog/wiki/Resource) so please visit this site as well. 



## Required information

All required fields are marked in the Data Editor. More information about each of the fields is available on the [GitHub wiki page](https://github.com/eodash/eodash_catalog/wiki)

## Overview of the process

Generally for including a supported type of EO collection into an eodash deployment within EOxHub, the steps are summarized as follows:

- Start a new `session` in the Data Editor and create a new collection configuration file.
- Fill metadata fields split into thematic groups. Mainly filling the [Resource](https://github.com/eodash/eodash_catalog/wiki/Resource) is important to visualize the data on the web map.
- For raw data and client only rendering (GeoJSON, flatgeobuf or GeoTIFF as direct access), eodash supports an [OpenLayers flatstyle](https://openlayers.org/en/latest/apidoc/module-ol_style_flat.html). More information on styling can be [found here](https://eodash.org/styling.html#vector-styling).
- eodash project offers [eodash-style-editor](https://github.com/eodash/eodash-style-editor) for editing the flatstyle definitions with updating the visualization in real time when definition is changed
- To define interactions for the user (e.g. modify the style within the eodash app), the style can be extended with variables, combined with [JSON Form definition](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-jsonform--docs).
- After finishing the updates confirmed by the layer live preview panel and approving of the corresponding Data editing session (GitHub Pull Request), the changes can be merged to production catalog.


For a more hands-on tutorial on how to publish insights by exposing data see our tutorials [**Integrating GeoJSON file**](../tutorials/geojson_tutorial.md) and [**Integrating WMTS service**](../tutorials/wmts_tutorial.md)


For learning how to include your data in Narrative publication, read the section [**Narrative Editor**](../applications/narrative_editor.md) and follow the tutorial [**Creating Narrative**](../tutorials/narrative_tutorial.md)
