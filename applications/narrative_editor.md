# Narrative Editor

The **Narrative Editor** is a content editor for creating and publishing structured narratives combined with Earth Observation (EO) content. This documentation provides an overview of its architecture, key features and functionality.

```{note} Like any other application the Narrative Editor might not be available in your EOxHub Workspace. Contact your workspace admin to change this.
```

## Overview

The Narrative Editor is based on the [storytelling EOXElement](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor) and contains a preview renderer using markdown format with additional frontmatter definitions as a data source.

It integrates:

- Git-based workflow using [git-clerk](https://github.com/eoxgit/git-clerk) for content versioning and collaboration
- Scrollytelling and paginated rendering of narratives
- Live preview for story validation
- Support for interactive map tours

--- 

## Key Features

### Git-Based Editing
- Users connect their EOxHub account to GitHub
- Editing an existing narrative, creats forks/branches
- Users can request their work to be reviewed through pull requests in GitHub

### Story Rendering
- Live preview of changes, as they are being made
- Supports both paginated and scroll-style rendering

### Map Integration
- Supports `eox-map` [EOxElement blocks](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs)
- Polished experience through seamless transitions and animations between map tour steps
- Compatible with [EO Dashboard scrollytelling configuration](https://eodash.org/storytelling.html)

---

## Workflow Summary 

1. **Start Session**: Create a new session to start creating/editing 
2. **Create Narrative**: Title your project and be met with a basic template
3. **Edit Content**: Use Markdown to make changes and view them while your editing using the preview feature
4. **Save and Review**: Save locally, then submit a pull request on GitHub for someone to review your work
5. **Merge and Publish**: Approved narratives are merged and deployed to the official narrative catalog

---

## Reference Tutorial

For detailed, visual step-by-step user instructions, please refer to:
➡️ [Creating a Narrative in the EOxHub Workspace (Scribe Tutorial)](https://scribehow.com/shared/Creating_a_Narrative_in_the_EOxHub_Workspace__OdlaaI1XRteoURL6uyIIqg)

---

## Technical details

Narrative Editor application provides collaborative editing, review and approval system for narratives before being published in the corresponding repository. It is based on [git-clerk](https://github.com/EOX-A/git-clerk) - Open-Source Content Management System based on Git workflows with a friendly file-editing GUI.

The Markdown file is organized into story blocks and, if needed, further divided into individual steps within each section. Rendered stories can be displayed in either a paginated format or a scrollytelling mode.

A [demo story](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor) can be used to see most of the current functionality.

A notable feature is the built-in integration with the eox-map element (https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs), which allows for interactive map tours that smoothly transition between different areas or layers as users scroll through the story.

![narrative_editor](assets/narrative_editor_screenshot.png)

Narrative Editor interface

---

## Additional Resources

- [Storytelling Reference and Supported Features](https://eodash.org/storytelling.html)
- [Narrative Examples Repository](https://github.com/gtif-cerulean/cif-stories)
- [git-clerk GitHub Repository](https://github.com/eoxgit/git-clerk)

---

For development inquiries or integration support, please contact the EOX team.



Unclear:
- The Narrative Editor is based on the [storytelling EOXElement](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor) and contains a preview renderer using markdown format with additional frontmatter definitions as a data source.

- It integrates:

    Git-based workflow using [git-clerk](https://github.com/eoxgit/git-clerk) for content versioning and collaboration
    Scrollytelling and paginated rendering of narratives
    Live preview for story validation
    Support for interactive map tours

- ### Story Rendering
    Live preview of changes, as they are being made
    Supports both paginated and scroll-style rendering

