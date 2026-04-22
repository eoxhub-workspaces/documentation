# Linking Stories and Collections in Data and Narrative Editors

Learn how to update narrative (story) metadata and collection identifiers within the Data and Narrative Editors.

This guide walks you through the steps to link relevant files and save configuration changes to ensure your data and narratives are correctly cross-linked.

**Note:** The tutorial expects an initial state where you created the following:

- **an existing Dataset submission** in Data Editor
- **an existing Narrative submission** in Narrative Editor

both can be still a work in progress!


1\. Navigate to a **Narrative Editor**, select an existing working **Session**, where you are creating a narrative and copy the exact narrative file name for reference later. You do not need to open it.\
In the tutorial it is **hunga_tonga_aerosol_plumes.md**

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/6633ffc0-8506-4b71-bbf6-fd490d4b338d/ascreenshot_ae2ecc6602e946f28435326f9ffcd3fb_text_export.jpeg)


2\. Navigate to a **Data Editor**, select a working session and modify the collection file which needs a new story reference.\
In the tutorial it is **S5P-L3GRD-VOLCSO2-DAY**

\
Click **"edit properties"** and check the add the **"Stories"** metadata group

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/e5b1135c-b769-4243-b27b-98b27de860f3/ascreenshot_5b1323bfe0bc47a3a577db813ee96f01_text_export.jpeg)


3\. Click the **"Stories"** checkbox to enable its display.

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/424c2659-51c2-4c28-a9c0-ce7d6729ca23/ascreenshot_43a2c454f3a74ffda0731ed8388c3fc4_text_export.jpeg)


4\. Click **"Stories"** entry to start adding links.

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/dfae19e9-5f82-4ab2-9661-d73afc090654/ascreenshot_e35194ca7b7b4546a439be42588bac21_text_export.jpeg)


5\. Add a new link entry by clicking on the **plus** icon

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/f4e15a8a-5203-4455-9a1b-e0cc41383bc5/ascreenshot_e6d0280cb60c40738fe93970c1158a6a_text_export.jpeg)


6\. Click **"edit properties"** to add new fields

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/dd33804b-01f2-44ea-80ab-364db1dd871d/ascreenshot_6bd6ef92104247f79ead42d0588b1de8_text_export.jpeg)


7\. Tick checkboxes to enable **"Name"** and **"Id"** properties

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/7d819863-f71b-44b2-bc1e-2884f8614a3f/ascreenshot_9189a93f6e3743e3b3629a3898e74480_text_export.jpeg)


8\. The **"Name"** field represents a human readable name for the story link

In this tutorial set as **Story on Tracking aerosol plumes from Hunga eruption of 2022**

**"Id"** field should contain the story filename without the .md suffix - can be retrieved from the Narrative Editor Session - opened in another window.

In this tutorial **hunga_tonga_aerosol_plumes**

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/cff3b535-50ab-4c2d-96c6-c73bf845ab81/ascreenshot_fe66cf76b0874b478f711c3c3baede8b_text_export.jpeg)


9\. Click **"Save"** to complete the edits in this session.

Take note on the value of the **EodashIdentifier** value in the **General tab** - we will need it later on.

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/c3bcd4e3-1e7b-473b-a112-42cd2885b3ab/ascreenshot_64a241ec3c6548918322c7077b8dd950_text_export.jpeg)


10\. Now it's time to add the link also to the narrative.

Switch to the **Narrative Editor**, select a working session, open the **narrative** which needs a new reference to a **collection** and update the top frontmatter information, adding a field **collections** with a list of comma-separated EodashIdentifiers of all relevant collections for this narrative.

In this tutorial set as **collections: S5P-L3GRD-VOLCSO2-DAY**

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/ed2f6ebb-cf1c-42f7-b616-95be4646c8ad/ascreenshot_8f73798adf21432e9ebf8b742c96c383_text_export.jpeg)


11\. Click "Save" to save and exit the session.

Now we have successfully added two-way linking of a narrative and a collection.

![](https://colony-recorder.s3.amazonaws.com/files/2026-04-20/677e9153-f965-4422-b73f-7f2c3809580a/ascreenshot_30773ac9e61546f1b3f9f13d1ca70ee9_text_export.jpeg)
