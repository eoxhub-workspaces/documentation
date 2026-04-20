# Integration Requirements for Argo Workflows on EOxHub

This document is intended as support material to describe how to best provide a capability implementation and its description in order to allow EOX to integrate it as a workflow inside of an EOxHub Workspace. This includes input definitions, expected Docker image standards, and output formats.

## Input Requirements

To ensure compatibility with various interfaces (e.g. OGC Process API) to allow on demand execution of the capability some input requirements need to be considered. Furthermore information providing more context is needed regarding following points:

- Description of expected input data - does the service expect data already present or data are downloaded as part of the dockerized algorithm?
- Description of expected argument and parameters
- Description of expected output - see Output requirements section


### Arguments and parameters

eodash processing widget support multiple ways how to pass input. 
- Area/location - process can take as input drawn point or polygon from the eodash user interface. For this integration, input field must accept eather coorinates directly or geoJSON as a string. File input is not accepted. 
    - Example GeoJSON Feature String '{"type":"Feature","geometry":{"type":"Polygon" "coordinates":[[[30,10],[40,40],[20,40],[10,20],[30,10]]]},"properties":{}}'
- Date - standard HTML Format date formats are supported. eodash also supports start and end time to create range. 
    - "YYYY-MM-DD" e.g. 2015-05-30 for date.
    - "YYYY-MM-DDThh:mm" for datetime 2025-07-02T06:33 
- Numeric fields - integer or float values
- Text fields
- Dropdowns with limited options
  

All fields can have default value


## Docker Image Requirements

Your process must be encapsulated in a Docker image. There are no strict limitations of what can be done, but there are good practices that help integration:

- image is "slim" - only with required dependencies installed
- image is tagged with version based on [semantic versioning](https://semver.org/)
- algorithm logs to standard out (stdout) helping debug potential issues
- simpler if no sideloading/sidecars (docker in docker) and similar
- no special volumes, network expectations, ...

We expect to know resource usage estimation - RAM consumption and CPU estimates.



## Output Requirements

The workflow should store its results in `/output` folder, which will be collected automatically by our processes.

Expected outputs:
- Results (e.g., COG, geoJSON, CSV)
  - Inputs are expected to be cloud-native so for raster output formats, COGs are expected, for vector data geoJSON for small files up to 5Mb or flatGeobuf 
- Logs (optional but encouraged)


Outputs must be:
- Written with unique filenames if multiple files are generated.
- Validated (e.g., for COG format or JSON schema compliance).



##  Sample Checklist

To submit your process for integration, make sure these information are included:
- [ ] Dockerfile included and builds correctly
- [ ] README with usage instructions and input/output description
- [ ] Sample call example
- [ ] License file / link to repository (not mandatory)
- [ ] Sample input/output for testing
- [ ] Visualisation expectations

---

Please contact the EOxHub team or submit a ticket if youneed more information.