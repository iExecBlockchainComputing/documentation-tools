<script setup>
import ProtectData from '../../components/ProtectData.vue';
</script>

# 🛡️Protect and manage data (4 min)

Okay, we talked about confidential computing, data protection, and privacy. Now
it's time to put all of this into practice. In this chapter, we'll show you how
to protect and manage your data with our developer tool, **DataProtector**.

## 🧩 DataProtector

DataProtector is one of the most important of our tools, it enable the creation
to create of protected data, protected data that can be used by a user in an
iExec application.

- **Data Privacy and Security** : Utilizes end-to-end encryption to ensure the
  protection and confidentiality of your data, leveraging advanced confidential
  computing technology.

- **Dynamic Access and Monetization Management** : Allow users to manage access,
  enabling flexible control and monetization of data assets.

- **Seamless dApp Integration** : Features an SDK for easy integration into a
  DApp, enhancing functionality and user experience.

## 🧩 Let's create a protected Data

<ProtectData />

## 🧩 What happened Under the hood

You won't believe how easy it is to protect your data with DataProtector. Just a
few lines of code, and you're done! you can find the code snippet
[here](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true),
but basically you just need to call the protectData method from the
DataProtector SDK.

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

Ok let's explain step by step

1. The DataProtector SDK was called.
2. The data was encrypted with a symmetric key.
3. The encrypted data was stored on public decentralized storage (IPFS).
4. The symmetric key was stored in a secure enclave (TEE).
5. The DataProtector smart contract was called to create the protected data
   ownership on the blockchain.
6. The protected data address was returned to you, linking it to your wallet
   address.

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

## 🧩 On it's own, a protected data is useless

Yes you read it right, a protected data is useless on its own, it's like a
locked safe, you need to grant access to someone to be able to use it. In the
next chapter, we'll show you how to grant access to your protected data to an
iExec application and a user. Stay tuned!

## 🧩 Keys takeway

- **DataProtector** is a developer tool that ensures data protection and
  confidentiality, allowing dynamic access and monetization management.
- **Protected Data** is created by DataProtector and can be used in an iExec
  application.
- **Protected Data** is encrypted with a symmetric key and stored on IPFS.
- **Protected Data** ownership is stored on the blockchain.

## 💫The Next steps

In the next chapter, we’ll dive into **Compute Data** and check how we can
build, deploy and run an iExec application and process your protected data.
AMAZING! Grab a cup of tee and let's go!
