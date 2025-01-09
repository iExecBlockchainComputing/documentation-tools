# Welcome to iExec! 👋

> Estimated reading time: 2 minutes

<div class="hero">
  <div class="hero-content">
    <h2>Start Your Web3 Privacy Journey</h2>
    <p>Welcome to the iExec Hello World Journey! This interactive guide will introduce you to the fundamentals of iExec technologies and how you can use them to build a privacy-preserving dApp.</p>
    <div class="hero-time">
      <span class="time-badge">☕ 30 minutes journey</span>
      <p>Perfect for hackathon :)</p>
    </div>
  </div>
</div>

## What You'll Learn

<div class="journey-grid">
  <a href="./1-overview" class="journey-card">
    <div class="card-icon">📚</div>
    <div class="card-content">
      <h3>1 - iExec Overview</h3>
      <p>Discover how iExec technologies work and the problems it solve</p>
      <div class="time-wrapper">
        <span class="time-estimate">5 min read</span>
      </div>
    </div>
  </a>

  <a href="./2-protectData" class="journey-card">
    <div class="card-icon">🔒</div>
    <div class="card-content">
      <h3>2. Protect Your Data</h3>
      <p>Learn to secure your sensitive data using our developer tools</p>
      <div class="time-wrapper">
        <span class="time-estimate">8 min read</span>
      </div>
    </div>
  </a>

  <a href="./3-useProtectedData" class="journey-card">
    <div class="card-icon">💻</div>
    <div class="card-content">
      <h3>3. Work with Protected Data</h3>
      <p>Build and run your first iExec App to work with protected data</p>
      <div class="time-wrapper">
        <span class="time-estimate">10 min read</span>
      </div>
    </div>
  </a>
    
  <a href="./4-manageDataAccess" class="journey-card">
    <div class="card-icon">🔑</div>
    <div class="card-content">
      <h3>4. Control Data Access</h3>
      <p>Master data access management, permissions and monetization</p>
      <div class="time-wrapper">
        <span class="time-estimate">7 min read</span>
      </div>
    </div>
  </a>
  
  <a href="./5-suprise" class="journey-card special">
    <div class="card-icon">✨</div>
    <div class="card-content">
      <h3>Bonus Chapter</h3>
      <p>Finish the journey with a surprise bonus chapter!</p>
      <div class="time-wrapper">
        <span class="surprise-badge">Special Content</span>
      </div>
    </div>
  </a>
</div>

## Getting Started

Before you begin, make sure you have:

<div class="requirements-list">
  <div class="requirement-item">
    <div class="req-title">🦊 Ethereum Wallet</div>
    <a target="_blank" href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Metamask Download →</a>
  </div>
  
  <div class="requirement-item">
    <div class="req-title">💻 Code Editor</div>
    <a target="_blank" href="https://code.visualstudio.com/"> Download →</a>
  </div>
  
  <div class="requirement-item">
    <div class="req-title">📦 Node.js v18+</div>
    <a target="_blank" href="https://nodejs.org/en/">Download →</a>
  </div>
  
  <div class="requirement-item">
    <div class="req-title">🐳 DockerHub Account</div>
    <a target="_blank" href="https://hub.docker.com/">Sign Up →</a>
  </div>
</div>

<div class="help-note">
  <p>Need help setting up or got some questions? Join our <a target="_blank" href="https://discord.gg/iexec">Discord Community</a> for support!</p>
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
  padding: 0rem 2rem;
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;

}

.hero-time {
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.time-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
}

.journey-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.journey-card {
  background: var(--vp-c-bg-soft);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  display: flex;
  gap: 1rem;
  text-decoration: none !important;
  color: var(--vp-c-text-1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.journey-card * {
  text-decoration: none !important;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 120px;
}

.card-content h3 {
  margin: 0 !important;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  line-height: 1.3;
}

.card-content p {
  margin: 1rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.journey-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.journey-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-hover-shadow);
}

.journey-card:hover::before {
  transform: scaleX(1);
}

.card-icon, .feature-icon  {
  font-size: 2rem;
}

.time-wrapper {
  margin-top: auto;
  padding-top: 0.75rem;
}

.time-estimate {
  display: inline-block;
  font-size: 0.9rem;
  color: var(--vp-c-text-4);
  background: var(--vp-c-bg-soft);
}

.special {
  background: linear-gradient(135deg, #CE2C68, #3F0D3F);
  color: white;
}

.special h3, .special p, .special .time-estimate {
  color: white;
}

.special::before {
  background: linear-gradient(135deg, #CE2C68, #3F0D3F);
}

.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  padding-left: 0;
}

.requirement-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
}

.req-title {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.requirement-item p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.requirement-item a {
  color: var(--accent-color);
  text-decoration: none;
  font-size: 0.9rem;
  margin-left: auto;
}

.requirement-item a:hover {
  text-decoration: underline;
}

.help-note {
  margin-top: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
}

.help-note p {
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
  color: var(--vp-c-text-2);
}

.help-note a {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
}

.help-note a:hover {
  text-decoration: underline;
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
