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

## 🧩 Meet DataProtector

DataProtector is a developer tool built on top of our technology. It streamlines
the decentralized confidential computing process, making it easy for developers
to protect, manage and monetize their data.

Here are the key features:

<div class="features-list">
  <div class="feature-item">
    <span class="feature-title">🔐 Data Privacy and Security</span>
    <p>Utilizes end-to-end encryption to ensure protection and confidentiality, leveraging advanced confidential computing technology.</p>
  </div>

  <div class="feature-item">
    <span class="feature-title">🎮 Dynamic Access Management</span>
    <p>Allows users to manage access, enabling flexible control and monetization of data assets.</p>
  </div>

  <div class="feature-item">
    <span class="feature-title">🔌 Seamless dApp Integration</span>
    <p>Features an SDK for easy integration into your DApp, enhancing functionality and user experience.</p>
  </div>
</div>

## 🧩 Let's create protected data

<ProtectData />

## 🧩 What happens under the hood

<div class="code-note">
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

<div class="integration-steps">
  <div class="step-item">
    <span class="step-title">1. Start with Your dApp</span>
    <p>Use an existing dApp or scaffold a new one</p>
  </div>
  <div class="step-item">
    <span class="step-title">2. Install the Developer Tool</span>
    <p>Run <a href="https://www.npmjs.com/package/@iexec/dataprotector">npm install @iexec/dataprotector</a></p>
  </div>
  <div class="step-item">
    <span class="step-title">3. Import and Initialize</span>
    <p>Import the tool and create a new instance</p>
  </div>
  <div class="step-item">
    <span class="step-title">4. Start Using</span>
    <p>Call the methods you need - that's it!</p>
  </div>
</div>

<div class="solution-note">
  <p>Check out our <a href="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7">code sandbox</a> for ready-to-use examples!</p>
</div>

## 🧩 Protected data needs iExec Apps

Yes, you read it right - a protected data is useless **on its own**. Think of it
like a paper: if you don't have a pen, you won't be able to write on it.

We need a special pen able to process the protected data: an **iExec
Application**.

<div class="info-note">
  <p><strong>🚨 iExec Application</strong> (we'll use iDapp too in this tutorial)</p>
  <p>An iExec application runs in a trusted execution environment (TEE) and processes protected data. It takes protected data as input and returns results after confidential computation. The computation can be any kind of algorithm, machine learning model, or data processing task.</p>
</div>

## 🧩 Key takeaways

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

<style>
.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-title {
  font-weight: 500;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.code-note {
  background: var(--vp-c-bg-soft);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin: 1rem 0;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-number {
  background: var(--accent-color);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
}

.integration-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.step-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.step-title {
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.info-note {
  background: var(--vp-c-bg-soft);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.takeaways-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.takeaway-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.takeaway-item span {
  font-size: 1.25rem;
}

.takeaway-item p {
  margin: 0;
}
</style>
