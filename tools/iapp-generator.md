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

::: info

We strongly recommend starting with the
[Hello World guide](../overview/helloWorld.md) to understand the iApp
development process.

:::

And to take it even further, iExec created the **iApp Generator**, a devtool
that **makes TEE technology accessible to ANY builder**.

## Deploy your iApp with iApp Generator

The **iApp Generator** is a tool designed to help developers **scaffold, build,
test, and deploy iApps** without diving into the complexity of SGX or SCONE
internals.

It provides a simple, guided setup and enables fast iteration—so you can focus
on your application logic instead of infrastructure.

- **Accessible** – The generator handles SGX and SCONE compatibility for you.

- **Secure by design** – Your iApp runs inside a TEE, ensuring data and code
  integrity.

- **Iterate quickly** – Start in Debug Mode, test as often as needed, then
  transition to Full Privacy Mode when ready.

::: tip

The iApp Generator **automates much of this process**, and for advanced users,
**manual integration is possible**.  
You want to go **deeper into iApps** ? See the
[Confidential Computing Developer Guide](https://protocol.docs.iex.ec/for-developers/confidential-computing/intel-sgx-technology).

You want a detailed SCONE understanding ? Refer to the
[official SCONE documentation](https://scontain.com/).

**Need help?** Join the **iExec community** on
[Discord](https://discord.com/invite/pbt9m98wnU)\*\*

:::

The **iApp Generator** runs in **Debug Mode** by default, allowing you to
iterate and refine your iApp **before moving to full confidentiality**.

## Debug Mode vs. Production Mode

| Mode                          | What It Does                                                                                                                                                                                                          |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Debug Mode**                | - **Rapid iteration** – Quickly test and refine your iApp code. <br> - **Access to logs and output files** – Debug and troubleshoot issues. <br> - Ensure proper functionality before deploying in full privacy mode. |
| **Production (Full Privacy)** | - Fully confidential execution, no access to logs or intermediate results. <br> - In Production Mode, even you as a developer will not be able to access the processed data.                                          |

::: tip **Want to go Full Privacy?**

Contact the **iExec** team to validate and transition your iApp to production
securely.

:::
