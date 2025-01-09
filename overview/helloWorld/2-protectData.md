<script setup>
import ProtectData from '../../components/ProtectData.vue';
</script>

# 🛡️ Let's protect data

> Reading time: 6 minutes

<div class="hero">
  <div class="hero-content hero-overview">
    <h2>Time to get practical</h2>
    <p>Let's follow Alice as she learns how to protect her data using DataProtector, our developer tool for protecting data creation and management.</p>
  </div>
</div>

<div class="solution-note">
  <p><strong>Protected Data</strong> is encrypted data that remains confidential throughout its entire lifecycle - during storage, transfer and processing.</p>
</div>

## 🧩 DataProtector, key features

DataProtector is a developer tool built on top of our technology. It streamlines
the decentralized confidential computing process, making it easy for developers
to protect, manage and monetize their data.

<div >
  <p>🔐 <strong>Data Privacy and Security</strong></p>
  <p>Utilizes end-to-end encryption to ensure protection and confidentiality, leveraging advanced confidential computing technology.</p>
</div>

<div>
  <p>🎮 <strong>Dynamic Access Management</strong></p>
  <p>Allows users to manage access, enabling flexible control and monetization of data assets.</p>
</div>

<div>
    <p>🔌 <strong>Seamless dApp Integration</strong></p>
    <p>Features an SDK for easy integration into your DApp, enhancing functionality and user experience.</p>
</div>

## 🧩 Let's create protected data

<ProtectData />

## 🧩 What happens under the hood

<div class="solution-note">
  <p>You won't believe how easy it is to protect your data with DataProtector. Just a few lines of code, and you're done!</p>
</div>

You can find the code snippet
[here](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true),
but basically you just need to call the `protectData` method from the
**DataProtector SDK**:

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

<div class="process-steps">
  <div class="step">
    <span class="step-number">1</span>
    <span>DataProtector SDK was called</span>
  </div>
  <div class="step">
    <span class="step-number">2</span>
    <span>Data was encrypted with a symmetric key</span>
  </div>
  <div class="step">
    <span class="step-number">3</span>
    <span>Encrypted data was stored on IPFS</span>
  </div>
  <div class="step">
    <span class="step-number">4</span>
    <span>Symmetric key was stored in a secure enclave (TEE)</span>
  </div>
  <div class="step">
    <span class="step-number">5</span>
    <span>Smart contract created the protected data ownership</span>
  </div>
  <div class="step">
    <span class="step-number">6</span>
    <span>Protected data address was returned to you</span>
  </div>
</div>

## 🧩 Using it in your dApp

Decentralized confidential computing might sound complex, but we've made it
simple through our developer tools.

  <div >
    <p><strong>1. Start with Your dApp</strong></p>
    <p>Use an existing dApp or scaffold a new one</p>
  </div>
  <div >
    <p><strong>2. Install the Developer Tool</strong></p>
    <p>Run <a href="https://www.npmjs.com/package/@iexec/dataprotector">npm install @iexec/dataprotector</a></p>
  </div>
  <div >
    <p><strong>3. Import and Initialize</strong></p>
    <p>Import the tool and create a new instance</p>
  </div>
  <div >
    <p><strong>4. Start Using</strong></p>
    <p>Call the methods you need - that's it!</p>
  </div>

<div class="solution-note">
  <p>Check out our <a href="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7">code sandbox</a> for ready-to-use examples!</p>
</div>

## 🎯 Key takeaways

<div class="takeaways-list">
  <div class="takeaway-item">
    <span>🔒</span>
    <p><strong>DataProtector</strong> ensures data protection and confidentiality</p>
  </div>
  <div class="takeaway-item">
    <span>📦</span>
    <p><strong>Protected Data</strong> are encrypted and stored on decentralized storage</p>
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

<div class="cta-wrapper">
  <p>In the next chapter, we'll show you how to build, deploy, and run an iExec application to process your protected data. Let's go! 🚀</p>
</div>
