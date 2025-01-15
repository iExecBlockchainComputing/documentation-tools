<script setup>
import GrantAccess from '../../components/GrantAccess.vue';
</script>

# 🔑 Manage Data Access

> Reading time 🕒 6 mins

<div class="hero">
  <div class="hero-content">
    <h2>Control Your Data</h2>
    <p>Learn how to grant access to your protected data and manage who can use it.</p>
  </div>
</div>

<div class="solution-note">
  <p>When you protect your data, you can authorize specific <span class="highlight">users</span> and <span class="highlight">applications</span> to access it. This means an authorized user will be able to use an authorized iApp to compute your protected data.</p>
</div>

## The Authorization Flow

Here is a simple diagram to explain the process:

![alt text](/assets/hello-world/process.png)

<div class="process-steps">
  <div class="step">
    <span class="step-number">1</span>
    <span>Protect your data using DataProtector SDK</span>
  </div>
  <div class="step">
    <span class="step-number">2</span>
    <span>Authorize a user (wallet address) to access your data</span>
  </div>
  <div class="step">
    <span class="step-number">3</span>
    <span>Authorize the iExec Application to access your data</span>
  </div>
  <div class="step">
    <span class="step-number">4</span>
    <span>Authorized user can now run your iExec App to process your protected data</span>
  </div>
</div>

## Grant Access to Your Data

<div class="solution-note">
  <p>Remember the <span class="highlight">iExec App address</span> you saved from the previous chapter? You'll need it now to grant access to your protected data.</p>
</div>

<GrantAccess />

Let's look at the code that makes this possible:

```typescript
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: protectedData.address,
  authorizedApp: authorizedApp.address,
  authorizedUser: '0x0000000000000000000000000000000000000000',
});
```

<div class="requirements-list">
  <div class="requirement-item">
    <div class="req-title">📄 protectedData</div>
    <span>The address of your protected data (stored during protection)</span>
  </div>
  
  <div class="requirement-item">
    <div class="req-title">💻 authorizedApp</div>
    <span>The iExec App address you want to authorize</span>
  </div>
  
  <div class="requirement-item">
    <div class="req-title">👤 authorizedUser</div>
    <span>User's wallet address (0x... means all users)</span>
  </div>
</div>

## Time to Run! 🚀

You're now ready to process your protected data in a trusted environment:

```sh
iapp run <my-iapp-address> --protectedData <protectedData-address>
```

<div class="solution-note">
  <p>🎉 Congratulations! You've successfully completed the core workflow of protecting and processing data with iExec!</p>
</div>

## What's Next: Data Monetization

We just finished the first episode of our journey, and you're now able to
integrate DataProtector SDK into you dApp, protect your data, grant access to
users and iExec Applications, and compute your data. But what if you want to
monetize your data?

DataProtector SDK has a monetization feature that allows you to set a price for
your data access. You can even create protected data collections and set up
renting or subscription plans.

<div class="help-note">
  <p>Can't wait to learn more? Check out <a href="https://beta.tools.docs.iex.ec/tools/dataProtector/dataProtectorSharing.html" target="_blank">DataProtector Sharing</a> and see it in action in the <a href="https://demo.iex.ec/content-creator/" target="_blank">Content Creator demo</a>!</p>
</div>
