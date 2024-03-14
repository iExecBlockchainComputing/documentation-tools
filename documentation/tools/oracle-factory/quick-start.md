# Quick Start

## 1. Getting started

### **1.1. Prerequisites**

Before getting started, ensure that you have the following installed on your system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### **1.2. Start a new project**

In this section, we will show you how to set up and call the different methods of the SDK in JS app.

You can reach the following open-source GitHub project, clone it and start from there.

You can find the project [here](https://github.com/iExecBlockchainComputing/iexec-oracle-factory-wrapper).

### **1.3. Basic installation**

Install `@iexec/iexec-oracle-factory-wrapper`.

{% tabs %}
{% tab title="npm" %}

```sh
npm install @iexec/iexec-oracle-factory-wrapper
```

{% endtab %}

{% tab title="yarn" %}

```sh
yarn add @iexec/iexec-oracle-factory-wrapper
```

{% endtab %}

{% tab title="pnpm" %}

```sh
pnpm add @iexec/iexec-oracle-factory-wrapper
```

{% endtab %}

{% tab title="bun" %}

```sh
bun add @iexec/iexec-oracle-factory-wrapper
```

{% endtab %}
{% endtabs %}

**This package is an ESM package. Your project needs to be ESM too.** [**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**.**

If you use it with Webpack, you need the latest Webpack version and ensure you configure it correctly for ESM.

### **1.4. Instantiate SDK**

Import and initialize the Oracle Factory SDK in your application.

{% tabs %}
{% tab title="Browser" %}
Instantiate the SDK in your front-end project:

#### 1.4.1. Basic Instantiation

```javascript
import { IExecOracleFactory } from "@iexec/iexec-oracle-factory-wrapper";

const web3Provider = window.ethereum;
// instantiate
const factory = new IExecOracleFactory(web3Provider);
```

{% endtab %}

{% tab title="NodeJS" %}
Instantiate the SDK in your back-end project:

#### 1.4.1. Basic Instantiation

```javascript
import { IExecOracleFactory, utils } from "@iexec/iexec-oracle-factory-wrapper";

const { PRIVATE_KEY } = process.env;
// get web3 provider from a private key
const signer = utils.getSignerFromPrivateKey(
  "https://bellecour.iex.ec",
  "your-private-key"
);
const factory = new IExecOracleFactory(signer);
```

{% endtab %}
{% endtabs %}

### **1.5. Instantiate Only IExecOracleReader**

Import and initialize the IExecOracleReader from the Oracle Factory SDK in your application.

{% tabs %}
{% tab title="Browser" %}
Instantiate the SDK in your front-end project:

#### 1.5.1. Basic Instantiation

```javascript
import { IExecOracleReader } from '@iexec/iexec-oracle-factory-wrapper';

const BELLECOUR_BLOCKCHAIN_ENDPOINT = 'https://bellecour.iex.ec';
// instantiate
const bellecourBlockchainReader = new IExecOracleReader(BELLECOUR_BLOCKCHAIN_ENDPOINT);
```

{% endtab %}

{% tab title="NodeJS" %}
Instantiate the IExecOracleReader from the Oracle Factory SDK in your back-end project:

#### 1.5.1. Basic Instantiation

```javascript
import { IExecOracleReader } from '@iexec/iexec-oracle-factory-wrapper';

const BELLECOUR_BLOCKCHAIN_ENDPOINT = 'https://bellecour.iex.ec';
// instantiate
const bellecourBlockchainReader = new IExecOracleReader(BELLECOUR_BLOCKCHAIN_ENDPOINT);
```

{% endtab %}
{% endtabs %}
