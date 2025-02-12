# 🛠️ Build and deploy your first iApp

> Reading time 🕒 10 mins

<div class="hero">
  <div class="hero-content">
    <h2>Time to build!</h2>
    <p>Let's build an iApp that can process protected data in a secure environment.</p>
  </div>
</div>

<div class="solution-note purple">
  <p>An iApp runs in a Trusted Execution Environment (TEE), it can process data in a secure environment.</p>
</div>

This guide will help you set up, test, deploy and run your iApp using the
[`iapp-cli`](https://github.com/iExecBlockchainComputing/iapp/tree/main/cli)
tool. Follow the instructions carefully for a smooth development experience.

## 📋 Prerequisites

Before getting started, ensure you have the following:

<div class="requirements-list">
  <div class="requirement-item">
    <div class="requirement-title">📦 Node.js v20+</div>
    <a target="_blank" href="https://nodejs.org/en/">Download →</a>
  </div>

  <div class="requirement-item">
    <div class="requirement-title">📦 npm</div>
    <a target="_blank" href="https://www.npmjs.com/get-npm">Download →</a>
  </div>
  
  <div class="requirement-item">
    <div class="requirement-title">🐳 Docker</div>
    <a target="_blank" href="https://www.docker.com/">Download →</a>
  </div>

  <div class="requirement-item">
    <div class="requirement-title">🐳 Docker Hub Account</div>
    <a target="_blank" href="https://hub.docker.com/">Sign Up →</a>
  </div>
</div>

<div class="solution-note purple">
  <p>Don't worry! All secrets used in this tutorial stay on your machine and aren’t shared with anyone. You’ll only need them to run the <code>iApp run</code> command.</p>
</div>

## 💾 Installation (win / mac / linux)

First, you need to install the `iapp` package. Open your terminal and run:

```sh
npm i -g @iexec/iapp
```

You can check if the installation was successful by running:

```sh
#checking the version
iapp --version

#checking the available commands
iapp --help
```

## 🛠️ Initialize Framework

To initialize the working directory for developing your iApp, use the
`iapp init` command. This command sets up the necessary project structure and
files.

```sh
mkdir iexec-test
cd iexec-test
iapp init
```

You will be prompted with the following message:

```sh
  ___    _    ____  ____
 |_ _|  / \  |  _ \|  _ \
  | |  / _ \ | |_) | |_) |
  | | / ___ \|  __/|  __/
 |___/_/   \_\_|   |_|

✔ What's your project name? (A folder with this name will be created) ...
? What kind of project do you want to init?
  > Hello World - iapp quick start
    Advanced
```

<div class="process-steps">
  <div class="step">
    <span class="step-number">1</span>
    <span>Pick a name for your project</span>
  </div>
</div>

```sh
✔ What's your project name? (A folder with this name will be created) ...

```

<div class="process-steps">
  <div class="step">
    <span class="step-number">2</span>
    <span>Select the type of project you want to init</span>
  </div>
</div>

<div class="solution-note">
  <p>We recommend selecting <span class="highlight">"Hello World"</span> to quickly discover how iApp works! use <span class="highlight">advanced</span> only if you are familiar with iExec.</p>
</div>

```sh
✔ JavaScript app setup complete.
✔ Generated ethereum wallet (0xD4A28d.........................)

```

- A JavaScript iApp project is setup

- An ethereum wallet has been created (we use it to sign the iApp creation
  onchain)

- A new folder has been created, it contains a very simple Node.js application,
  with the main code being located in `src/app.js`

## 🧪 Test Your iApp

To test your iApp, run `iapp test` command

```sh
iapp test
```

It uses your local Node.js to execute the `app.js` file.

<div class="solution-note">
  <p>- If you have <code>Error: Docker daemon is not accessible</code> Make sure Docker is installed and running.</p>
  <br>
  <p>- If you have <code>Error: Failed to locate iApp project root</code> error:  Ensure you are in your project folder before proceeding.</p>
</div>

You can see the output of the computation by saying yes to the question:

```sh
? Would you like to see the result? (View ./output/) (Y/n)
```

### 🧩 Using Arguments

You can pass arguments to your iApp using the `--args` option. This allows you
to provide necessary inputs during runtime (you can use your name for example).

```sh
iapp test --args your-name
```

### 🔒 Using Protected Data

You can pass a protectedData that you are authorized to process to your iApp
using the `--protectedData` option.

Since nothing is actually deployed during testing, we use Protected Data mocks
to test the app. Using `--protectedData` default will provide your app with the
default protectedData mock.

```sh
iapp test --protectedData default
```

<div class="solution-note purple">
  <p>You can check how args and protectedData are processed in <code> src/app.js</code></p>
</div>

## 🚀 Deploy Your iApp

Deploy your iApp on the iExec protocol.

<div class="process-steps">
  <div class="step">
    <span class="step-number">1</span>
    <span>Go to <a href="https://hub.docker.com/settings/security" target="_blank">Docker Hub Security Settings</a></span>
  </div>
  <div class="step">
    <span class="step-number">2</span>
    <span>Click <a href="https://app.docker.com/settings/personal-access-tokens" target="_blank">"Personal access tokens"</a> → "Generate new token"</span>
  </div>
  <div class="step">
    <span class="step-number">3</span>
    <span>Name it "Test iExec iApp CLI" (expiration date is optional)</span>
  </div>
  <div class="step">
    <span class="step-number">4</span>
    <span>Select "Read & Write" permissions</span>
  </div>
  <div class="step">
    <span class="step-number">5</span>
    <span>Save your token securely and your username</span>
  </div>
</div>

Once you have your token, you can deploy your iApp using the following command:

```sh
# you need your username and the access token (it can take a few minutes to deploy)
iapp deploy
```

<div class="solution-note purple">
  <p>📝 Make sure to save your <span class="highlight">iApp address</span> after deployment - you'll need it later!</p>
  <p>You can find your iApp address in the <code>iexec-app.json</code> file in your project folder.</p>
  <br>
  <p>⚠️  If you encounter issues during deployment, make sure Docker's BuildKit feature is enabled and supports AMD64 architecture:</p>

```sh
docker buildx inspect --bootstrap | grep -i platforms
```

  <p>The output should include <code>linux/amd64</code> in the list of supported platforms. If not, update to the latest Docker Desktop version which includes these requirements.</p>
</div>

## 🏃 Run Your iApp

Now you can run your application:

```sh
iapp run <my-iapp-address>
```

To sum up the process, we take the **iApp** and wrap it in the iExec framework,
allowing it to run securely in a **Trusted Execution Environment (TEE)** for
**confidential computing**. If you want to explore further, you can check the
protocol documentation [here](https://protocol.docs.iex.ec/).

<div class="solution-note green">
  <p>🎉 Congratulations! You've successfully deployed and run your first iApp on iExec. This is a significant milestone - your application is now ready to securely process confidential data in a trusted environment.</p>
</div>

## 🎯 Key takeaways

<div class="takeaways-list">
  <div class="takeaway-item">
    <span class="takeaway-icon">🔒</span>
    <div class="takeaway-content">
      <strong>iApps:</strong> Special applications that run in TEEs to process protected data
    </div>
  </div>
  <div class="takeaway-item">
    <span class="takeaway-icon">🛠️</span>
    <div class="takeaway-content">
      <strong>iApp CLI:</strong> Command-line tool for building, testing, and deploying iApps
    </div>
  </div>
  <div class="takeaway-item">
    <span class="takeaway-icon">🔐</span>
    <div class="takeaway-content">
      <strong>Protected Data:</strong> Can be integrated and processed securely in your iApp
    </div>
  </div>
  <div class="takeaway-item">
    <span class="takeaway-icon">⛓️</span>
    <div class="takeaway-content">
      <strong>Deployment:</strong> Apps are deployed on iExec protocol to run in trusted environments
    </div>
  </div>
</div>

<div class="solution-note green">
  <p>Next up: Alice will learn how to authorize the iApp and Bob to access and use her protected data!  🚀</p>
</div>
