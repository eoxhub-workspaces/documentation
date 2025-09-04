# Publishing Data workflow

This tutorial explains the complete workflow for preparing, uploading, styling, and publishing datasets in an EOXHub Workspace which includes multiple of the available Applications within EOxHub. It is intended as overview and does not go too deep into the options within the various steps, but provides follow on resources if more information is needed. The same steps apply across all workspace instances (e.g., GTIF Austria, Cerulean, and other environments). 

For more information on the dedicated Applications, please further explore this documentation.

```{note}
The Publishing of data in the Dashboard is only available for workspaces that have added the paid option **Dashboard as a Service (DaaS)**
```

The tutorial covers:

- Uploading data with the File Browser  
- Creating and configuring datasets in the Data Editor  
- Using Cloud-Optimized GeoTIFF (COG) sources  
- Defining styles (color scales, legends, no-data handling)  
- Combining multiple datasets into one indicator  
- Adding previews and legends   
- Publishing datasets to the Dashboard  

---

## 1. Uploading Data with the File Browser

The [**File Browser**](file-browser) is the entry point for adding data to a workspace.  
You can upload files (COG, GeoJSON, style files, preview images, etc.) directly in the browser.

- Files in the **`public` folder** are openly accessible and can be integrated into the Dashboard.  
- Each instance (where available) provides permanent **public URLs** for assets.

Example URL structure:

```text
https://workspace-ui-public.<instance>.hub.eox.at/api/public/share/public/<filename>.tif
```
The exact url as well as a short description is provided within the README.txt inside the public folder of your workspace.

> ⚠️ Presigned URLs generated from the File Browser are **temporary** and should not be used in the Dashboard configuration. Always use the permanent public URL.

---

## 2. Creating a Dataset in the Data Editor

Once your files are uploaded, you need to register them in the **Data Editor**.

The basic steps are:

1. Go to **Data Editor → Create Session**.  
2. Add a new **Collection**:
   - Under **Resources**, select *Cloud Optimized Geotiff (COG) Source*.  
   - Add an URL to a style definition (see next step for further information)
   - Add at least one item to the  Time entries  
   - Add an Asset to the item
   - Set the public URL to your public file (e.g. uploaded file as described above)

Example entry for a COG resource:

```json
{
  "time": "2019-06-27T00:00:00Z",
  "assets": {
    "file": "https://workspace-ui-public.example.hub.eox.at/api/public/share/public/example.tif"
  }
}
```

More detailed guides are available for multiple scenarios:

* [Integrating GeoJSON dataset using Data Editor](geojson_tutorial)
* [Integrating WMTS dataset using Data Editor](wmts_tutorial)

---

## 3. Defining Styles

COGs with numeric values (e.g., temperature) require a style definition.  
The style is based on [OpenLayers expressions](https://openlayers.org/en/latest/apidoc/module-ol_expr_expression.html#~ExpressionValue) using [OpenLayers flat style](https://openlayers.org/en/latest/apidoc/module-ol_style_flat.html) definition.

Currently the json file needs to be made available on a publicly accessible location, you can use the public folder of your workspace, or if you would like to use change tracking (style files can become intricate depending on the use case) you could use a service like github.com. If you do you github, make sure to use the **raw** link to the file (by clicking on the "Raw" button and copying the opened URL).

Further information on styling in the eodash client can be found in the [eodash documentation](https://eodash.org/data.html).

An experimental client to help quicker iterate in the style definition is available under https://eodash.github.io/eodash-style-editor/. There you can set a URL for your dataset and work on the style definition live. Please take into account this is not a fully functioning experimental helper tool. A more streamlined integration is envisioned and the deployment of the current tool will probably change.

Example: Temperature color scale with no-data handling:

```json
{
  "color": [
    "case",
    [">", ["band", 1], 0],
    [
      "interpolate",
      ["linear"],
      ["band", 1],
      290,
      [0, 0, 255, 1],
      310,
      [253, 0, 0, 1]
    ],
    [0, 0, 0, 0]
  ]
}
```

- `[255, 255, 255, 1]` = RGBA values (RGB: 0–255, Alpha: 0–1).  
- `["band", 1]` = first band of the COG.  
- `"interpolate"` = smooth gradient between values.  

> ❌ JSON does not support comments (`// ...`). Make sure to not use them in the definition or parsing will fail.

### Adding a Legend

There are in principle three approaches for defining a legend.

1. Using **legend** property within the style definition

If your style utilizes variables and allows dynamic changes, e.g. value range change, this is the best alternative, as it allows to bind the legend to the variables, so it will update according to user changes. For a static legend you can use following in your style:

```json
{
  "color": {...}, // full color definition to be filled
  "legend": {
    "title": "Title text",
    "range": [
      "rgba(0, 0, 255, 1)",
      "rgba(170, 170, 170, 1)",
      "rgba(255, 0, 0, 1)"
    ],
    "domain": [0, 10]
  },
   "jsonform": {
        "type": "object",
        "title": "Data configuration",
        "properties": {}
   }
}
```
For dynamic changes instead of "domain", "domainProperties" can be used:
```json
{
  "color": {...}, // full color definition to be filled
  "legend": {
    "title": "Title text",
    "range": [
      "rgba(0, 0, 255, 1)",
      "rgba(170, 170, 170, 1)",
      "rgba(255, 0, 0, 1)"
    ],
    "domainProperties": ["vmin", "vmax"]
  },
  "variables": {
    "vmin": 2,
    "vmax": 10
  },
  "jsonform": {
    "type": "object",
    "title": "Data configuration",
    "properties": {...} // full definition of form fields to manipulate variables
   }
}
```
Apart from that it is possible to:

2. Provide **Colorlegend** in collection definition

Add the Colorlegend property for a collection in the Data Editor (or collection json definition). [Here](https://github.com/eodash/eodash_catalog/wiki/Colorlegend) is more information on the properties.


3. **Legend** in collection definition

If the legend needs to be completely custom it is possible to use an image. The URL to the image can be specified in the optional Legend property of the collection in the Data Editor.

---

## 4. Combining Multiple Datasets

You have two main options:

### Option A: Collections under one Indicator
- Create two Collections (e.g., temperature, cooling degree days).  
- Combine them under one Indicator definition.  
- Update the `catalog.json` to reference the new indicator.

Example indicator (simplified):

```json
{
  "id": "combined_indicator",
  "collections": ["temperature_collection", "cooling_degree_collection"]
}
```

### Option B: Multiple Bands in One Asset
If both datasets share the same spatial/temporal extent:
- Add them as separate bands in one asset.  
- Access via `["band", 1]`, `["band", 2]` in your style.

This allows very interesting dynamic band arithmetic and filtering options combining datasets.

---

## 5. Adding a Preview Image

You can add a preview image under **General → Image**. For hosting the image you can use for example the File Browser to upload it to the public folder.

Example:

```json
"image": "https://workspace-ui-public.example.hub.eox.at/api/public/assets/preview.jpg"
```

⚠️ Make sure:
- The preview file is uploaded to the `public` folder.  
- You use the **full URL** (not a relative path).  

---

## 6. Publishing the Dataset

Workflow:
1. Work in a **test session** in the Data Editor.  
2. Validate dataset and style in the Preview.  
3. Mark the session as **Ready for Review**.  
4. Once approved, the session is merged into the **public catalog** and displayed in the associated public dashboard.  

---

## 7. Troubleshooting

- **Styles not working** → Remove comments (`//`) from JSON.  
- **Wrong colors displayed** → Check style file URL, alpha values, and cache refresh.  
- **Preview image not visible** → Ensure correct full URL, not a relative path.   
- **Legend missing** → Make sure one of the 3 options described is used.  

---

This covers the main steps for publishing data by **uploading, styling, combining, and publishing** in an EOXHub Workspace.
For more information on the used Applications further explore the documentation.
