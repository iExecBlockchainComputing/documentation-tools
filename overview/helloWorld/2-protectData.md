<script setup>
import ProtectData from '../../modules/helloWorld/ProtectData.vue';
</script>

# 🛡️ Let's protect data

> Reading time: 6 minutes

<div class="hero">
  <div class="hero-content hero-overview">
    <h2>Time to get practical</h2>
    <p>Let's follow Alice as she learns how to protect her data using DataProtector on Bob's dApp, our developer tool for protecting data creation and management.</p>
  </div>
</div>

<div class="solution-note purple">
  <p><strong>Protected data</strong> is encrypted data that remains confidential throughout its entire lifecycle - during storage, transfer and processing.</p>
</div>

## 🧩 DataProtector, key features

DataProtector is a developer tool built on top of our technology. It helps
developers easily add data protection, management, and monetization features to
their dApps with these key features:

<div>
  <p>🔐 <strong>Data Privacy and Security</strong></p>
  <p>Utilizes end-to-end encryption and decentralized storage (<a href="https://ipfs.tech/" target="_blank">IPFS</a>) to ensure protection and confidentiality, leveraging advanced confidential computing technology.</p>
</div>

<div>
  <p>🎮 <strong>Dynamic Access Management</strong></p>
  <p>Allows users to manage access, enabling flexible control and monetization of data assets.</p>
</div>

<div>
    <p>🔌 <strong>Seamless dApp Integration</strong></p>
    <p>Features an SDK for easy integration into your DApp, enhancing functionality and user experience.</p>
</div>

<div class="solution-note purple">
  <p> DataProtector interacts with iExec's <a href="https://chainlist.org/?search=bellecour" target="_blank">Bellecour sidechain</a>, which is gasless, meaning you can use it completely free without needing any tokens!</p>
</div>

## 🧩 Let's create protected data

<ProtectData />

## 🧩 What happened under the hood

<div class="solution-note purple">
  <p>You won't believe how easy it is to protect your data with DataProtector. Just a few lines of code, and you're done!</p>
</div>

To use it, simply call the `protectData` method from the **DataProtector SDK**
with two arguments.

- The data object to be protected (can contain text, files, JSON data etc.)
- The name of the protected data

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
});
```

For this tutorial, you can try out the code directly in our interactive
CodeSandbox demo
[here](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2FApp.tsx&preventWorkspaceRedirect=true).
Here's a quick overview of what happened when you clicked the **Protect Data**
button:

![alt](/assets/hello-world/dataprotector_light.png){.light-only}
![alt](/assets/hello-world/dataprotector_dark.png){.dark-only}

<div class="process-steps">
  <div class="step">
    <span class="step-number">1</span>
    <span>The DataProtector SDK is called</span>
  </div>
  <div class="step">
    <span class="step-number">2</span>
    <span>The data is encrypted with a symmetric key</span>
  </div>
  <div class="step">
    <span class="step-number">3</span>
    <span>The encrypted data is stored on IPFS</span>
  </div>
  <div class="step">
    <span class="step-number">4</span>
    <span>The symmetric key is stored in a secure enclave (TEE) in the Secret Management Service</span>
  </div>
  <div class="step">
    <span class="step-number">5</span>
    <span>The DataProtector smart contract is used to establish data ownership as an NFT</span>
  </div>
  <div class="step">
    <span class="step-number">6</span>
    <span>The protected data address is returned to the user</span>
  </div>
</div>

## 🧩 How to install and use DataProtector

Decentralized confidential computing might sound complex, but we've made it
simple through our developer tools.

<div>
  <div>
    <p><strong>1. Install the Developer Tool</strong></p>
    <p>Run the install command:</p>

```sh
npm install @iexec/dataprotector
```

  </div>
  <div>
    <p><strong>2. Import and Initialize it in your project</strong></p>
    Import the tool

```ts twoslash
import { Address, IExecDataProtector } from '@iexec/dataprotector';
```

Create a new instance and call the methods you need

  </div>
</div>

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
});
```

<div class="solution-note purple">
  <p>Check out our <a target="_blank" href="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7">code sandbox</a> for ready-to-use examples!</p>
</div>

## 🎯 Key takeaways

<div class="takeaways-list">
  <div class="takeaway-item">
    <span>🔒</span>
    <p><strong>DataProtector</strong> ensures data protection, management, and confidentiality</p>
  </div>
  <div class="takeaway-item">
    <span>📦</span>
    <p><strong>Protected Data</strong> is encrypted and stored on decentralized storage</p>
  </div>
  <div class="takeaway-item">
    <span>⛓️</span>
    <p><strong>Ownership</strong> is stored on the blockchain and linked to your wallet</p>
  </div>
  <div class="takeaway-item">
    <span>🔌</span>
    <p><strong>Integration</strong> is simple with our developer tools</p>
  </div>
</div>

<div class="solution-note green">
  <p>In the next chapter, we'll show you how to build, deploy, and run an iApp to process your protected data. Let's go! 🚀</p>
</div>
