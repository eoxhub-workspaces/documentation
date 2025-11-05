# Narrative Editor

The **Narrative Editor** is a content editor for creating and publishing structured narratives combined with Earth Observation (EO) content. This documentation provides an overview of its architecture, key features, and functionality.

```{note}
Like any other application, the Narrative Editor might not be available in your EOxHub Workspace. Contact your workspace administrator to enable it.

```

## Overview

The Narrative Editor is based on the [storytelling EOXElement](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor) and includes a preview renderer that uses Markdown format with additional frontmatter definitions as a data source.

It integrates:

* A Git-based workflow using [git-clerk](https://github.com/EOX-A/git-clerk) for content versioning and collaboration
* Scrollytelling and paginated rendering of narratives
* Live preview for story validation
* Support for interactive map tours

---

## Key Features

### Git-Based Editing

* Users connect their EOxHub account to GitHub.
* Editing an existing narrative creates forks or branches.
* Users can request reviews through pull requests in GitHub.

### Story Rendering

* Live preview of changes as they are made.
* Supports both paginated and scroll-style rendering.

### Map Integration

* Supports `eox-map` [EOxElement blocks](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs).
* Provides a polished experience with seamless transitions and animations between map tour steps.
* Compatible with the [EO Dashboard scrollytelling configuration](https://eodash.org/storytelling.html).

---

## Workflow Summary

1. **Start Session**: Create a new session to start creating or editing.
2. **Create Narrative**: Title your project and begin with a basic template.
3. **Edit Content**: Use Markdown to make changes and view them live in the preview feature.
4. **Save and Review**: Save locally, then submit a pull request on GitHub for review.
5. **Merge and Publish**: Approved narratives are merged and deployed to the official narrative catalog.

---

## Reference Tutorial

For a visual step-by-step guide, please refer to:
➡️ [An introduction to the Narrative Editor](https://scribehow.com/viewer/An_introduction_to_the_Narrative_Editor__dqQxKdApQ-uZv5YOkmgCYQ)

---

## Technical Details

The Narrative Editor provides collaborative editing, review, and approval of narratives before publication in the corresponding repository. It is based on [git-clerk](https://github.com/EOX-A/git-clerk)—an open-source content management system built on Git workflows with a user-friendly file-editing interface.

Markdown files are organized into story blocks and, when needed, further divided into individual steps within each section. Rendered stories can be displayed in either a paginated format or scrollytelling mode.

A [demo story](https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor) demonstrates most of the current functionality.

A notable feature is the built-in integration with the [eox-map element](https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs), which enables interactive map tours that smoothly transition between areas or layers as users scroll through the story.

![narrative\_editor](assets/narrative_editor_screenshot.png)
*The Narrative Editor interface*

---

## Additional Resources

* [Storytelling Reference and Supported Features](https://eodash.org/storytelling.html)
* [Narrative Examples Repository](https://github.com/gtif-cerulean/cif-stories)
* [git-clerk GitHub Repository](https://github.com/eoxgit/git-clerk)

---

For development inquiries or integration support, please contact the EOX team.
