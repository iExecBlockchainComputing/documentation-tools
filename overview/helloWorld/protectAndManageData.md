# 🛡️Protect and manage data

Ok just for a quick reminder, we are following the journey of a scientist who
wants to protect, compute or monetize his climate data. In the previous chapter,
we introduced the iExec stack and its main key components. Now, we will show you
how to protect your data with our superhero **DataProtector**.

## 🧩 DataProtector

DataProtector is our main developer tool cause it allow to create the
fundationals bricks the protected data, protected data that can be used in an
iExec application.

- **Data Privacy and Security** : Utilizes end-to-end encryption to ensure the
  protection and confidentiality of your data, leveraging advanced confidential
  computing technology.

- **Dynamic Access and Monetization Management** : Allow users to manage access,
  enabling flexible control and monetization of data assets.

- **Seamless dApp Integration** : Features an SDK for easy integration into a
  DApp, enhancing functionality and user experience.

We will provide everything you need to know in this "Hello World" to get started
with DataProtector, but if you jump straight to the code and integrate it into
you Dapp, you can find the full documentation
[here](https://beta.tools.docs.iex.ec/tools/dataProtector.html) or follow this
reallllly complex set up below 😁 please pick some code snippets in our
[CodeSandbox](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true)

For instance protect a data is as simple as :

```typescript
const provider = await connector.getProvider();
const dataProtector = new IExecDataProtector(provider);
const { address: protectedDataAddress } = await dataProtector.protectData({
  data,
  name,
});
```

Tadaada that's it!

## 🧩 Let's create a protected Data

<script setup>
import WagmiLoginButton from '../../components/WagmiLoginButton.vue'
</script>

<WagmiLoginButton />

## 🧩 Under the hood

It's always better to understand the car engine before driving it, right? So
let's take a look under the hood and see what happened when you clicked on the
button **Protect Data**.

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

## 🧩 OK Great i have a protected Data..and what now ?

Now that you have a protected data, you can use it in an iExec application.
