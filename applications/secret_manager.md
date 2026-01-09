# Secrets Manager

Workspace secrets—such as API tokens, database credentials, or service keys—are securely managed using the **EOxHub Secrets Manager**. This tool ensures sensitive information is not hard-coded in notebooks, workflows, or shared files.

![secrets_manager](assets/secrets_manager.png)

---

```{note} Like any other application the Secrets Manager might not be available in your EOxHub Workspace. Contact your workspace admin to change this.
```

## Key Features

- **Centralized and secure storage** of credentials for all workspace users  
- **Collaborative access**: All users within the workspace with correct roles can access and manage secrets  
  - Key/value pairs can be added, updated and deleted.  
  
  ![credential-without-annotation.png](assets/credential-without-annotation.png)

- **Reusability**: Secrets can be reused across different applications (e.g., JupyterLab, Argo Workflows, data pipelines)

### Readonly / Key-only credentials
- Individual credentials can be set to **readonly** or **key-only** (has to be done by an administrator).
- **Readonly** & **key-only** credentials can only be viewed, but not edited or deleted.  

![readonly-credential.png](assets/readonly-credential.png)

- **Key-only** credentials only display the key, while the value is disguised. 

![key-only-credential.png](assets/key-only-credential.png)

## Example Use Cases

- Accessing a **Sentinel Hub** instance or other APIs directly from JupyterLab  
- Supplying credentials to an **Argo Workflow** that fetches or publishes data to a cloud bucket  
- Configuring **private dataset access** within processing jobs



