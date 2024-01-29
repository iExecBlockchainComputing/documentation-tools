# Quick start

## 1.  Sandbox

{% embed url="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true" %}

## 2.  Getting started

### **2.1.  Prerequisites**

Before getting started, ensure that you have the following installed on your system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)


### **2.2. Start a new project**

In this section, we will show you how to set up and call the different methods of the SDK in a React.js app.

You can reach the following open-source GitHub project, clone it and start from there.

You can find the project [here](https://github.com/iExecBlockchainComputing/dataprotector-sandbox).

### **2.3. Basic installation**

Install `dataProtectorSDK` .

{% tabs %}
{% tab title="npm" %}
```
npm install @iexec/dataprotector
```
{% endtab %}

{% tab title="yarn" %}
```
yarn add @iexec/dataprotector
```
{% endtab %}

{% tab title="pnpm" %}
```
pnpm add @iexec/dataprotector
```
{% endtab %}

{% tab title="bun" %}
```
bun add @iexec/dataprotector
```
{% endtab %}
{% endtabs %}

**This package is an ESM package. Your project needs to be ESM too.** [**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**.**

If you use it with Webpack, you need the latest Webpack version and ensure you configure it correctly for ESM.

### **2.4. Instantiate SDK**

{% tabs %}
{% tab title="Browser" %}
Instantiate the SDK in your front-end project:

#### 2.4.1. Basic Instantiation

```javascript
import { IExecDataProtector } from "@iexec/dataprotector";

const web3Provider = window.ethereum;
// instantiate
const dataProtector = new IExecDataProtector(web3Provider);
```
{% endtab %}

{% tab title="NodeJS" %}
Instantiate the SDK in your back-end project:

#### 2.4.1. Basic Instantiation

```javascript
import { IExecDataProtector, getWeb3Provider } from "@iexec/dataprotector";

const { PRIVATE_KEY } = process.env; 
// get web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// instantiate
const dataProtector = new IExecDataProtector(web3Provider);
```
{% endtab %}
{% endtabs %}
