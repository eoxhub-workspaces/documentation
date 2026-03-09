# JupyterLab

[JupyterLab](https://jupyterlab.readthedocs.io/) in the **EOxHub Workspaces** environment provides a flexible, browser-based interface for interactive computing, data analysis, and algorithm development. It is the primary workspace for working with Earth Observation (EO) data, executing Python code, and building reproducible workflows using Jupyter Notebooks.

![jupyterlab](assets/jupyterlab.png)

---

## What is JupyterLab?

[JupyterLab](https://jupyter.org/) is a next-generation web-based user interface for Project Jupyter. It enables users to:

- Write and run code in Jupyter Notebooks
- Access a terminal and file browser
- View and edit CSVs, images, and text files
- Use drag-and-drop functionality across tabs

In the context or EOxHub Workspaces, JupyterLab comes pre-configured with common EO and geospatial libraries, making it ideal for analysis, visualization, and prototyping. For more information, please visit the official [documentation](https://jupyterlab.readthedocs.io/)

---

## Starting with JupyterLab in EOxHub Workspaces

When launching JupyterLab in EOxHub, you will be asked to choose a **user profile**, which defines the computational resources available (RAM, CPU, and in some cases also disk space). This helps to tailor your session based on the workload.

These are examples of common profiles based on the chosen subscription plan:

- **Trial Profile**: Ideal for lightweight exploration and testing, usually avavilable in workshop settings or trials
- **Standard Profile**: Recommended for moderate EO processing
- **Large Profile**: For heavy workloads (model training, large-scale analysis) or usage of GPPU

If your use case requires more resources, longer runtimes or GPU, please reach out to request a **custom setup**.

![jupyterlab_profile](assets/profile_selection_jlab.png)

---


## Special Kernels and Environments

JupyterLab in EOxHub supports multiple **custom kernels** depending on your analysis needs. To learn how to install or request specific environments (e.g. for deep learning or domain-specific libraries), refer to the:

➡️ [**Conda Store Documentation section**](conda_store.md)

---

## Exploring Example Notebooks

![Examples explorer](assets/notebooks.png)

To get started quickly, navigate to the **Examples Explorer** section of the EOxHub Workspace. There, you'll find:

- Ready-to-run sample notebooks
- Notebook tutorials on data access and visualization
- Sample Workflows covering EO analysis

These notebooks are an excellent entry point to understand EOxHub Workspaces, JupyterLab options, and data.
