# Add a new Indicator file to merge multiple datasets into one final display

This guide provides a step-by-step process for merging multiple datasets into a single display collection using the EOxHub Data Editor.
It documents the task of adding a new Indicator file based on existing Collection files created beforehand. It also documents usage of additional Indicator specific properties Disable and 

1\. This tutorial expects already existing **Collection** files in the session, which are supposed to be grouped together in an **Indicator** file. Each collection will be shown as a layer in the final visualisation.


2\. Navigate to **Data Editor** in the workspace page e.g. <https://workspace.gtif-austria.hub-otc.eox.at/catalog-git-clerk>

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/d641459a-b8e0-4a0e-b94b-418a192b86ab/ascreenshot_6765c7f679744ca6a4e0988ff83893c9_text_export.jpeg)


3\. Select the active session which contains already created **Collection** files, here called **"test-session"**.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/d641459a-b8e0-4a0e-b94b-418a192b86ab/ascreenshot_b0be376e4fcc47bead6e78743b791ec0_text_export.jpeg)


4\. Click "Browse Files" to navigate to the folder with indicators definitions.

Notice existing pre-created files in **collections**. Their **filenames** will be used later.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/8f5fb973-bf30-4174-b3bd-3dbc19504922/ascreenshot_44dddb50dc70427580570c970ba2a46f_text_export.jpeg)


5\. Click "indicators"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/fddba850-e256-40c4-ae49-d692b142d9de/ascreenshot_31b9f2e54f80400a8ee507077a374d41_text_export.jpeg)


6\. Click "Add File" and "Add File here" to create a new indicator definition.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/f2249e35-02d2-4293-9d41-65e76ec82b8d/ascreenshot_7340442668d143c2b7a72947ec1466a8_text_export.jpeg)


7\. Select "Edit in current session"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/1ff2b5c2-2bb8-4eb8-b2bc-171479207cbc/ascreenshot_2ea384ac0c754904a7b1189532af0696_text_export.jpeg)


8\. Type the filename of a new indicator file with .json prefix, e.g. **"testing-indicator-new.json"**.

Click on **Add New File**

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/23a7ba6c-3416-4dd3-894f-85825f761ea5/ascreenshot_669e733aacc44305afab8d327214a1e3_text_export.jpeg)


9\. Insert mandatory fields **Identifier** and **Title** for the **Indicator**.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/ace9a98d-a4f9-4f00-86f9-c7ef780c45df/ascreenshot_12b6a7123bae4668818f523ca45a571d_text_export.jpeg)


10\. Add mandatory information about which **Collections** are linked in this indicator.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/92ea1629-521a-4a6c-a1d0-26845a3bfeda/ascreenshot_20de86027d1d45bd9de4c7b8cca67193_text_export.jpeg)


11\. Click on the **"+"** icon to add a new link to a collection.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/dd9567cc-cec8-43be-8717-5586f850bc58/ascreenshot_a71ad292f3e44f0cbe1587d9bbf0ee51_text_export.jpeg)


12\. Each Item is a filename of a **Collection** without the **.json** suffix e.g. **LULUCF_land_use_copy_test**

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/507cebba-058c-4fac-a1e6-e4f14955b52f/ascreenshot_d8e73657a4c24a929fb494301a925162_text_export.jpeg)


13\. Insert all **Collection** filenames which are supposed to be added.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/801338c4-702d-4698-b0c7-cda0125bc097/ascreenshot_0c7c7fddbafe47a3aa40bb45202b448d_text_export.jpeg)


14\. Click here.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/ab73dcd4-caa5-4a97-abd1-4a9042a7932d/ascreenshot_7e503d97de7c40dd8e6fe621f44d2c46_text_export.jpeg)


15\. Metadata fields such as **Themes** defined on the **Collections** are **not** propagated into the **Indicator** so for indicators they must be defined here as well.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/2fbdfaa0-86ed-499a-a00a-8d0a825fd751/ascreenshot_8bb238e851d941a59005ee7e79648a04_text_export.jpeg)


16\. Click on the **"+"** icon to add a new **Theme** and type it into the field.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/fff93225-7213-4a04-aec5-075211c138c2/ascreenshot_f1ec4a5926c24cde875acaaf4eec7cf7_text_export.jpeg)


17\. Two special fields for **Indicators** are **Disable** and **Hidden**.\
Click on the checkbox to activate the field.

**Disable** is an optional list of **Collections** which should load as initially disabled in the dashboard layer control.\
\
**Hidden** is an optional list of **Collections** which should be completely hidden from the layer control but still appear on the map.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/410ac6a1-69ec-4587-8d3a-fa8cb38ce643/ascreenshot_35867e9d6bfa4a53ab156f2d148acbe1_text_export.jpeg)


18\. Click on the **"+"** icon to add a new item and write in the **filename** of a collection without the file suffix to disable it.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/cb9ea56b-55a9-4002-acb8-bb2cd8414c31/ascreenshot_b7952e739d634821bcaf0433e11b1799_text_export.jpeg)


19\. Same can be done for Hidden category. Click on **edit properties** to add **Hidden** by clicking on its checkbox. Then switch to the **Hidden** tab.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/918a58b2-d8c6-4bac-8e27-7e4f1e990c4d/ascreenshot_4b8e2ef339b547f0836be73d0a757932_text_export.jpeg)


20\. Click on the **"+"** icon to add a new item and write in the **filename** of a collection without the file suffix to hide it from layercontrol.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/f2099d96-1527-43bd-b8e1-f283e2c00d18/ascreenshot_26e9d30a15494306999324087f14ca22_text_export.jpeg)


21\. Click "Save" to start generation of an updated testing catalog.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/4dec05d4-af9f-457e-89ea-3a4265b61cc1/ascreenshot_260e1de4a34041f8959886880c42d35f_text_export.jpeg)


22\. If on a smaller screen, in order to see the preview instance, click on the **"Eye"** icon

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/58f9b9ae-a755-471b-8cf1-c188f3790e42/ascreenshot_232b513cee6b47249e7a56a63b0d2739_text_export.jpeg)


23\. "Preview creation takes a few minutes to finish"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/fab5f327-a8f1-4efe-a4cd-9483fe90ee67/ascreenshot_ffa38fc2bd7946a89ba4745bbbf1ed6a_text_export.jpeg)


24\. Once the preview generation finishes successfully, you can select the **Indicator** to check the visualization in the **Tools** section.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/e27c546b-84c0-4493-a9c7-99344025e38b/ascreenshot_06b3ee1185c048a5aabba25b3fe974e8_text_export.jpeg)


25\. Click "Select indicator"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/622abbdf-8912-42e4-ba98-f09164625e23/ascreenshot_a8c7f7299cc445299f1f46e360da5db1_text_export.jpeg)


26\. Search for your indicator **Title** to filter the list and select it.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/8f56a75c-cd63-476f-8257-1b59e6129731/ascreenshot_ca60976ae91d42c99decb9e71161338a_text_export.jpeg)


27\. Click the newly added Indicator to open the visualisation.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/daa23563-2c9a-4a23-b39e-243c56a6aa67/ascreenshot_1f78796447914a35aad8502b5260a96d_text_export.jpeg)


28\. Two collections are displayed by default: Land Usage raster and NUTS geometries. The third collections defined in the **Hidden** is not shown.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/b90f34fb-6602-45a4-8def-8a8ebd35ea7a/ascreenshot_e173735b9c634ee7bd87ee31fbc13af6_text_export.jpeg)


29\. In the "Layers" tab,, you can confirm that the third **Collection** is indeed **Hidden**.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/590b97b7-1d27-4111-9fe0-9dd9436c1699/ascreenshot_a097dc6ec35548e086471a86c00ff710_text_export.jpeg)


30\. You can then submit the session for review by clicking on the session name e.g. **testing-session**

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/37c91539-3cd3-4107-a845-0ff9eda30536/ascreenshot_2b00714707a4467e9f5aa3fe7a9bc537_text_export.jpeg)


31\. Request review.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/8cbbd2d6-1413-44a6-aee6-f3be38217b07/ascreenshot_620bf2573f6f44df85bd2749272b456d_text_export.jpeg)


32\. Click "Request button"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/09261a6f-5733-4331-83be-fcdc3954a8f6/ascreenshot_10aba9494d94458c9130fa7366d9b28d_text_export.jpeg)


33\. **Indicator** file needs to be added manually to the **catalog** definition file e.g. "catalogs/gtif-austria.json" in order to appear in the platform after merging the underlying changes from the session.

Click on the indicator file if any changes were already done, otherwise use the **Browse Files** and navigate to the **catalogs** folder.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/078dc99c-fa8e-4bca-9204-1ff24e4482da/ascreenshot_9246c4b6819c445a87533c8cd6c83c93_text_export.jpeg)


34\. Edit the collections category.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/61feb201-ba9b-4eed-bac2-1508952ad5f9/ascreenshot_acd8195dcb5c4390a7966b1f857ace0c_text_export.jpeg)


35\. Click on a **"+"** icon to add a new reference to the **Indicator**.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/ec9332a3-bea8-4340-ba06-280d6471150f/ascreenshot_9abec265b2414b92ae0bbed7cb85be31_text_export.jpeg)


36\. Scroll down to the bottom of the list.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/9967d918-fd9c-48f6-a94f-2dbb28f96cd1/ascreenshot_8204f6639ba648b493e4861b96b253eb_text_export.jpeg)


37\. Add the filename of the new **Indicator** file without the suffix.

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/44c63fce-dc52-4ef1-8266-951ba0a3ba72/ascreenshot_3c46b723dbc147ac848a5d2bd66c40bc_text_export.jpeg)


38\. Click "Save"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-28/7146a8d7-dd7c-49cf-a28a-86b9cedd6c89/ascreenshot_4863f7e81b7146c089e0bde2e0d700fd_text_export.jpeg)
