# 🛡️Protect and manage data

Okay, if you’re here, it means you’ve just created and deployed your first iExec
application. I think you’re now at the step where you need your data to be
computed securely. That’s why we created DataProtector, a tool that will help
you protect and manage your data in a secure way.

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

## 🧩 OK Great i have a protected Data..Let's go back on our iExec Apllication console

Now that you have a protected data, you can use it in an iExec application.
