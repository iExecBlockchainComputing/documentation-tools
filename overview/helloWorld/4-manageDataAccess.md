<script setup>
import GrantAccess from '../../components/GrantAccess.vue';
</script>

# 🔑 Manage Data Access

> Reading time 🕒 6 mins

<div class="hero">
  <div class="hero-content">
    <h2>Control Your Data</h2>
    <p>Alice will learn how to grant access to her protected data and manage who can use it.</p>
  </div>
</div>

<div class="solution-note-purple">
  <p>When you protect your data, you can authorize specific <span class="highlight">users</span> and <span class="highlight">applications</span> to access it. This means an authorized user will be able to use an authorized iApp to compute your protected data.</p>
</div>

## 🔐 The Authorization Flow

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
    <span>Authorize the iApp to access your data</span>
  </div>
  <div class="step">
    <span class="step-number">4</span>
    <span>Authorized user can now run your iExec App to process your protected data</span>
  </div>
</div>

## 🔓 Grant the iApp Access to Your Data

<div class="solution-note">
  <p>Remember the <span class="highlight">iExec App address</span> you saved from the previous chapter? You'll need it now to grant access to your protected data.</p>
</div>

<GrantAccess />

<!-- <RevokeAccess /> -->

**Let's look at the code that makes this possible:**

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
    <span>The protected data address (local storage for the demo)</span>
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

<div class="solution-note-purple">
  <p>As we don't have the Bobs wallet address, we'll use the Zero address to grant access to all users.</p>
</div>

## 🏃 Time to Run!

You're now ready to process your protected data in a trusted environment:

```sh
iapp run <my-iapp-address> --protectedData <protectedData-address>
```

<div class="solution-note-green">
  <p>🎉 Congratulations! You've successfully completed the core workflow of protecting and processing data with iExec!</p>
</div>

## What's Next: Data Monetization

We've completed the first step of the journey! You can now integrate the
**DataProtector SDK** into your dApp, **secure your data**, **grant access** to
users and iApps, and **process it safely**.

But here's where it gets even more exciting...**monetization!**

Our SDK offers flexible **monetization mechanisms**, allowing you to create
**protected data collections** and implement advanced models like
**subscriptions**, **rentals**, or **direct sales**. The choice is yours!

Want to see it in action? Check out our
[Content Creator Demo](https://demo.iex.ec/content-creator/) where you can:

- Create and protect your own content
- Set pricing and access rules
- Manage subscriptions and rentals
- Track your earnings

For more technical details, see the
[DataProtector Sharing](https://beta.tools.docs.iex.ec/tools/dataProtector/dataProtectorSharing.html)
documentation.

<div class="solution-note-green">
    <p>You have one more step to complete the journey! and it's the easy one, let's go to the bonus chapter</p>
</div>
