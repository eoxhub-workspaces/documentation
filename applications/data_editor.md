# Data Editor

The Data Editor lets users review and approve collection configurations in a clear, traceable way before the data is published to a STAC catalog. This STAC catalog is then used by the [Publishing Dashboard](publishing_dashboard.md), which is built on [eodash](https://eodash.org).

The Data Editor is built on [git-clerk](https://github.com/EOX-A/git-clerk), an open-source content management system that uses Git workflows and provides an easy-to-use file-editing interface.

With the Data Editor, workspace owners can:
* Describe their datasets using simple web forms
* Automatically validate their data against JSON schema definitions
* Save and publish changes through controlled, Git-based review sessions

```{note} Like any other application the Data Editor might not be available in your EOxHub Workspace. Contact your workspace admin to change this.
```

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
Data Editor schema validation for a new dataset
![data_editor](assets/data_editor.png)

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


A list of all supported resources is kept up to date on the [eodash wiki](https://github.com/eodash/eodash_catalog/wiki/Resource). 



## Required information

All required fields are marked in the Data Editor. More information about each of the fields is available on the [GitHub wiki page](https://github.com/eodash/eodash_catalog/wiki)

## Overview of the process

To add a supported Earth Observation (EO) dataset to an eodash deployment within EOxHub, the process typically follows these steps:
* Create a new editing session in the Data Editor and create a new collection configuration file.
* Complete the metadata fields, which are organized into thematic sections. In particular, the [Resource](https://github.com/eodash/eodash_catalog/wiki/Resource) section is essential, as it defines how the data is visualized on the web map.
* For raw data or client-side rendering (such as GeoJSON, FlatGeobuf, or GeoTIFF accessed directly), eodash supports styling using [OpenLayers flat styles](https://openlayers.org/en/latest/apidoc/module-ol_style_flat.html). More details on styling options can be found in the documentation.
* The eodash project provides the [eodash Style Editor](https://github.com/eodash/eodash-style-editor), which allows you to edit flat style definitions and see visualization updates in real time.
* To enable user interaction (for example, allowing users to adjust styles within the eodash application), styles can be enhanced with variables and combined with [JSON Form definitions](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-jsonform--docs).
* Once all changes are validated using the live layer preview and the editing session is approved (via a GitHub Pull Request), the updates can be merged into the production catalog.

For a more hands-on tutorial on how to publish insights by exposing data see our tutorials [**Integrating GeoJSON file**](../tutorials/geojson_tutorial.md) and [**Integrating WMTS service**](../tutorials/wmts_tutorial.md).


For learning how to include your data in Narrative publication, read the section about our [**Narrative Editor**](../applications/narrative_editor.md) and follow the tutorial covering [**how to create a narrative**](../tutorials/narrative_tutorial.md).
