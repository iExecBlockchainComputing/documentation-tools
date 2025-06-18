# 🧑‍🏭 Build Your iApp

## 🧰 Initialize your iApp

The iApp (iExec Application) Generator CLI simplifies the setup of your iApp by
guiding you through a step-by-step initialization process. This ensures your
iApp is correctly configured and compatible with iExec’s confidential computing
environment.

### 🏗 Define Your Project

Run:

```sh
iapp init
```

Follow the prompts to specify:

- **Project name** – Creates a folder for your project files.
- **Language** – Choose between JavaScript, Python, etc.
- **Project mode** – Choose Basic (Hello-World setup) or Advanced (full debug
  capabilities).

### ⚙ Configure

::: info

We are going to create and test our iApp locally. In **debug mode**, you can
quickly iterate and troubleshoot your code. Logs and output files are available
for debugging, helping you refine your app before moving to production.

:::

You'll set up:

- **Arguments (Args)** – Public parameters for your iApp.
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

💡 The `src/` directory contains the core logic of your iApp. Implement your
algorithms and data processing here.

:::

### 🧪 Test and Deploy your iApp

Use the following CLI commands to **validate**, **deploy**, and **execute** your
iApp:

```sh
iapp test                 # Runs a basic test locally.
iapp deploy               # Turns your code into a TEE app and registers the iApp on iExec.

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

::: info

🧪 While **TEE** iApp are base on **intel SGX** technology by default, iApp has
an experimental support for **intel TDX** applications.

TDX mode is enabled by setting the environment variable
`EXPERIMENTAL_TDX_APP=true`.

examples:

- `EXPERIMENTAL_TDX_APP=true iapp test`
- `EXPERIMENTAL_TDX_APP=true iapp deploy`
- `EXPERIMENTAL_TDX_APP=true iapp run <app-address>`

⚠️ Keep in mind: TDX mode is experimental and can be subject to instabilities or
discontinuity.

:::

### 🚀 Next Steps

Your iApp is now running in **debug mode** on iExec!

Once your application is **stable** and **functional**, you can:

- Contact **iExec** to move to **production mode** (Full Privacy).
- Learn how to **manage orders** and integrate with the **iExec protocol**.

#### 📚 Recommended Resources

- 🔗
  [Order Management](https://protocol.docs.iex.ec/for-developers/advanced/manage-your-apporders)
- 🔗 [iExec Protocol Documentation](https://protocol.docs.iex.ec/)
