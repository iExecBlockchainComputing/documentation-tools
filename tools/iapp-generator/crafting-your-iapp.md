# 🧑‍🏭 Crafting your iApp

## 🧰 Initialize your iApp

The iApp Generator CLI simplifies the setup of your iApp by guiding you through
a step-by-step initialization process. This ensures your iApp is correctly
configured and compatible with iExec’s confidential computing environment.

### 🏗 Define Your Project

Run:

```sh
iapp init
```

You will be prompted to provide:

- **Project name** – A folder with this name will be created to store project
  files.
- **Language selection** – Choose between **JavaScript**, **Python**, etc.
- **Project mode** – Select **Basic** (Hello-World setup) or **Advanced** (full
  debug capabilities).

### ⚙ Configure

You'll set up:

- **Arguments (Args)** – Public parameters passed to the iApp.
- **Input Files** – Files dynamically downloaded during execution. These can
  come from **a specific URL**.
- **Requester Secrets** – Confidential authentication strings.
- **Protected Data** – Encrypted data accessible only inside the TEE.
- **App Secret** – Immutable secret provisioned by the iApp owner.

::: warning 💡 The Secret Management Service (SMS) securely stores application

developer secrets. Once set, the App Secret is immutable and cannot be updated.
Use with caution.

For more information on **App Secrets**, refer to
[Access confidential assets from your app](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets)

:::

For more details and to learn how to use them in your application, refer here
[Application I/O](https://protocol.docs.iex.ec/for-developers/application-io)

## 🚀 Launch your iApp

After initialization, the following essential files and directories are
generated:

- `iapp.config.json`
- `src/app.js` _(JavaScript)_ or `src/app.py` _(Python)_
- `Dockerfile`
- Directories:
  - `input/`
  - `output/`
  - `cache/`

### 📝 Update your iApp

To modify your main application logic open:

```sh
src/app.js  # For JavaScript
src/app.py  # For Python
```

::: info

💡 The `src/` directory is the **core of your iApp**. It’s where you write your
main application logic. This is **where you handle data processing, implement
algorithms, and define how your iApp behaves.**

:::

### 🧪 Test and Deploy your iApp

Use the following CLI commands to **validate**, **deploy**, and **execute** your
iApp:

```sh
iapp test                 # Runs a basic test locally.
iapp deploy               # Sconifies and registers the iApp on iExec.

iapp run <iAppAddress>    # Executes the deployed iApp on a worker node.
iapp debug <taskId>       # Retrieve detailed execution logs from worker nodes for a specific task

iapp mock <inputType>     # Creates a mocked input for testing.
iapp --help               # Displays available commands.
```

::: info

use `iapp debug <taskId>` if execution exceeds the timeout (default: 5 min).

:::

Once deployed, your iApp will run **securely in a TEE-enabled workerpool**
within the iExec network.

::: info

💡 A **workerpool** is a decentralized network of nodes that execute iApps
securely within a **Trusted Execution Environment (TEE)**.

:::

### 🚀 Go Further

#### 🎉 Your iApp is now running in **debug mode** on iExec!

Now that your application is **stable** and **functional**, you can:

- Contact the **iExec team** to transition to **production mode** (Full
  Privacy).

- Optimize your **iApp** by learning how to **manage orders** and interact with
  the **iExec protocol**.

#### 📚 Recommended Resources

- 🔗
  [Order Management](https://protocol.docs.iex.ec/for-developers/advanced/manage-your-apporders)
- 🔗 [iExec Protocol Documentation](https://protocol.docs.iex.ec/)
