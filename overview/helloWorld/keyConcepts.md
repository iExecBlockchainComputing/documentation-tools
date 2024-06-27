# 🧐 iExec Overview (8 mins)

Great intro is done, now let's dive into the key concepts. What are the
foundational bricks of the iExec stack?

## 👷 The user case

First step is to introduce you to the iExec stack through a use case. We'll then
decompose each component of the stack and explain how they interact with each
other.

**Imagine** you're a research scientist with a valuable dataset on climate
change that you want to monetize or apply algorithms to while ensuring it
remains secure. You need a **technology** (iExec Stack 😉) and a **tool** to
protect and manage access to your data. By using an iExec-powered application,
you can securely upload your dataset and set terms for access. Other researchers
or organizations can subscribe to or rent your data for their studies. The
application processes data requests within a secure environment, ensuring your
raw data remains protected. This way, you can monetize your data by allowing
controlled, secure access, ensuring its integrity and privacy.

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

> Wow! Wow! Wow! **Key Word alert!!!** When you see this 🚨, it means that we've
> introduced a new concept that needs to be explained, and there we talk about
> smart contracts, TEE and confidential conputing, that's a lot.

🚨 **Smart Contract** : A smart contract is a piece of code on the blockchain
that automatically performs tasks and enforces agreements without needing a
middleman.

🚨**TEE** : Think of TEEs as secure zones in a computing environment where your
sensitive data can be processed safely, without being stored, see or altered by
anyone even if the data are computed on a malicious computer far, far away in
the galaxy

🚨**Confidential computing** : We need a dedicated section (spoiler alert, just
below) for confidential computing, as it is one of the key features powered by
our protocol.

## 🧩 The Key Features

### 🔑 Confidential Computing

Confidential computing is the magic that happens inside the Trusted Execution
Environment (TEE). It ensures that your sensitive data remains private and
secure during processing
([Intel SGX Enclave](https://www.intel.com/content/dam/develop/external/us/en/documents/overview-of-intel-sgx-enclave-637284.pdf)).
This is crucial because it allows you to run computations on sensitive climate
data, like real-time air quality readings or pollution levels, without exposing
it to any external threats.

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

> Okay, I think it's time to reveal the name of the tool that will enable all
> the key features mentioned above. Drum roll, please.... **DATAPROTECTOR**.

It's a perfect transition to the next section ..our developer tools.

## 🧩 The Developer tools

Ok quick wrap up, we have the **Protocol** (TEE + Blockchain) that enable our
**Key features** (confidential computing, data management and monetization),
and..drum roll again.. (this hello world become a music festival 😄) the
**developer tools** that will help you to implement all of this in your
**DApp**.

> If you need to remember one thing, it's that **we capture and abstract all the
> complexity of confidential computing and blockchain** in our developer tools,
> these tools are SDK so it's a kind of plug and play installation.

But today we gonna focus on one of them, the superhero **DataProtector**.

**DataProtector** Utilizes end-to-end encryption and advanced confidential
computing technology to ensure the protection and confidentiality of your data,
while Dynamic Access and Monetization Management allows users to manage access
and flexibly control and monetize their data assets.

Back to our use case, as a scientist you can use DataProtector to securely
encrypt climate data, set terms for access, and monetize your data by allowing
access to user like researchers or organizations and **iExec application** can
then compute your data in a secure environment.

🚨 **iExec application** : The iExec app is a serverless Web3 application that
runs on an iExec worker node, which is part of a decentralized compute
infrastructure, with TEE (Trusted Execution Environment) support for enhanced
security and confidentiality

Ok great but how our scientist can integrate all of this in his DApp? Let's
discover this in the next section

## 🧩 The Dapp integration

Decentralized confidential computing might sound complex, but we've worked hard
to make it simple and accessible through our developer tools. Our tools capture
the essence and power of confidential computing and blockchain technology,
abstracting away the complexity. With just a quick **npm/yarn/pnpm install**,
our scientist can integrate these powerful features in his Dapp and then be able
to protect, manage and monetize sensitive data (and you don’t need to be a
full-stack Web3 developer, that’s amzing).

Here’s an easy-to-follow recipe:

1. **Start with Your App**: Use an existing app or scaffold a new one.
2. **Install the Developer Tool**: Run the installation command.
3. **Import and Create an Instance**: Import the tool into your file and create
   a new instance.
4. **Call the Methods You Need**: Use the methods provided by the tool.
5. **That's It!**: You’re done!

Don't just take my word for it—check out our code sandbox! We have ready-to-use
code snippets that you can try out. With these steps, you’ll be able to offer
your **users** Dapps with privacy-focused features in no time. Happy coding!

## 💫The Next steps

In the next chapter, we’ll dive into **The Developer’s Tool: DataProtector**.
and check how we can protect and manage data with it. AMAZING Grab a cup of
coffee and see you in the next chapter
