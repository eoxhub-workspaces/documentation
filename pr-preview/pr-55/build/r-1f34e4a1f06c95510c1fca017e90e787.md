# R

Available through [JupyterLab](jupyterlab.md)

[R](https://www.r-project.org/) is a programming language for statistical computing, data analysis, and visualization. In EOxHub Workspaces, R notebooks can run alongside Python notebooks in JupyterLab, using the same Workspace storage and computational resources.

## What is the R kernel?

A notebook kernel runs the code in notebook cells. The R environment uses IRkernel to execute R code and display results, tables, and plots directly in JupyterLab.

The provided environment includes packages for:

- filtering, transforming, and summarizing tables with `dplyr`
- creating plots with `ggplot2`
- reading and processing vector data with `sf`
- working with raster data with `terra`

## Using R in EOxHub

1. Start [JupyterLab](jupyterlab.md) in your Workspace.
2. Open the Launcher and select the R kernel under **Notebook**.
3. Write R code in a cell and run it with `Shift+Enter`.

For an existing notebook, use **Kernel → Change Kernel** to select the R environment.


R notebooks use the same `.ipynb` file format as other Jupyter notebooks. Select the R kernel when opening an R example.

## Examples and learning resources

The [EOxHub Example Notebooks](https://eoxhub-workspaces.github.io/eoxhub-notebooks/) include an R example covering table operations, plotting, vector data, raster calculations, and file export.

The example uses data bundled with R and its packages, so no external downloads or credentials are required.

For additional packages or custom environments, see [Conda Store](conda-store.md).

Additional resources:

- [R documentation](https://www.r-project.org/other-docs.html)
- [IRkernel documentation](https://irkernel.github.io/)
- [sf documentation](https://r-spatial.github.io/sf/)
- [terra documentation](https://rspatial.github.io/terra/)

## Related documentation

- [JupyterLab](jupyterlab.md)
- [Example Notebooks](example-notebooks.md)
- [Conda Store](conda-store.md)