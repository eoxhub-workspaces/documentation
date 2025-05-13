# Narrative Editor

Narrative Editor is based on [storytelling EOXElement](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor) and contains a preview renderer using markdown format with additional frontmatter definitions as a data source.

## GIT based flow

Narrative Editor application provides collaborative editting, review and approval system for narratives before being published in the corresponding repository. It is based on [git-clerk](https://github.com/EOX-A/git-clerk) - Open-Source Content Management System based on Git workflows with a friendly file-editing GUI.

The Markdown file is organized into story blocks and, if needed, further divided into individual steps within each section. Rendered stories can be displayed in either a paginated format or a scrollytelling mode.

A [demo story](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor) can be used to see most of the current functionality.

Additionally, existing stories such as those developed and published within the [ESA NASA, JAXA Earth Observing Dashboard](https://github.com/ESA-eodashboards/eodashboard-narratives) showcase the storytelling capabilities. 

A notable feature is the built-in integration with [eox-map](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs) element, which can be embedded as part of the story content. This allows for interactive map tours that smoothly transition between different areas or layers as users scroll through the story.

![narrative_editor](assets/narrative_editor.png)
Narrative Editor interface 


For a more hands-on tutorial on how to publish insights by exposing data and creating a narrative, see chapter [**Publish Insights**](../use_cases/publish_insights.md)
[A reference to a header](#targeting-headers).

