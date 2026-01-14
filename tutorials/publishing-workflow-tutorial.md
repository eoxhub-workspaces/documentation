# Publishing Data workflow

This tutorial explains the complete workflow for preparing, uploading, styling, and publishing datasets in an EOXHub Workspace which includes multiple of the available Applications within EOxHub. It is intended as overview and does not go too deep into the options within the various steps, but provides follow on resources if more information is needed. The same steps apply across all workspace instances (e.g., GTIF Austria, Cerulean, and other environments). 

For more information on the dedicated Applications, please further explore this documentation.

```{note}
The Publishing of data in the Dashboard is only available for workspaces that have added the paid option **Dashboard as a Service (DaaS)**
```

## Prerequisites

In order to submit a data publishing request for raw resource, i.e. a data format that can directly be visualized by the dashboard (Cloud optimized GeoTIFF (COG), GeoJSON, FlatgeoBuf) you need following things:

1. **Have a geo file that is accessible through public URL**
2. **Have a style definition file that is accessible through public URL**

The tutorial covers how to achieve the prerequisites within an EOxHub Workspace environment and various other aspects of the Data Publishing submission:

- Uploading data with the File Browser
- Defining style (color scales, legends, no-data handling)
- Creating and configuring datasets in the Data Editor
  - Using Cloud-Optimized GeoTIFF (COG) sources
  - Combining multiple datasets into one indicator
  - Adding previews and legends

---

## 1. Uploading Data with the File Browser

For the first prerequisite (publicly available geo-file) it is possible to use the File browser application. The [**File Browser**](https://documentation.hub.eox.at/file-browser/) allows adding data to a workspace.

A special public folder is available where you can upload the files which are expected to be published.
You can upload files (Tiff (Cloud Optimized Geotiff - COG), GeoJSON, style files, preview images, etc.) directly in the browser.

Once a file is uploaded it can be accessed through a special URL, similar to following:

```text
https://workspace-ui-public.<instance>.hub.eox.at/api/public/share/public/<filename>.tif
```

The exact url as well as a short description is provided within the README.txt inside the public folder of your workspace.
Presigned URLs generated from the File Browser are **temporary** and should not be used in the Dashboard configuration. Always use the permanent public URL.

> ⚠️ Upload through the browser to the workspace storage has some size limitations, files over ~100 MB should be uploaded differently.

### Raw Data formats

Here is more information on the supported formats:

* Raster Data:
  - Use Cloud-Optimized GeoTIFF (COG)
    - Ideally in EPSG:3857 projection for best support performance
    - Other projections should also work but have a performance penalty when being visualized
  - Can be a single file or a time series (multiple files).
  - Ideally encode the date and time in the filename using ISO format: YYYY-MM-DDTHH:MM:SS.
  - Bands:
    - RGB bands (already prepared as final visualization), or
    - Data bands in which case a style will be needed (see section 3.)
* Vector Data:
  - Use GeoJSON if the file size is under ~10 MB, or FlatGeobuf for larger datasets
    - Even larger datasets should be handled differently, will need dedicated tile server
  - Will need a style definition as described in section 3.

- Files in the **`public` folder** are openly accessible and can be integrated into the Dashboard.  
- Each instance (where available) provides permanent **public URLs** for assets.

Additional information on resource properties, such as raw data source can be found in the eodash_catalog wiki for [Resource](https://github.com/eodash/eodash_catalog/wiki/Resource).

---

## 2. Style Definition

COGs with numeric values (e.g., temperature) as well as vector data (GeoJSON, FlatGeobuf) require a style definition so that it is clear how they should be visualized.

This section covers handling the second pre-requisite, creating and making the style available online.

### Style creation

The style is based on [OpenLayers expressions](https://openlayers.org/en/latest/apidoc/module-ol_expr_expression.html#~ExpressionValue) using [OpenLayers flat style](https://openlayers.org/en/latest/apidoc/module-ol_style_flat.html) definition.

Further information on styling in the eodash client can be found in the [eodash documentation](https://eodash.org/styling.html).

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

### Style online deployment

Using the same logic as making the cloud optimized file available online, we can use the File Browser to upload or directly create the style json file to a location within the public folder.
If you want to create the style and copy the style configuration content from the style editor, you can click on "New file" 📄, name it for example style.json, and in the opened editor paste your configuration. Make sure to click on save button 💾 once done.
Then you can use the public endpoint as explained previously.

There are of course other ways of making a file public, many services exist especially for a json format. Style files can become intricate depending on the use case or done as collaboration activity so it might be beneficial to use a service that provides change tracking.

## 3. Submitting a data publishing request

Once your files are uploaded, you need to register them in the **Data Editor**.

The basic steps are:

1. Go to **Data Editor → Start New Session**.  
2. Automation → Create Dataset Submission:
  - Enter Data Title and click Submit
3. Inside opened form:
  - Make sure identifier has no special characters or white spaces
  - Under **Resources**, click on the plus (+) sign
  - Under item 1 select *Cloud Optimized Geotiff (COG) Source*.  
  - Add to the Style field the URL to a style definition (prerequisite 2 - as described in section 2 previously)
  - Draw a bounding box dashboard should zoom to when dataset selected (click → move mouse → click again to define rectangle)
  - Click plus (+) TimeEntries
  - Write a Time string in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, e.g. YYYY-MM-DD or just year YYYY
  - Click on the plus (+) sign of the Assets field
  - Add an identifier string, e.g. data
  - Paste the URL to your public file into the File field (prerequisite 1 - as described in section 1 previously)

Example entry for a COG resource:

```json
{
  "time": "2019-06-27T00:00:00Z",
  "assets": {
    "file": "https://workspace-ui-public.example.hub.eox.at/api/public/share/public/example.tif"
  }
}
```

This is intended as short summary, for more detailed guide with screenshots please look at [Integrating GeoJSON dataset using Data Editor](geojson_tutorial), where the shown steps are applicable to all raw resource submissions.

---

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

### Combining Multiple Datasets

If multiple datasets should be shown together in the dashboard, there are mainly two options:

#### Option A: Collections under one Indicator
- Create two Collections (e.g., temperature, cooling degree days).  
- Combine them under one Indicator definition.  
- Update the `catalog.json` to reference the new indicator.

It is possible to use the "Browse Files" button in the Data Editor to find and modify most text based files. As alternative the changes can be made directly into the github repository if that is considered an easier alternative.

Example indicator (simplified):

```json
{
  "id": "combined_indicator",
  "collections": ["temperature_collection", "cooling_degree_collection"]
}
```

#### Option B: Multiple Assets for one Time Entry
If both datasets share the same spatial/temporal extent:
- Add multiple assets inside one time entry  
- Access via `["band", 1]`, `["band", 2]` in your style

This allows very interesting dynamic band arithmetic and filtering options combining datasets.

Example json structure:
```json
"TimeEntries": [
  {
    "Time": "20250101",
    "Assets": [
      // equivalent to ["band", 1]
      {
        "Identifier": "temperature",
        "File": "https://workspace-ui-public.gtif-austria.hub-otc.eox.at/api/public/temperature2025.tiff"
      },
      // equivalent to ["band", 2]
      {
        "Identifier": "humidity",
        "File": "https://workspace-ui-public.gtif-austria.hub-otc.eox.at/api/public/humidity2025.tiff"
      }
    ]
  }
]
```

---

### Adding a Preview Image

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
- **For any workspace external sources** → Externally hosted resources often cannot be directly integrated into another web client unless the server hosting the resource sets the proper cross-origin (CORS) headers in its responses. You can verify this using online tools such as https://cors-test.codehappy.dev/ (not affiliated with this service—use at your own discretion).

---

This covers the main steps for publishing data by **uploading, styling, combining, and publishing** in an EOXHub Workspace.
For more information on the used Applications further explore the documentation.
