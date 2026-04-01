# How to Use Headless Notebooks for Parameterized Notebook Execution

Learn how to leverage headless notebooks to run your Jupyter notebooks with dynamic parameters. This guide walks you through starting a server, executing a notebook, and managing job outputs for automated analysis.

1\. Navigate to your workspace  -  this tutorial is shown on specific workspace but can be reproduced anywhere where this application is enabled

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/0418d570-967e-49e9-978b-3acbac48f27a/ascreenshot_96322cbebd8e4479808e7c8a9c6a833a_text_export.jpeg)

\n
2\. Click "Headless Notebook" to verify that the application is enabled. If this icon is missing, please contact our support or your workspace administrator to add it

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/aacfe709-2d5a-4e86-8852-19ae46a44b24/ascreenshot_22667693b4e64aed93e8cc4cf1695f84_text_export.jpeg)

\n
3\. Now lets start Jupyter Hub to prepare your notebook

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/097a37f2-79e2-4039-a061-ec66b70808e2/ascreenshot_94c38724c4bb4f02b437103d6c6dddf4_text_export.jpeg)

\n
4\. For pygeoapi worker to find the correct notebook, it needs to be created in specific structure of a shared folder. Inside of **shared** **folder** there is an another **folder** **named** **the** **same** **as** **the workspace** - this is the correct location.\
Shared folder is shared among all users in the workspace and also with the pygeoapi. \
\
Inside this folder the structure can be arbitrary - separated into many other folders or just a single notebooks.

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/7e7e36ee-1f58-4be7-b63e-900099ee3eb3/ascreenshot_4c45ec3f55ac4c2f9eebe262536297ce_text_export.jpeg)

\n
5\. Open notebook and write your code into the cells

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/b4543b30-5b46-4167-85da-21f635059c6f/user_cropped_screenshot_850a27cea8434ccdbc6924c317815f56_text_export.jpeg)

\n
6\. The cell which should take input parameters from the headless call needs to be adjusted and explicitly the parameters (variables) with the default values need to be assigned.**

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/dcbbb451-19fc-425e-b51c-1cf0f74b7ccb/user_cropped_screenshot_481057b49a0346ffbaec084617874580_text_export.jpeg)

\n
7\. Additionally to explicitly setting default parameters, the cells with them needs to be tagged "parameters". Save notebook once you are done.

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/15692823-162d-4e28-b29f-d4ff7254775c/user_cropped_screenshot_9dbcc1cbd33f4274862c3948a67292bb_text_export.jpeg)

\n
8\. To trigger the **headless execution**, you need send a request to a specific endpoint. \
Inside the call you can specify:\
- a specific **kernel** (if not specified, it will automatically use the same kernel which was saved with notebook), the input should be the **full kernel name**\
- **parameters** to be overwritten by execution\
- **full path** to the notebook \
\
Optionally it is possible to include resource limits, like CPU or RAM.\
\
This request can be send via any application user prefers, not only direct curl call.\
\
Here is **example** call in curl:\
\
curl --include \\ \
--request POST 'https://pygeoapi-eoxhub.{your-workspace-url}/processes/execute-notebook/jobs' \
--header 'Content-Type: application/json' \
--data-raw '{\
"inputs":{\
"notebook":"/home/jovyan/.shared/{your-workspace-url}/{your-notebook-name}.ipynb",\
"kernel": "{full-kernel-name}",\
"parameters_json":{\
"a": "1",\
"b": "2"\
}\
}\
}'

\n
9\. Executed notebooks and their results can be found in the sub-folder **job-output** in the same location as the originating notebooks.\
All the cells will be executed so opening the notebook can be used for debugging purposes.

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-06/bd0f26c1-d89c-45a1-b2f1-44e46334741d/user_cropped_screenshot_f3238939be0b4ae9818e3443336cfcaa_text_export.jpeg)

\n
10\. In the "**Headless Notebook**" application you can track the progress of the running jobs and also explore details like parameters used and running time.

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/77e8cbca-d19b-4134-a2be-4ea3d05172d6/ascreenshot_8e2e07d2a69e41658e5f09cc4d2586e3_text_export.jpeg)

\n
11\. Upon clicking "Browse jobs" you can browse all the headless jobs in the workspace

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/36b8e364-4459-4bbb-8b1f-53cc6e29d3ed/ascreenshot_008dab95d6a642ac9a6e4579eb175c90_text_export.jpeg)

\n
12\. 

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/7fdab7f3-f3a0-4922-b0bc-57205f504fee/ascreenshot_f209e1d7c5984090af07fdfa26d1db48_text_export.jpeg)

\n
13\. Clicking on the Job-ID you can access details

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-05/72412cfb-283c-4f6c-9243-3b334decfcc1/ascreenshot_242051d26cd3469b8aada3f0ad0ec592_text_export.jpeg)

\n
14\. Opening the desired job details will show passed parameters of the call including **kernel** or exact values of the **parameters**. This helps reproducibility and traceability of the executed algorithms.

![](https://colony-recorder.s3.amazonaws.com/files/2026-03-06/0503d88d-bc5b-4148-a6df-8297b58301a7/user_cropped_screenshot_09e442957be14e2988504041a0fd0b2f_text_export.jpeg)