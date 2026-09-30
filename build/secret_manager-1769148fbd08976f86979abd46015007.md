# Credentials Manager

Workspace secrets—such as API tokens, database credentials, or service keys—are securely managed using the **EOxHub Credentials Manager**. This tool ensures sensitive information is not hard-coded in notebooks, workflows, or shared files.

```{figure} assets/credentials-manager/workspace-credentials.png
---
name: workspace-credentials
---
Credentials manager
```

## Key Features

- **Centralized and secure storage** of credentials for all workspace users  
- **Collaborative access**: All users within the workspace with correct roles can access and manage secrets
- **Reusability**: Secrets can be reused across different applications (e.g., JupyterLab, Argo Workflows, data pipelines)

## Example Use Cases

- Accessing a **Sentinel Hub** instance or other APIs directly from JupyterLab  
- Supplying credentials to an **Argo Workflow** that fetches or publishes data to a cloud bucket  
- Configuring **private dataset access** within processing jobs

## Credential types

- Opaque (default)
  - (one or more) key-value pair(s)
- dockerconfigjson
  - used to store authentication credentials for container image registries
  - referenced in pods as imagePullSecrets
- ssh-auth
  - used to store a private authentication key
 
> More detailed information about these secret types can be found in the official documentation: https://kubernetes.io/docs/concepts/configuration/secret/#secret-types

####  Creation
| Type                                                                                                               | Example                                                |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| **Opaque (key-value)**  <br><br> You can add **one or more** key-value pairs.                                      | ![](./assets/credentials-manager/opaque.png)           |
| **dockerconfigjson** <br><br> The provided credentials are **converted to valid JSON** and stored in the secret.   | ![](./assets/credentials-manager/dockerconfigjson.png) |
| **ssh-auth** <br><br> You can either **upload** the key file **or paste the key** in the text area.                | ![](./assets/credentials-manager/ssh-auth.png)         |

#### Modification / Deletion
| Type                                                                                                                                                                        | Example                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Opaque (key-value)**  <br><br> <li>add / remove key-value pairs</li><li>change individual keys / values</li>                                                              | ![opaque_edit.png](assets/credentials-manager/opaque_edit.png)                     |
| **dockerconfigjson** <br><br> The credentials can be changed; the current state of the stored JSON is shown in the (read-only) text area below.                             | ![dockerconfigjson-view.png](assets/credentials-manager/dockerconfigjson-view.png) |
| **ssh-auth** <br><br> The ssh-privatekey is masked and immutable once it's stored. If you need to change the key, you need to delete the secret first and then recreate it. | ![ssh-auth-view.png](assets/credentials-manager/ssh-auth-view.png)                 |


#### Special modes

**Opaque (key-value)** can be set to **readonly** or **key-only** (has to be done by an administrator).
**Read-only** and **key-only** credentials can only be viewed; they cannot be edited or deleted. 

```{figure} assets/credentials-manager/opaque-view-only.png
---
name: opaque-view-only
---
Credential can only be viewed, not edited or deleted.
```

| Mode         | Example                                                                |
| ------------ | ---------------------------------------------------------------------- |
| **readonly** | ![opaque-readonly.png](assets/credentials-manager/opaque-readonly.png) |
| **key-only** | ![opaque-keyonly.png](assets/credentials-manager/opaque-keyonly.png)   |


#### Inject as environment variables into JupyterLab

**Opaque (key-value)** secrets can be injected as environment variables in JupyterLab by enabling the `Inject as env var into JupyterLab` button below the credential.

> If you enable or disable this button, you need to restart the JupyterLab session to see its effect.


| Inject as env into Jupyterlab                | Example                                                                                      |
| -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **disabled**                                 | ![opaque-inject-env-disabled.png](assets/credentials-manager/opaque-inject-env-disabled.png) |
| **enabled**                                  | ![opaque-inject-env-enabled.png](assets/credentials-manager/opaque-inject-env-enabled.png)   |
| How to access env it in Jupyterlab Notebook: | ![access-env-var.png](assets/credentials-manager/access-env-var.png)                         |


## Related use cases

- [Develop an Algorithm](../use_cases/algorithm_development.md)
- [Generate Results](../use_cases/result_generation.md)
- [Provide an Algorithm as a Service](../use_cases/algorithm_as_a_service.md)
