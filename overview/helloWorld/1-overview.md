# 🧐 iExec Overview

> Reading time 🕒 3 mins

<div class="hero">
  <div class="hero-content">
    <p>Let's explore how iExec can help you build privacy-preserving applications and manage sensitive data securely.</p>
  </div>
</div>

## 👨‍💻 What Problem Does iExec Solve?

<p>Imagine you're building a decentralized application (dApp) that needs to <strong> handle sensitive user data </strong>. For example:</p>
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
      <span>Control who can access it</span>
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
  <p><strong>This is where iExec comes in! We provide developer tools that make it easy to integrate privacy-preserving features into your applications.</strong></p>
</div>

### 🔒 The Two Key Elements

To build privacy-preserving applications with iExec, you'll need two fundamental
elements that work together seamlessly. These elements form the foundation of
any confidential computing solution on our platform:

#### 1. Protected Data

- Your sensitive data is encrypted and stored safely
- Only you control who can access it
- Perfect for private information like research data, business analytics, or
  personal records

#### 2. iExec Apps

- Special applications that can work with your protected data
- Run in secure environments (called TEEs) that keep

### 🤝 How They Work Together

Think of it like a secure room:

- Your protected data can only be "opened" inside this room
- Only approved apps can enter the room
- Everything that happens inside stays private
- You control who gets access

## 🔍 Anatomy of a Privacy-Preserving dApp

<div class="anatomy-grid">
  <div class="anatomy-card">
    <div class="card-header">
      <span class="card-icon">🛡️</span>
      <h3>Data Protection Layer</h3>
    </div>
    <ul>
      <li>Secure data encryption</li>
      <li>Access control management</li>
      <li>Permission handling</li>
    </ul>
  </div>

  <div class="anatomy-card">
    <div class="card-header">
      <span class="card-icon">🔐</span>
      <h3>Confidential Computing</h3>
    </div>
    <ul>
      <li>Process sensitive data while keeping it encrypted</li>
      <li>Run computations without exposing the data</li>
      <li>Ensure data privacy throughout its lifecycle</li>
    </ul>
  </div>

  <div class="anatomy-card">
    <div class="card-header">
      <span class="card-icon">⛓️</span>
      <h3>Web3 Integration</h3>
    </div>
    <ul>
      <li>Blockchain-based access management</li>
      <li>Decentralized storage solutions</li>
      <li>Transparent transaction handling</li>
    </ul>
  </div>
</div>

## 🎯 Key Features

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-header">
      <span class="feature-icon">🔒</span>
      <h3>Confidential Computing</h3>
    </div>
    <p>Process sensitive data securely without exposing it to any external parties - not even the application owners or infrastructure providers.</p>
  </div>

  <div class="feature-card">
    <div class="feature-header">
      <span class="feature-icon">🎮</span>
      <h3>Privacy and User Control</h3>
    </div>
    <p>Give users complete control over their data:</p>
    <ul>
      <li>Who can access it</li>
      <li>How it's used</li>
      <li>When permissions are granted or revoked</li>
    </ul>
  </div>

  <div class="feature-card">
    <div class="feature-header">
      <span class="feature-icon">💰</span>
      <h3>Data Monetization</h3>
    </div>
    <p>Enable new business models:</p>
    <ul>
      <li>Monetize datasets securely</li>
      <li>Create data marketplaces</li>
      <li>Establish pay-per-use models</li>
    </ul>
  </div>
</div>

## 🚀 Getting Started

<div class="getting-started-card">
  <p>In the following chapters, we'll show you how to:</p>
  
  <div class="steps-list">
    <div class="step-item">
      <span class="step-number">1</span>
      <span>Protect sensitive data using DataProtector</span>
    </div>
    <div class="step-item">
      <span class="step-number">2</span>
      <span>Build applications that work with protected data</span>
    </div>
    <div class="step-item">
      <span class="step-number">3</span>
      <span>Manage data access and permissions</span>
    </div>
  </div>

  <div class="cta-wrapper">
    <p>Ready to start building? Let's dive into protecting your first piece of data!</p>
  </div>
</div>

<style>
:root {
  --primary-color: #FCD15A;
  --secondary-color: #1D1D24;
  --accent-color: #CE2C68;
  --background-light: #F5F5F5;
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
  border-radius: var(--border-radius);

  margin: 1.5rem 0;
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
  .anatomy-grid, .features-grid {
    grid-template-columns: 1fr;
  }
}

.anatomy-card, .feature-card {
  border: 1px solid var(--vp-c-divider);
}
</style>
