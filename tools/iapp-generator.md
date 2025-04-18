# 🤖 iApp Generator

## What is an iApp?

An **iApp** (_iExec Confidential Application_) is a decentralized confidential
application that runs on **iExec**. It leverages **confidential computing** to
process data securely and execute computations within a **Trusted Execution
Environment (TEE)**.

iApps use [Intel® SGX](https://software.intel.com/en-us/sgx), enabling
developers to build applications that benefit from **privacy and security** in a
decentralized ecosystem.

To build such a **Confidential Computing (TEE) application**, you would normally
need to use the **Intel® SGX SDK**.

With iExec, this complexity is **abstracted away by SCONE**, a high-level
framework that protects the confidentiality and integrity of the data and the
code without requiring modifications or recompilation of the application.

::: tip Recommendation

We strongly recommend starting with the
[Hello World guide](../overview/helloWorld.md) to understand the iApp
development process.

:::

And to take it even further, iExec created the **iApp Generator**, a devtool
that **makes TEE technology accessible to ANY builder**.

## 🚀 Deploy your iApp with iApp Generator

The **iApp Generator** is a tool designed for builders who want to easily
**create, test, and deploy iApps** on iExec.

The tool will help you **not get stuck with SGX headaches**, allowing you to
focus on **building and optimizing your applications**.

It simplifies **integration with confidential computing** and ensures **secure
execution environments**.

## Why use the iApp Generator?

- ✅ **Simplifies integration with Confidential Computing** – No need to
  configure SGX manually.
- ✅ **Makes applications SCONE-compatible** – Ensuring execution in a secure
  environment.
- ✅ **Lets you iterate quickly** – It allows you to test and refine your iApp
  before launching in **Full Privacy Mode**.

::: tip

The iApp Generator **automates much of this process**, and for advanced users,
**manual integration is possible**.  
You want to go **deeper into iApps** or are interested in deploying an iApp
**without using the iApp Generator**?  
See the
[Confidential Computing Developer Guide](https://protocol.docs.iex.ec/for-developers/confidential-computing/intel-sgx-technology).

For a detailed SCONE understanding, refer to the
[official SCONE documentation](https://scontain.com/).

**Need help?** Join the **iExec community on
[Discord](https://discord.com/invite/pbt9m98wnU)** or consult our
**[developer forums](#)!**

:::

The **iApp Generator** runs in **Debug Mode** by default, allowing you to
iterate and refine your iApp **before moving to full confidentiality**.

### Why Debug Mode?

- ✅ **Rapid iteration** – Quickly test and refine your iApp code.
- ✅ **Access to logs and output files** – Debug and troubleshoot issues.
- ✅ **Ensure proper functionality** before deploying in full privacy mode.

## Debug Mode vs. Production Mode

| Mode                          | What It Does                                                               |
| ----------------------------- | -------------------------------------------------------------------------- |
| **Debug Mode**                | Logs, secret & output files are accessible. Great for testing & debugging. |
| **Production (Full Privacy)** | Fully confidential execution, no access to logs or intermediate results.   |

::: info

📌 In **Production Mode**, even you as a developer will not be able to access
the processed data.

:::

::: tip **Want to go Full Privacy?**

Contact the **iExec** team to validate and transition your iApp to production
securely.

:::
