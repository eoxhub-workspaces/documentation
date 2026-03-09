# Container Registry

## Login in UI

The credentials can be found in the secret **registry-login** in the [credentials manager](./secret_manager.md) or your workspace.

```{figure} assets/credentials-manager/registry-credentials.png
---
name: registry-credentials
---
Credentials 'registry-login' contains the login information for the container registry.
```

```{figure} assets/credentials-manager/registry-credentials-detail.png
---
name: registry-credentials-detail
---
Registry server FQDN (URL), Username & Password
```

## Upload images to registry

1. Login
    ```shell
    docker login -u <username> registry.[workspace-name].[cluster].eox.at  # e.g. registry.hub-test-ws1.hub-test.eox.at
    ```
   Type in the password when asked.  

2. Tag your image
    ```shell
    docker tag my-image:latest registry.[workspace-name].[cluster].eox.at/my-image:latest
    ```
   
3. Push image to registry

    ```shell
    docker push registry.[workspace-name].[cluster].eox.at/my-image:latest
    ```

After a successful upload, the image is visible in the UI and in the file browser, and can be used in Argo Workflows, etc.