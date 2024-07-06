<script setup>
import ProtectData from '../../components/ProtectData.vue';
</script>

# 🛡️Let's protect data

> Reading 🕒 6 mins

We talked about **iExec Protocol**, **confidential computing**, **Privacy**. The
link between all of this is **Data**, more specifically **Protected Data**.

But what is **Protected Data**, (breath in) it's any kind of data that is
securely encrypted and processed, ensuring it remains confidential and protected
from unauthorized access during its entire lifecycle (breath out).

Now it's time to put all of this into practice. In this chapter, we'll show you
how to protect and manage your data with our developer tool, **DataProtector**.

## 🧩 DataProtector

DataProtector is a developer tool built on top of our protocol, it streamlines
the decentralized confidential computing process, making it easy for developers
to protect, manage and monetize their data.

Here are some of the key features of DataProtector:

- **Data Privacy and Security**: Utilizes end-to-end encryption to ensure the
  protection and confidentiality of your data, leveraging advanced confidential
  computing technology.

- **Dynamic Access and Monetization Management**: Allow users to manage access,
  enabling flexible control and monetization of data assets.

- **Seamless dApp Integration**: Features an SDK for easy integration into a
  DApp, enhancing functionality and user experience.

## 🧩 Let's create a protected Data

<ProtectData />

## 🧩 What happened under the hood

You won't believe how easy it is to protect your data with DataProtector. Just a
few lines of code, and you're done!

you can find the code snippet
[here](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true),
but basically you just need to call the `protectData` method from the
**DataProtector SDK**.

```typescript
const provider = await connector.getProvider();
const dataProtector = new IExecDataProtector(provider);
const { address: protectedDataAddress } = await dataProtector.protectData({
  data,
  name,
});
```

Here's a quick overview of what happened when you clicked the **Protect Data**
button:

![alt text](/assets/hello-world/dataprotector.png)

::: info Ok let's explain step by step

1. DataProtector SDK was called.
2. The data was encrypted with a symmetric key.
3. The encrypted data was stored on public decentralized storage (IPFS).
4. The symmetric key was stored in a secure enclave (TEE).
5. The DataProtector smart contract was called to create the protected data
   ownership on the blockchain.
6. The protected data address was returned to you, linking it to your wallet
   address.

:::

## 🧩 How use it in your dApp

Decentralized confidential computing might sound complex, but we've worked hard
to make it simple and accessible through our developer tools.

With just a quick
[**npm/yarn/pnpm install**](https://www.npmjs.com/package/@iexec/dataprotector),
our scientist can integrate these powerful features in his dApp and then be able
to protect, manage and monetize sensitive data and **cerise sur le gateau** you
don’t need to be a full-stack Web3 developer, that’s amazing.

Here’s an easy-to-follow recipe:

1. **Start with Your dApp**: Use an existing dApp or scaffold a new one.
2. **Install the Developer Tool**: Run the installation
   [**command**](https://www.npmjs.com/package/@iexec/dataprotector).
3. **Import and Create an Instance**: Import the tool into your file and create
   a new instance.
4. **Call the Methods You Need**: Use the methods provided by the tool.
5. **That's It!**: You’re done!

Don't just take my word for it—check out our
[code sandbox!](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true)
We have ready-to-use code snippets that you can try out. With these steps,
you’ll be able to offer your **users** Dapps with privacy-focused features in no
time. Happy coding!

## 🧩 Protected data is useless

Yes you read it right, a protected data is useless **on its own**, it's like a
paper if you don't have a pen you won't be able to write on it.

But we need a special pen able to process the protected data, we need an **iExec
Application**.

::: tip 🚨**iExec Application** (we will use the iDapp too in this tutorial)

An iExec application is an application that can run in a trusted execution
environment (TEE) and process protected data. It takes the protected data as
input and returns a result after confidential computation. The computation can
be any kind of algorithm, machine learning model, or data processing task.

:::

## 🧩 Key takeaways

- **DataProtector** is a developer tool that ensures data protection and
  confidentiality, allowing dynamic access and monetization management.
- **Protected Data** are created by DataProtector and can be used in an iExec
  application.
- Protected Data are **encrypted** with a symmetric key and stored on a
  decentralized storage.
- Protected Data **ownership** is stored on the blockchain and linked to the
  user's wallet.

## 💫 The Next steps

In the next chapter, we will show you how to build, deploy, and run an iExec
application to process your protected data. Let's go! 🚀
