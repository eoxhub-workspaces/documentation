# Integration Requirements for Argo Workflows on EOxHub

This document is intended as support material describing how to provide a capability implementation and its description so that EOX can integrate it as a workflow within an EOxHub Workspace. This includes input definitions, expected Docker image standards, and output formats.

## Input Requirements

To ensure compatibility with various interfaces (e.g. OGC Process API) and allow on-demand execution of the capability, some input requirements need to be considered. Furthermore, additional information is needed regarding the following points:

- Description of expected input data - does the service expect data already present or data are downloaded as part of the dockerized algorithm?
- Description of expected arguments and parameters
- Description of expected output - see Output requirements section


### Arguments and parameters

The eodash processing widget supports multiple ways of passing input. 
- Area/location — the process can take a drawn point or polygon as input from the eodash user interface. For this integration, the input field must accept either coordinates directly or GeoJSON as a string. File input is not accepted.
    - Example GeoJSON Feature String '{"type":"Feature","geometry":{"type":"Polygon" "coordinates":[[[30,10],[40,40],[20,40],[10,20],[30,10]]]},"properties":{}}'
- Date — standard HTML date formats are supported. eodash also supports start and end times to create a range. 
    - "YYYY-MM-DD" e.g. 2015-05-30 for date.
    - "YYYY-MM-DDThh:mm" for datetime 2025-07-02T06:33 
- Numeric fields - integer or float values
- Text fields
- Dropdowns with limited options
  

All fields can have a default value


## Docker Image Requirements

Your process must be encapsulated in a Docker image. There are no strict limitations of what can be done, but there are good practices that help integration:

- The image is "slim" — only the required dependencies are installed.
- The image is tagged with a version based on [semantic versioning](https://semver.org/).
- The algorithm logs to standard output (stdout) helping to debug potential issues.
- Avoid sidecars, Docker-in-Docker (DinD), and similar additional services where possible.
- no special volumes, network expectations, ...

We expect to know resource usage estimation - RAM consumption and CPU estimates.



## Output Requirements

The workflow should store its results in `/output` folder, which will be collected automatically by our processes.

Expected outputs:
- Results (e.g., COG, geoJSON, CSV)
    - Inputs are expected to be cloud-native. For raster output formats, COGs are expected; for vector data, GeoJSON is recommended for small files up to 5 MB, or FlatGeobuf for             larger files.
- Logs (optional but encouraged)


Outputs must be:
- Written with unique filenames if multiple files are generated.
- Validated (e.g., for COG format or JSON schema compliance).



##  Sample Checklist

To submit your process for integration, make sure this information is included:
- [ ] Dockerfile included and builds correctly
- [ ] README with usage instructions and input/output description
- [ ] Sample call example
- [ ] License file / link to repository (not mandatory)
- [ ] Sample input/output for testing
- [ ] Visualisation expectations

---

Please contact the EOxHub team or submit a ticket if you need further information.
