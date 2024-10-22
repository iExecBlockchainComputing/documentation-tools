# How Accessing iExec Computing Power

::: tip Important

This tutorial is compatible with **iExec Protocol - Poco 5.5 (version
2024.09)**.

:::

In the iExec Platform, confidential computing power refers to the processing
capabilities provided by workers in the network, used to execute tasks running
**confidential-apps**. The key benefit of these resources is flexibility:
developers can access scalable computing power on demand, without needing to own
or maintain hardware.

Below are examples using our devtools:

- **DataProtector**: Secures and manages sensitive data within decentralized
  applications. Tasks like `processProtectedData` and `consumeProtectedData`
  require computing power for encryption, decryption, and secure data access.
- **OracleFactory**: Integrates real-world data into decentralized applications.
  Functions like `updateOracle` use computing power to fetch, process, and
  update data from external APIs.
- **Web3Mail**: Offers secure, blockchain-based communication by encrypting
  emails and protecting user privacy. The `sendEmail` function requires
  computing power to encrypt and send messages securely.

## How to pay for Computing Power

Builders using iExec’s resources incur a cost for accessing computing power.
Payment options include:

- **xRLC**: Bridged iExec’s native cryptocurrency.
- **Vouchers**: Prepaid credits that allow builders to access computing power.

Both methods enable task execution on the iExec Platform but offer unique
benefits.

### Vouchers

[Learn more about vouchers](link landing page) (TODO)

Vouchers can be thought of as prepaid credits that grant access to iExec's
resources without requiring upfront xRLC spending. They are particularly useful
for accessing **iExec's Trusted Execution Environments (TEEs)**, secured by
Intel SGX enclaves, with predictable and stable pricing. Developers can acquire
vouchers through the **iExec Builder Dashboard** or the dedicated **Discord
channel** (link).

The **iExec Builder Dashboard** provides a centralized location for managing
vouchers:

- **Claim vouchers** for the "BUILD" or "EARN" stages.
- **Top up vouchers** when your balance is low.
- **Monitor your voucher balance** and usage history.

::: tip Important

Vouchers can cover the cost of computing tasks but do **not** cover data access
costs. For example, if your application needs to access a recipient's email
address, this cost must be covered separately using xRLC.

:::

#### Voucher Management

- **Claim vouchers** for the "BUILD" or "EARN" stages.
- **Top up vouchers** when your balance is low.
- **Monitor your voucher balance** and usage history.

#### Additional Resources

- Access the **iExec Academy** and documentation for further learning.

### xRLC

At the protocol level, **RLC** is iExec’s native cryptocurrency. It allows
developers to access decentralized computing resources, enabling them to run
decentralized applications (dApps), process data, and execute tasks on the iExec
protocol. To use RLC on iExec’s sidechain, you need to convert it into **xRLC**
via the iExec Bridge. Once deposited into your iExec account, xRLC becomes
**sRLC** (staked RLC), which the protocol manages to automatically handle
payments for computing power.

#### Token Types Explained

- **RLC**: iExec’s native cryptocurrency, purchasable from exchanges to convert
  into xRLC.
- **xRLC**: The form of RLC used on iExec’s sidechain. Converted from RLC
  through the iExec Bridge, used to pay for tasks on the iExec platform. RLC is
  an ERC-20 token on the mainnet, while xRLC is the native token of the
  sidechain.
- **sRLC**: Staked RLC, automatically created when you deposit xRLC into your
  iExec account. Managed by the protocol to pay for computing power and other
  services on iExec.

## Support

A detailed guide focused on **Web3Mail** is available for builders, explaining
how to utilize iExec's computing power with concrete examples. This guide walks
through the process of paying with vouchers or xRLC, covering all essential
steps.

For other devtools like **DataProtector** and **OracleFactory**, builders are
encouraged to contact iExec's support team for personalized assistance and
detailed guidance on using computing resources effectively with these tools.
