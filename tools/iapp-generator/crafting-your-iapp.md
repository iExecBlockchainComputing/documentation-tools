# 🧑‍🏭 Crafting your iApp

## 🧰 Initializing your iApp

The iApp Generator CLI simplifies the setup of your iApp by guiding you through
a step-by-step initialization process. This ensures your iApp is correctly
configured and compatible with iExec’s confidential computing environment.

### Step 1: Define Your Project

Upon running the iapp init command, you will be prompted to provide key details
about your project:

- Project name: A folder with this name will be created to store your project
  files.

- Language selection: Choose the primary programming language for your iApp
  (e.g., JavaScript, Python).

- Project mode: Select between basic or advanced setup, depending on your
  application’s complexity.

  - basic It leverages a restricted version of the App Generator, tailored
    specifically for Hello-World purposes

  - advanced Offers full debug capabilities, allowing complete customization and
    integration with iExec’s confidential computing features.

### Step 2: Configure

You'll be guided to configure the following elements:

- **Arguments (Args)** : **Public parameters** passed to the iApp during
  execution. They allow customization without modifying the source code.

- **Input Files** : Files **dynamically downloaded** during execution. These can
  come from **a specific URL**.

- **Requester Secrets** : Confidential strings used for authentication or
  containing sensitive data.

- **Protected Data** : Encrypted data provided by a third party, accessible only
  within the **TEE**.

- **App Secret** : A fixed, immutable secret provisioned by the iApp owner to
  secure application logic execution.

::: warning 💡 The Secret Management Service (SMS) securely stores application

developer secrets. Once set, the App Secret is immutable and cannot be updated.
Use with caution.

For more information on **App Secrets**, refer to
[Access confidential assets from your app](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets)

:::

For more details and to learn how to use them in your application, refer here
[Application I/O](https://protocol.docs.iex.ec/for-developers/application-io#input-files)

## 😻 Launching your iApp

Once your iApp is initialized, the following essential files and directories are
generated:

- `iapp.config.json`
- `src/app.js` _(for JavaScript users)_ or `src/app.py` _(for Python users)_
- `Dockerfile`
- Directories:
  - `input/`
  - `output/`
  - `cache/`

After initialization and configuration, the next steps are to **update, test
locally**, and **deploy your iApp** on iExec.

### Step 1: Personalize Your iApp

Open:

- `src/app.js` _(JavaScript)_  
  or
- `src/app.py` _(Python)_

::: info

💡 The `src/` directory is the **core of your iApp** It’s where you write your
main application logic. This is **where you handle data processing, implement
algorithms, and define how your iApp behaves.**

:::

### Step 2: Testing and Deploying Your iApp

Use the following CLI commands to **validate**, **deploy**, and **execute** your
iApp:

| Command                     | Description                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------- |
| `iapp test`                 | Runs a basic test of your iApp locally.                                            |
| `iapp deploy`               | Sconifies the app, generates metadata, and registers it on the iExec protocol.     |
| `iapp run <iApp-address>`   | Executes your deployed iApp on an iExec worker node.                               |
| `iapp --help`               | Displays the help menu and available commands.                                     |
| `iapp debug <iApp-address>` | Retrieves logs and output files if execution exceeds the timeout (default: 5 min). |
| `iexec mock`                | Creates mocked input data for local testing.                                       |

Once your iApp is tested and deployed, it will be ready to run securely in a
**TEE-enabled workerpool** on the iExec network.

::: tip

💡 A **workerpool** is a decentralized network of nodes that execute iApps
securely within a **Trusted Execution Environment (TEE)**.

:::
