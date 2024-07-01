# 🧐 iExec Overview (6 mins)

Great, intro is done, now let's dive into the key concepts. What are the main
components of the iExec stack?

## 👷 The user case

First step is to introduce you to the iExec stack through a use case. We'll then
decompose each component of the stack and explain how they interact with each
other.

**Imagine** you're a research scientist with a valuable dataset on climate
change that you want to apply algorithms to or even monetize while ensuring it
remains secure and confidential.. You need a **technology** for the confidential
computation and a **tool** to protect and manage access to your data.

It's where iExec comes in! We provide a **protocol** and **developer tools**
that allow you to compute, protect, manage, and monetize your data in a secure
and decentralized environment.

Let’s decompose and deep dive in each puzzle piece

## 🧩 The Protocol

Let's start by understanding the first puzzle piece of our stack, the
fundational bricks... (epic violin starts playing) :

**The Protocol.**

It's a mix between an off-chain part with the TEE (Trusted Execution
Environment, which allows data to be processed securely) and an on-chain part
with our smart contract called POCO (Proof of Contribution). This smart contract
acts as a band leader, creating synergy between the power of confidential
computing and the transparency/immutability of the blockchain.

:::tip Wow Key Word alert! When you'll see this 🚨,

it means that we've introduced a new concept that needs to be explained.

🚨 **Smart Contract** : A smart contract is a piece of code on the blockchain
that automatically performs tasks and enforces agreements without needing a
middleman.

🚨**TEE** : Think of TEEs (Trusted Execution Environment) as secure zones in a
computing environment where your sensitive data can be processed safely, without
being stored, see or altered by anyone even if the data are computed on a
malicious computer far, far away in the galaxy (decentralized network)

🚨**Confidential computing** : We need a dedicated section (spoiler alert, just
below) for confidential computing, as it is one of the key features powered by
our protocol.

:::

## 🧩 The Key Features

### 🔑 Confidential Computing

Confidential computing is the magic that happens inside the Trusted Execution
Environment (TEE). It ensures that your sensitive data remains private and
secure during processing
([Intel SGX Enclave](https://www.intel.com/content/dam/develop/external/us/en/documents/overview-of-intel-sgx-enclave-637284.pdf)).
This is crucial because it allows you to run computations on sensitive climate
data, without exposing it to any external threats.

### 🔑 Privacy and User Choice

iExec puts control back in your hands. With iExec, you decide what data is
shared, with whom, and for what purpose. This is essential in today’s world,
where data privacy is a top concern. As an environmental scientist, you can
securely compute or share your findings and datasets with collaborators without
worrying about unauthorized access.

### 🔑 Monetize Your data

One of the coolest features of our dev tools is that they allow you to monetize
your digital assets. For example, if you have a bunch of sensitive climate data,
you can monetize it by lending it for computing or selling it directly.

::: info Okay, I think it's time to reveal the name of the tool that will enable
all the key features mentioned above. Drum roll, please.... **DATAPROTECTOR**.

:::

## 🧩 The Developer tools

Quick wrap up: Our protocol, composed of **TEE and Blockchain**, enables key
features such as **confidential computing, data management, and monetization**.

Built on top of that the **developer tools** that will help you to implement all
of this in your **DApp**.

::: info We capture and abstract all the complexity of confidential computing
and blockchain in our developer tools, these tools are SDK so it's a kind of
plug and play installation.

:::

Today we gonna focus on one of them, **DataProtector**.

**DataProtector** ensures data protection and confidentiality with encryption
and confidential computing, while allowing dynamic access and monetization
management.

Back to our use case, as a scientist you can use DataProtector to:

- Securely encrypt climate data
- Set terms for access
- Monetize your data by allowing access to users like researchers or
  organizations
- Utilize **iExec application** to compute your data in a secure environment

::: tip 🚨 **iExec application**

The iExec application is the last piece of the puzzle. It's the application that
will run in the TEE and compute your data in a secure environment. Think of it
as a secure vault where your data is processed, ensuring that only the results
are accessible while the raw data remains protected and confidential.

:::

## 🧩 Keys takeway

- **iExec Protocol** is the foundation of our stack, combining TEE and
  blockchain to enable confidential computing and data management.
- **DataProtector** is a developer tool that ensures data protection and
  confidentiality, allowing dynamic access and monetization management.
- **iExec application** is an application that runs in the TEE and computes your
  data in a secure environment.
- **Confidential computing** is the magic that happens inside the TEE, ensuring
  that your sensitive data remains private and secure during processing.

## 💫The Next steps

In the next chapter, we’ll dive into **The Developer’s Tool: DataProtector**.
and check how we can protect and manage data with it. AMAZING! Grab a cup of
coffee and see you in the next chapter
