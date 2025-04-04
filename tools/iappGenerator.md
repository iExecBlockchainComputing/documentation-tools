# 🧬What is an iApp?

An iApp (iExec Confidential Application) is a decentralized confidential application that runs on iExec. It leverages confidential computing to process data securely and execute computations within a trusted execution environment (TEE).

iApps uses [Intel® SGX](https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html) enabling developers to build applications that benefit from privacy and security in a decentralized ecosystem

To build such a Confidential Computing (TEE) application, you would normally need to use the Intel® SGX SDK.

With iExec, this complexity is abstracted away by SCONE, a high-level framework that protects the confidentiality and integrity of the data and the code without requiring modifications or recompilation of the application.

::: tip

🔹 If you’re new to iExec, please follow the [Hello-World guide](https://tools.docs.iex.ec/overview/helloWorld) to get familiarized with iApps.

🔹 For a detailed SCONE understanding, refer to the [official SCONE documentation](https://scontain.com/).

:::

And to take it even further, iExec created the iApp Generator, a devtool that makes TEE technology accessible to ANY builder.

Deploy your iApp with iApp generator

The iApp Generator is a tool designed for builder who want to easily create, test, and deploy iApps on iExec.

The tool will help you not  getting stuck with SGX headaches allowing you to focus on building and optimizing your applications.

It simplifies integration with confidential computing and ensuring secure execution environments.

Why use the iApp Generator?

- It simplifies integration with Confidential Computing – No need to configure SGX manually.
- It makes applications SCONE-compatible – Ensuring execution in a secure environment.
- It lets you iterate quickly – It allows you to test and refine your iApp before launching in Full privacy mode

::: tip

🔹 The iApp Generator automates much of this process, but for advanced users, manual integration is possible.  You Want to go deeper into iApps or are interested in deploying an iApp without using the iApp Generator ? See the [Confidential Computing Developer Guide](https://protocol.docs.iex.ec/for-developers/confidential-computing/intel-sgx-technology).

🔹 For a detailed SCONE understanding, refer to [the official SCONE documentation](https://scontain.com/).

🔹 Need help? Join the iExec community on Discord or consult our developer forums!

:::

Additionally, to use the iApp Generator, you will need a voucher.

::: tip

🧠 What is Voucher ?

A voucher in iExec is a smart contract-based system that acts as a prepaid credit, granting access to confidential computing resources and premium services within the iExec ecosystem.

Builders can purchase vouchers, which are tied to RLC tokens, to access iExec’s confidential computing power.

For more details, see [How to pay for Web3mail | iExec tools](https://tools.docs.iex.ec/overview/how-to-pay-for-web3mail)

:::
