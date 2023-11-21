# Quick start

## 1.  Sandbox

[https://oracle-factory.iex.ec/gallery](https://oracle-factory.iex.ec/gallery)

## 2.  Getting started

### **2.1.  Prerequisites**

Before getting started, ensure that you have the following installed on your system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)\


### **2.2. Start a new project**

In this section, we will show you how to set up and call the different methods of the SDK in a React.js app.

You can reach the following open-source GitHub project, clone it and start from there.



### **2.3. Basic installation**

Install `web3MailSDK` .

With npm:

```
npm install @iexec/iexec-oracle-factory-wrapper
```

Or

With yarn:

```
yarn add @iexec/iexec-oracle-factory-wrapper
```

**This package is an ESM package. Your project needs to be ESM too.** [**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**.**

If you use it with Webpack, you need the latest Webpack version and ensure you configure it correctly for ESM.

### **2.4. Instantiate SDK**

{% tabs %}
{% tab title="Browser" %}
Instantiate the SDK in your front-end project:

#### 2.4.1. Basic Instantiation

```javascript
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';

const getOracleFactory = async () => {
  if (!window.ethereum) {
    throw Error('Need to install MetaMask');
  }
  try {
    await window.ethereum.enable();
  } catch (error) {
    throw Error('User denied access', error);
  }
  return new IExecOracleFactory(window.ethereum);
};
```
{% endtab %}

{% tab title="NodeJS" %}
Instantiate the SDK in your back-end project:

#### 2.4.1. Basic Instantiation

```javascript
const {
  IExecOracleFactory,
  utils,
} = require('@iexec/iexec-oracle-factory-wrapper');

const signer = utils.getSignerFromPrivateKey('goerli', process.env.PRIVATE_KEY);
const factory = new IExecOracleFactory(signer);
```
{% endtab %}
{% endtabs %}
