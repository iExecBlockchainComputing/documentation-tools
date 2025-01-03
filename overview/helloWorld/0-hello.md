# Welcome to iExec! 👋

> Estimated reading time: 2 minutes

Welcome to the iExec Hello World Journey! This guide will introduce you to the 
fundamentals of iExec technologies and how they work together.

You can complete this hands-on journey in about **30 minutes** - perfect for a coffee break! ☕

## What You'll Learn

<div class="grid">
  <a href="./1-overview" class="card">
    <h3>📚 1 - iExec  Overview</h3>
    <p>Introduce the iExec technologies and what it solves</p>
  </a>

  <a href="./2-protectData" class="card">
    <h3>🔒 2. Protect Your Data</h3>
    <p>Learn how to keep your data safe using our developer tools</p>
  </a>

  <a href="./3-useProtectedData" class="card">
    <h3>💻 3. Work with Protected Data</h3>
    <p>Build and run your first iExec application using protected data</p>
  </a>
    
  <a href="./4-manageDataAccess" class="card">
    <h3>🔑 4. Control Data Access</h3>
    <p>Choose who can use your data and how they can use it</p>
  </a>
  
  <a href="./5-suprise" class="card">
    <h3>✨ Bonus Chapter</h3>
    <p>Complete the journey to unlock some cool advanced features!</p>
  </a>
</div>

::: tip 🚨 Hint
Look out for the 🚨 symbol - it means we're introducing something new! 
Want to learn more? Check out our full [Glossary](https://protocol.docs.iex.ec/help/glossary).
:::

## What You'll Need

Before we start, make sure you have:

- A [MetaMask](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) wallet to interact with the blockchain
- Your favorite code editor (we like VSCode, but any will do!)
- [Node.js](https://nodejs.org/en/) version 18 or newer
- [NPM](https://docs.npmjs.com/) for managing packages
- A [DockerHub](https://hub.docker.com/) account

Don't worry if you don't have all of these - you can join our [Discord](https://discord.gg/iexec) and we'll help.

<style>
:root {
  --primary-color: #0070f3;
  --hover-color: #0051b3;
  --card-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  --card-hover-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  --card-border: 1px solid #e0e0e0;
  --card-radius: 6px;
  --transition-speed: 0.3s;
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color var(--transition-speed) ease;
}

a:hover {
  color: var(--hover-color);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 12px 0;
}

.card {
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: 20px;
  background-color: #fff;
  transition: all var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-speed) ease;
}

.card:hover {
  box-shadow: var(--card-hover-shadow);
  transform: translateY(-4px);
}

.card:hover::before {
  transform: scaleX(1);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #1a1a1a;
  font-size: 1.25rem;
}

.card p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.vp-doc a {
  text-decoration: none !important;
}

.hint {
  background-color: #f8f9fb;
  border-radius: var(--card-radius);
  padding: 16px 24px;
  margin: 24px 0;
  border-left: 4px solid var(--primary-color);
  color: #476582;
  position: relative;
}

.hint::before {
  content: '💡';
  position: absolute;
  top: 12px;
  left: -12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: var(--card-shadow);
}

</style>
