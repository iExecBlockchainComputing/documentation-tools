# 🧐 iExec Overview

> Reading time 🕒 4 mins

<div class="hero">
  <div class="hero-content">
    <p>Let's explore how iExec can help you build privacy-preserving applications and manage sensitive data securely.</p>
  </div>
</div>

## 👨‍💻 Building Privacy-First dApps with iExec

<p>Imagine you're building a decentralized application (dApp) that needs to <strong> handle (share or compute) sensitive user data </strong>. For example:</p>
<div class="use-case-card">
  <div class="examples-list">
    <div class="example-item">
      <span class="example-icon">🏥</span>
      <span>A healthcare app processing patient records</span>
    </div>
    <div class="example-item">
      <span class="example-icon">💰</span>
      <span>A financial app handling transaction data</span>
    </div>
    <div class="example-item">
      <span class="example-icon">🔬</span>
      <span>A research platform working with private datasets</span>
    </div>
    <div class="example-item">
      <span class="example-icon">🤖</span>
      <span>An AI model training on sensitive data</span>
    </div>
  </div>

  <div class="requirements-list">
    <p><strong>You'll need a way to:</strong></p>
    <div class="requirement-item">
      <span class="req-icon">🔒</span>
      <span>Keep the data confidential</span>
    </div>
    <div class="requirement-item">
      <span class="req-icon">🎮</span>
      <span>Control who can access it (or buy)</span>
    </div>
    <div class="requirement-item">
      <span class="req-icon">⚡</span>
      <span>Process it securely</span>
    </div>
    <div class="requirement-item">
      <span class="req-icon">💎</span>
      <span>Potentially monetize it</span>
    </div>
  </div>
</div>

<div class="solution-note">
  <p>This is where <span class="highlight">iExec</span> comes in! We provide <span class="highlight">developer tools</span> that make it easy to integrate <span class="highlight">privacy-preserving features</span> into your applications.</p>
</div>

## 👷 What Problem Does iExec Solve?

Unlike traditional security, iExec **protects and encrypts your data**
throughout its entire lifecycle - during storage, transfer, and even while being
processed by applications.

Our technology allows users to **control** the **ownership**,
**confidentiality** and **monetization** of their data and digital assets.

### 🔒 The Three Key Elements

To build **privacy-preserving applications** with iExec, you'll need three
**fundamental elements** that work together seamlessly. These elements form the
**foundation** of any **confidential computing** solution on our platform:

#### 1. Protected Data

- Your sensitive data is encrypted and stored safely
- Only you control when and who can access it
- Perfect for private information like research data, business analytics, or
  personal records

#### 2. iExec Apps

- Special applications that can work with your protected data
- Run in secure environments (called TEEs) that keep your data private
- Process data without exposing sensitive information

#### 3. Blockchain Layer

- Enables tokenization of data
- Regain ownership of your data
- Provides transparent governance rules for data access

<div class="solution-note">
  <p>By merging <span class="highlight">blockchain technology</span> with <span class="highlight">confidential computing</span>, we've pioneered <span class="highlight">DeCC</span> (Decentralized Confidential Computing) to take <span class="highlight">privacy</span> and <span class="highlight">security</span> to the next level in <span class="highlight">Web3</span> ecosystems.</p>
</div>

### 🤝 How They Work Together (explained to your grandma)

Think of it like a secure room with a special notebook:

- Your protected data can only be "opened" inside this room
- Only approved iExec App can enter the room
- Everything that happens inside stays private
- You control who gets access with rules written in an immutable notebook

## 🔍 Building Your First Privacy-Preserving dApp (DRAFT)

Let's follow Alice and Bob's journey to understand how to build with iExec.
Their story illustrates the three main steps of building privacy-preserving
applications:

### 1. Alice Protects Her Data 🔒

Alice has sensitive data she wants to process securely. She'll encrypt her data,
define who can access it and deploy it to secure storage (IPFS).

### 2. Bob Creates a Confidential App 💻

Bob is a developer who builds applications that can process protected data.
He'll develop his app, deploy it in a secure environment (TEE), and make it
available on iExec.

### 3. Secure Collaboration 🤝

Alice discovers Bob's app and decides to use it. She grants the app access to
her protected data, and Bob's app processes it securely in a TEE. The results
are delivered confidentially to Alice.

<div class="solution-note">
  <p>In the next chapters, we'll follow Alice and Bob's journey step by step, starting with how Alice can <span class="highlight">protect her sensitive data</span> and then how Bob can <span class="highlight">build and deploy a confidential app</span> to process it.</p>
</div>

## 🎯 Key Takeaways

<div class="getting-started-card">
  <p>In this chapter, we covered the core concepts of iExec:</p>
  
  <div class="steps-list">
    <div class="step-item">
      <span>🔒</span>
      <span>Three key elements: Protected Data, iExec Apps & Blockchain enable privacy-preserving dApps</span>
    </div>
    <div class="step-item">
      <span>🔐</span>
      <span>End-to-end data encryption during storage, transfer & processing</span>
    </div>
    <div class="step-item">
      <span>🤝</span>
      <span>Full user control over data ownership & monetization</span>
    </div>
    <div class="step-item">
      <span>💡</span>
      <span>Secure TEE environments for confidential computing</span>
    </div>
    <div class="step-item">
      <span>⛓️</span>
      <span>Blockchain for transparent governance & data tokenization</span>
    </div>
  </div>

</div>

<div class="cta-wrapper">
    <p>Now that you understand the fundamentals, let's dive into protecting your first piece of data!</p>
  </div>

<style>
:root {
  --primary-color: #FCD15A;
  --secondary-color: #1D1D24;
  --accent-color: #CE2C68;
  --background-light: #F5F5F5;
  --text-primary: #1D1D24;
  --text-secondary: #5D5D69;
  --card-shadow: 0 2px 6px rgba(29, 29, 36, 0.1);
  --card-hover-shadow: 0 8px 24px rgba(29, 29, 36, 0.15);
  --border-radius: 6px;
  --transition: all 0.3s ease;
}

.hero {
  background: linear-gradient(135deg, #FCD15A, #FFAD4D);
  border-radius: var(--border-radius);
  padding: 2rem;
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.5;
}

.use-case-card, .anatomy-card, .feature-card, .getting-started-card {
  background: var(--vp-c-bg-soft);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.examples-list, .requirements-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
}

.example-item, .requirement-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.example-icon, .req-icon {
  font-size: 1.25rem;
}

.solution-note {
  background: linear-gradient(135deg, rgba(206, 44, 104, 0.1), rgba(206, 44, 104, 0.05));
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-left: 4px solid #CE2C68;
}

.solution-note p {
  margin: 0;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.solution-note .highlight {
  color: #CE2C68;
  font-weight: 600;
}

.anatomy-grid, .features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.card-header, .feature-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.card-icon, .feature-icon {
  font-size: 1.5rem;
}

.card-header h3, .feature-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
}

ul {
  margin: 0.5rem 0;
  padding-left: 1.25rem;
}

li {
  margin: 0.25rem 0;
  color: var(--vp-c-text-2);
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-number {
  background: var(--primary-color);
  color: var(--secondary-color);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.cta-wrapper {
  text-align: center;
  margin-top: 1.5rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }
  
  .journey-grid {
    grid-template-columns: 1fr;
  }
  
  .requirements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
