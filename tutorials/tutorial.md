# Intergrating WMTS dataset using Data Editor

## Integrating a dataset from the Copernicus Marine Data Store into the eodashboard.org service


1\. Navigate to [https://data.marine.copernicus.eu/products](https://data.marine.copernicus.eu/products)

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/48b4e82c-878c-4d00-a7c0-ac012bb0d57c/ascreenshot.jpeg?tl_px=55,98&br_px=1431,867&force_format=jpeg&q=100&width=1120.0)

\
2\. Search for the dataset you are interested in, for example by using the Click the "Free text" search. (In order for free search to work it seems you need to add also a date range or it will get stuck), for example you can type "chlorophyll a" enter a time range.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/48b4e82c-878c-4d00-a7c0-ac012bb0d57c/ascreenshot.jpeg?tl_px=0,25&br_px=1376,794&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=215,277)

\
3\. Let us continue the example wit "Global Ocean Colour".

Click "Global Ocean Colour (Copernicus-GlobColour), Bio-Geo-Chemical, L4 (monthly and interpolated) from Satellite Observations (Near Real Time)"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/57663edc-293c-45c2-a269-b2e39dce7073/ascreenshot.jpeg?tl_px=0,196&br_px=1376,966&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=401,448)

\
4\. Click "Data access"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/220415b4-7472-4da6-9f56-ae5503d6123a/ascreenshot.jpeg?tl_px=0,0&br_px=1376,769&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=156,265)

\
5\. Click "WMTS"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/3254cf73-3c4e-4a83-9c41-05cd737e2789/ascreenshot.jpeg?tl_px=110,196&br_px=1487,966&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=935,426)

\
6\. Use search within the WMTS xml file to find the [[&lt;Layer]] you are interested in which includes the [[ows:Identifier]] you will need for the form later, as well as valuable  information in the [[VariableInformation]] and default style

\
7\. Go to EO Dashboard workspace <http://workspace.eodashboard.org/> and log-in.

If you do not have an account you need to register. Currently new users need to be manually authorized to get access

\
8\. Click "Data Editor"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/8007bc3f-c097-4138-899d-f2e948c989d0/ascreenshot.jpeg?tl_px=0,0&br_px=1376,769&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=55,77)

\
9\. Click "Start New Session"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/5e188fe6-a81d-4b31-b0d5-ffe6aef63943/ascreenshot.jpeg?tl_px=239,0&br_px=1487,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=985,54)

\
10\. Click the "Session Name" field.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/8e156e95-0245-46e5-be81-204284178b52/ascreenshot.jpeg?tl_px=0,0&br_px=1247,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=486,131)

\
11\. Type the session name you want to have e.g. "new_cmems_data"

\
12\. Click "Create"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/fe93defb-9c28-4f24-ad17-dd76f23a096a/ascreenshot.jpeg?tl_px=239,0&br_px=1487,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=926,131)

\
13\. Click "Add/Edit File Manually"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/1c4f4adb-a6bf-4d81-b222-23ae1065f0b4/ascreenshot.jpeg?tl_px=87,269&br_px=1334,966&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,396)

\
14\. Click the "File Name" field.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/05dc372a-5b04-4c77-a1c3-c2dd70d82480/ascreenshot.jpeg?tl_px=239,0&br_px=1487,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=693,120)

\
15\. Type "col"

\
16\. Select the "collections" folder

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/50df73fb-f52b-4ba0-81a2-bfc40b69ddfe/ascreenshot.jpeg?tl_px=0,0&br_px=1247,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=517,184)

\
17\. Type the name to use as collection file name (has to be a JSON file), e.g. "/cmems_data_1.json" (A new button will be introduced to simplify this step in the future)

\
18\. Click "Create"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/4a198f97-47b3-4322-bf4d-2c4461573401/ascreenshot.jpeg?tl_px=239,0&br_px=1487,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=930,133)

\
19\. Start filling out the fields:

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/27329bfa-1663-41f7-aeee-dacac3ee3797/ascreenshot.jpeg?tl_px=0,48&br_px=1247,745&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=305,277)

\
20\. Type "cmems_data_chl"

\
21\. Add a title

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/8ae36a77-5d9f-444b-bb1f-aa06b2d6349a/ascreenshot.jpeg?tl_px=0,220&br_px=1247,917&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=270,277)

\
22\. Add an Eodashidentifier, it should be unique among the available collection, will be used in the URL to link to it directly e.g: ?indicator=CMEMS_CHL

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/48b75e45-03f1-4d4c-b57d-376ccceca67e/ascreenshot.jpeg?tl_px=0,269&br_px=1247,966&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=316,360)

\
23\. Optional properties can be enabled by clicking the check boxes

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/79a980f3-c8a9-48a4-abcd-e33ec71883af/ascreenshot.jpeg?tl_px=0,269&br_px=1247,966&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=224,350)

\
24\. Add some description for the dataset as markdown text

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/af314207-c735-4c45-86fd-01352b0c4f1a/ascreenshot.jpeg?tl_px=0,269&br_px=1247,966&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=356,350)

\
25\. Click to resources, in principle all other tabs are optional

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/d2938331-8e0c-44e2-a773-75ae4aa636ce/ascreenshot.jpeg?tl_px=0,0&br_px=1247,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=501,220)

\
26\. Click on the plus symbol

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/aaa034e6-50e0-42cb-8c6a-66850b0801a7/ascreenshot.jpeg?tl_px=0,31&br_px=1247,728&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=306,277)

\
27\. Select the resource type, in this case "Copernicus Marine Data Store WMTS"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/e789e2be-27c5-4c0f-8e16-ab78420e9c1d/ascreenshot.jpeg?tl_px=0,138&br_px=1247,835&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=352,277)

\
28\. Click on endpoint

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/26abf052-89fb-44cb-b25a-f45738cc5f8f/ascreenshot.jpeg?tl_px=0,31&br_px=1247,728&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=324,277)

\
29\. Copy the URL from the WMTS tab you opened earlier and remove the section starting from the question mark e.g. from [https://wmts.marine.copernicus.eu/teroWmts/OCEANCOLOUR_GLO_BGC_L4_NRT_009_102/cmems_obs-oc_glo_bgc-plankton_nrt_l4-olci-300m_P1M_202211?request=GetCapabilities&service=WMS](http://wmts.marine.copernicus.eu/teroWmts/OCEANCOLOUR_GLO_BGC_L4_NRT_009_102/cmems_obs-oc_glo_bgc-plankton_nrt_l4-olci-300m_P1M_202211?request=GetCapabilities&service=WMS) to:

[https://wmts.marine.copernicus.eu/teroWmts/OCEANCOLOUR_GLO_BGC_L4_NRT_009_102/cmems_obs-oc_glo_bgc-plankton_nrt_l4-olci-300m_P1M_202211](http://wmts.marine.copernicus.eu/teroWmts/OCEANCOLOUR_GLO_BGC_L4_NRT_009_102/cmems_obs-oc_glo_bgc-plankton_nrt_l4-olci-300m_P1M_202211?request=GetCapabilities&service=WMS)  and paste it into the field

\
30\. Click here.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/3d3619ab-2ccc-4f31-88c7-8a31288265a7/ascreenshot.jpeg?tl_px=0,131&br_px=1247,828&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=369,277)

\
31\. Type "marinedatastore" in the Name field as well as "WMTSCapabilities" in the Type field.

\
32\. Fill in the LayerID field

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/85b9a6d2-a8b5-4026-899e-bdb1b46e2c48/ascreenshot.jpeg?tl_px=0,182&br_px=1247,879&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=304,277)

\
33\. You can enable the time query start and end parameter to only retrieve specific time extent, for example 2024-01-01T00:00:00Z to 2025-01-27T00:00:00Z

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/64c51603-2741-4619-a5f3-0247e1bdf6d2/ascreenshot.jpeg?tl_px=0,269&br_px=1247,966&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=254,289)

\
34\. The dimensions specification through the UI is still in progress

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/a843da1c-4006-42b5-9a5e-2b85943907e4/ascreenshot.jpeg?tl_px=0,117&br_px=1247,814&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=318,277)

\
35\. Click "Save"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/1c75d088-759d-42cf-b3c5-04bb4c838541/ascreenshot.jpeg?tl_px=239,0&br_px=1487,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=1012,53)

\
36\. After about 1 minute right-click "on the preview field" (probably in white area on the right side), search for Reload frame option and click it. If not found it is also possible to reload the whole page and navigate back to the file you were editing.

\
37\. Click to expand the preview (currently an issue that it falls back to mobile view)

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/05247c88-fa01-4048-beae-231d54fdaf35/ascreenshot.jpeg?tl_px=239,0&br_px=1487,696&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=1052,194)

\
38\. Click to select indicator

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/0d12efc1-675e-497a-b21b-d3a9b0ba3a4b/ascreenshot.jpeg?tl_px=0,0&br_px=1244,695&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=350,206)

\
39\. You should see the indicator you just added, click on it

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/840b56fe-94ea-415e-b2b6-f680e310b409/ascreenshot.jpeg?tl_px=0,37&br_px=1244,732&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=370,277)

\
40\. You should see the preview of your newly integrated indicator

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-04-25/82c5a129-6080-48b4-86ab-92d5bdc522a7/ascreenshot.jpeg?tl_px=99,118&br_px=1344,813&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,277)

\
41\. The elevation should be specified as Dimension (currently not possible through UI) it defaults to some value (not 0) making the data rendering look different then in the CMEMS data explorer)


