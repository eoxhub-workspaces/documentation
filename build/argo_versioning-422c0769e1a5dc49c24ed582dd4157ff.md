# Creating and Editing Workflows in Argo Versioning

**What you’ll accomplish:** Create an example argo workflow, save it, execute it and see resource consumption.  
**Applications used:** [Argo Versioning](../../applications/argo_versioning.md)   
**Estimated time:** 5-10 minutes  
**Before you start:** You need access to a Workspace where Argo Versioning is enabled.  

Learn how to build, customize, and track changes to your workflows using the Argo Versioning interface. This guide demonstrates how to create a new process, review task outputs, and see version history to ensure your automation runs exactly as intended.

1\. Navigate to your EOxHub Workspace and open Argo Versioning

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/b2e7eb78-6df5-49a2-a324-f615fb996a5a/action-00f18017399e4c9b9fff3a7c79277689_0b8aad4b0a1d481bbe50a905457d965a_text_export.jpeg)


#### Workflow Setup


2\. In order to create a new Workflow, click on New Workflow which will open a modal with configuration options.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/b2e7eb78-6df5-49a2-a324-f615fb996a5a/action-00f18017399e4c9b9fff3a7c79277689_768dce7acebf4ad79160f889ca197315_text_export.jpeg)


3\. Enter a identifying name and if needed select the workflow kind from the dropdown.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/73bfc013-9881-4592-aa47-4367b63837be/action-c0689fa55d0a45ceb40c8e72fb2f7208_2f12330c49ad48ef8cd5615ae0a3538c_text_export.jpeg)


4\. If you want to change the resource profile allocation also do so in this dropdown.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/68d804ec-d124-4472-993b-552ecd4bdb19/action-22f9b6b1a0844483a8154cd8870479a3_56af4cc0c53e447eacefce5c056084cb_text_export.jpeg)


5\. Once form configured finish by clicking on "Create"

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/f2a1088c-0f61-49f1-89aa-3ed3f5bcae7f/action-a62b4f10a6034f3a966288de11076b27_bb542929e8284ba9b1fe9107612818ff_text_export.jpeg)


6\. Now a pre-populated workflow definition file will be shown in the editor. You can change this to fit the workflow you would like to run. (If you want to use [Headless Execution](../../applications/headless_execution.md) make sure to leave the `entrypoint` as `execute`)

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/7f695ab3-bb7c-4fc2-ab55-2d8e3630b1f1/action-56e821a518f44607a24d58b555529aa6_d09ce97c8d3a45dab065ee7d13eb2e2c_text_export.jpeg)


#### Run and Review


7\. When you want to save your changes, you can either click "Save" or if finished also directly click "Save & Run"

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/051035d9-7f0f-4b65-9229-b483cf73182d/action-44a480b38aac4342956705cb7018fdb1_650ce31cc8dd4834b06366410c819524_text_export.jpeg)


8\. In order to have an overview of the current runs for your workflow click on "Runs"

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/c9c6bd82-ba1b-4d7e-b107-8fd0ad0a944d/action-a47be23f12254ae486d95025c7dfd23a_2c61053afb724e7fac0d38a2c4f587f3_text_export.jpeg)


9\. Here you will see a list of runs and their status. Open the recent by clicking the one on top.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/5e78302d-d215-4e8c-b231-0e5ba9be61c9/action-2f8628deefaa4be69669acf242bd8915_7fa774036fa04c858b85fb565a1a18fa_text_export.jpeg)


10\. You can explore more information per executed step by clicking on the different sections in the the Nodes/Steps overview.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/e73605d8-3e0f-47de-a9ba-c59d8578a40a/action-0f0fe334ef194b72ac3dce7d7cb10a65_d30963dc4105430e8e28606b31a1c436_text_export.jpeg)


11\. When clicked you can see first the logs output.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/7742d125-c40b-4586-b7c5-41b8425a3c10/action-142f9791d6af42fd9a0eeaada4d8d581_6f2cfe8c3a8440cc96a0855d85b1e534_text_export.jpeg)


12\. Clicking on "Details" will give you more information on the workflow execution.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/cc1e30b5-1bd7-4bd8-8b77-c4b31136da05/action-edd16f5a5667482792b58e572d1b4c49_11a62e70dc484011a64d2b5eef1806bf_text_export.jpeg)


13\. Details will show things like used parameters (if configured), resource utilization.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/0df992aa-8509-42c1-8a83-d5d5e147c6a3/action-c29f560aebe141ffb83151da1da7605a_adf85c06a99d45ffa793fc9f9332bcc4_text_export.jpeg)


#### Resource Dashboard


14\. To see an overview on resource utilization from all executions click "Resources Dashboard"

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/144d221d-8fa1-4bba-aec2-726912644f20/action-6376eb95499f4f23bfd70837f2cf0ab7_bf3acd3b47e74fc488706bbfba7f76ac_text_export.jpeg)


15\. This will show the Resources Dashboard with overview information on resource utilization.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/d0db7358-0186-478a-856a-25f442252206/action-b490753a28f349ba98861a5351947d9e_d12e95072baf4ec9befca4f6290a4bf7_text_export.jpeg)


16\. You can use the filtering options to get more familiar with consumption of more specific information groups.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/ab1e9d25-7b60-46f1-86ac-093a5b6b1f44/action-2f1b4551d36e4d78adee42c71329447d_bf7bce1cf61443099f8bcd4089a7f654_text_export.jpeg)


#### Workflow History


17\. You can go back to any workflow definition and apply changes in the editor and once done click "Save" again.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/91bd340f-1d06-4b3e-9430-e160a7b2bb70/action-d59e85e890aa442395dd31c7012cc888_8cb23500b31f4973821954d9226bf2fc_text_export.jpeg)


18\. You will be able to see all the changes to the definition by clicking on "History".

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/db653ed3-f560-461f-89cf-4bb2c87feb0a/action-66d8d04c89e34850bd30da08f3ec63e5_26e327e4057e4f8d933df51daabba469_text_export.jpeg)


19\. This provides a list of changes. If you want to see the difference between the time the file was saved and your current status click on "View Diff" for the history entry you are interested in.

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/757fe23d-14a8-4641-8a5b-9489e0f23f9d/action-053d9c8ae1974b63a220e04d38056be4_3c2b607b089e48ff97038cb3c7a1b787_text_export.jpeg)


20\. This will show a comparison window showing what changes were made. If for example your changes broke the workflow definition, you can revert to a specific version by clicking on "Restore This Version".

![](https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-11-23/18378aba-1f87-4366-9cb1-1d50e8e17d24/action-80c9560cc8b2452aa17308dd880aa359_bdcb8e88cfa3441b86e140fe777bba4e_text_export.jpeg)