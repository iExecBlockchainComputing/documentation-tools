# Getting Started with iExec

> Estimated reading time: 2 minutes

Welcome to the iExec Hello World Journey! This guide will introduce you to the 
fundamentals of confidential computing and data privacy using the iExec platform.

This technical walkthrough covers iExec's core functionalities and can be completed in approximately **30 minutes**, structured across 5 focused modules.

## Technical Learning Objectives

<div class="grid">
  <a href="./1-overview" class="card">
    <h3>📚 1. Platform Architecture</h3>
    <p>Deep dive into iExec's technical infrastructure and core technologies</p>
  </a>

  <a href="./2-protectData" class="card">
    <h3>🔒 2. Data Protection Implementation</h3>
    <p>Implement enterprise-grade data protection using our developer toolkit</p>
  </a>

  <a href="./3-useProtectedData" class="card">
    <h3>💻 3. Protected Data Integration</h3>
    <p>Build, deploy, and execute applications with protected data processing capabilities</p>
  </a>
    
  <a href="./4-manageDataAccess" class="card">
    <h3>🔑 4. Access Control Management</h3>
    <p>Implement granular access control for protected data across users and applications</p>
  </a>
  
  <a href="./5-suprise" class="card">
    <h3>⚡ Advanced Implementation</h3>
    <p>Unlock advanced features upon completion of core modules</p>
  </a>
</div>

::: tip Technical Documentation Note

Sections marked with 🚨 indicate critical technical concepts. For comprehensive
reference, consult our [Technical Glossary](https://protocol.docs.iex.ec/help/glossary).

:::

## Technical Requirements

The following development environment setup is required:

- **Web3 Integration**: [MetaMask](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) for Ethereum wallet functionality
- **Development Environment**: Modern IDE (VSCode recommended)
- **Runtime Environment**: [Node.js](https://nodejs.org/) v18+
- **Package Management**: [NPM](https://docs.npmjs.com/)
- **Container Registry**: Active [DockerHub](https://hub.docker.com/) account

<style>
a {
  text-decoration: none;
  color: #0070f3;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card h3 {
  margin-top: 0;
}

.card h3, .card p {
  color: rgb(60, 60, 67);
  text-decoration: none;
}

.card, p {
  font-size: 16px;
}

.card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.vp-doc a{
  text-decoration: none !important;
}
</style>
