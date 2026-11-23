# eoAPI

EOxHub includes robust data visualization capabilities for both raster and vector data based primarily on [eoapi](https://eoapi.dev/). These are powered by [titiler-pgstac](https://github.com/stac-utils/titiler-pgstac) and [PgSTAC](https://github.com/stac-utils/pgstac), which together enable dynamic tiling and rendering of STAC-compliant assets directly from storage based on pre-defined collection-level metadata fields.

It exposes a [FastAPI](https://fastapi.tiangolo.com/)-based interface, supporting image formats such as PNG, JPEG and standard interfaces such as WMTS.

Future tutorials for eoAPI will become available in the tutorial section once possible.

## Functionality

### Catalog Your Data

[PgSTAC](https://github.com/stac-utils/pgstac) is an optimized Postgres schema to index and search large-scale STAC collections.

Ingesting the existing STAC items to the database can be done in multiple ways:

- Manually via [pypgstac](https://stac-utils.github.io/pgstac/pypgstac/) as `pypgstac load items`
- Manually if [transaction extension](https://github.com/stac-api-extensions/transaction?tab=readme-ov-file#methods) is enabled, then STAC data can be pushed to the API endpoint directly using POST/PUT requests.

### Make it Searchable

This service utilizes `stac-fastapi` to publish and manage metadata describing its datasets, enabling machine-readable search, querying, filtering, and cataloging across collections.

![eoapi_stac](assets/eoapi_stac.png)


### Visualize Raster Data

titiler-pgSTAC is a TiTiler extension that connects to pgSTAC to support large-scale dynamic mosaic tiling for visualizing STAC collections and items.

![eoapi_dynamic_tiler](assets/eoapi_dynamic_tiler.png)

### Visualize Vector Data

It utilizes [tipg](https://github.com/developmentseed/tipg), a Vector Tiling Service for the OGC Features and OGC Tiles specifications.

![tipg](assets/tipg.png)



## Related use cases

- [Generate Results](../use_cases/result_generation.md)
- [Provide an Algorithm as a Service](../use_cases/algorithm_as_a_service.md)
