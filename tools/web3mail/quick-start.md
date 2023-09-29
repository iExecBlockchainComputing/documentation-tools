# Quick start

## 1.  Sandbox

{% embed url="https://codesandbox.io/p/github/iExecBlockchainComputing/web3mail-sandbox/main?file=/src/web3mail/web3mail.tsx:1,1&preventWorkspaceRedirect=true" %}

## 2.  Getting started

### **2.1.  Prerequisites**

Before getting started, ensure that you have the following installed on your system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)\


### **2.2. Start a new project**

In this section, we will show you how to set up and call the different methods of the SDK in a React.js app.

You can reach the following open-source GitHub project, clone it and start from there.

You can find the project [here](https://github.com/iExecBlockchainComputing/web3Mail-sandbox).

### **2.3. Basic installation**

Install `web3MailSDK` .

With npm:

```
npm install @iexec/web3mail
```

Or

With yarn:

```
yarn add @iexec/web3mail
```

**This package is an ESM package. Your project needs to be ESM too.** [**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**.**

If you use it with Webpack, you need the latest Webpack version and ensure you configure it correctly for ESM.

### **2.4. Instantiate SDK**

{% tabs %}
{% tab title="Browser" %}
Instantiate the SDK in your front-end project:

#### 2.4.1. Basic Instantiation

```javascript
import { IExecWeb3mail } from "@iexec/web3mail";

const web3Provider = window.ethereum;
// instantiate
const web3mail = new IExecWeb3mail(web3Provider);
```
{% endtab %}

{% tab title="NodeJS" %}
Instantiate the SDK in your back-end project:

#### 2.4.1. Basic Instantiation

```javascript
import { IExecWeb3mail, getWeb3Provider } from "@iexec/web3mail";

const { PRIVATE_KEY } = process.env; 
// get web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);
// instantiate
const web3mail = new IExecWeb3mail(web3Provider);
```
{% endtab %}
{% endtabs %}
