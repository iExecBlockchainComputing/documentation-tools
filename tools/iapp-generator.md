# 🤖 iApp Generator

## What is the iApp Generator?

**iApp Generator** (iExec Application Generator) is a CLI tool to create, test,
and deploy **iExec Applications** (iApps) that run in a **Trusted Execution
Environment (TEE)**. It simplifies the process of building decentralized,
confidential applications without requiring deep knowledge of confidential
computing technologies. With the iApp Generator, you can:

- **Create a basic application structure** ready to run on a decentralized
  worker in a TEE.
- **Test your application locally** in **Debug Mode**, enabling fast iteration
  and troubleshooting.
- **Deploy your iApp** as a confidential application on the iExec protocol.

## Why Use the iApp Generator?

Building decentralized, confidential applications (iApps) involves ensuring both
security and confidentiality of your data and code. The iApp Generator abstracts
away the complexity by offering a **simple, guided setup**, letting you focus on
**developing the application logic**. With the iApp Generator, you can easily
manage the entire development lifecycle of your iApp:

::: tip

You want to go **deeper into iApps** ? See the
[Confidential Computing Developer Guide](https://protocol.docs.iex.ec/for-developers/confidential-computing/intel-sgx-technology).

**Need help?** Join the **iExec community** on
[Discord](https://discord.com/invite/pbt9m98wnU)

:::

## Build in debug go further in prod mode 

### Debug Mode

Start by creating and testing your iApp locally. In this mode, you can quickly
iterate and troubleshoot your code. Logs and output files are available for
debugging, helping you refine your app before moving to production.

### Production Mode

Once your iApp is tested and refined, switch to **Production Mode** to ensure
**full confidentiality**. Your iApp will run securely in a TEE on the iExec
protocol, and no logs or intermediate results will be accessible, even to you as
the developer. This mode is critical for handling sensitive data, ensuring
privacy and data integrity. The iApp Generator automates much of the process,
making it easy to transition from development to production, and allowing you to
focus on building secure, decentralized applications.
