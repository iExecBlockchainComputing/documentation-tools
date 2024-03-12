# Getting Started

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/iexec-oracle-factory-wrapper/main?color=green)

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Start a new project

In this section, we will show you how to set up and call the different methods of the SDK in JS app.

You can reach the following open-source GitHub project, clone it and start from there.

You can find the project [here](https://github.com/iExecBlockchainComputing/iexec-oracle-factory-wrapper).

### Basic installation

Install `@iexec/iexec-oracle-factory-wrapper`.

::: code-group

```sh [npm]
npm install @iexec/iexec-oracle-factory-wrapper
```

```sh [pnpm]
pnpm add @iexec/iexec-oracle-factory-wrapper
```

```sh [yarn]
yarn add @iexec/iexec-oracle-factory-wrapper
```

```sh [burn]
bun add @iexec/iexec-oracle-factory-wrapper
```

:::

**This package is an ESM package. Your project needs to be ESM too.** [**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**.**

If you use it with Webpack, you need the latest Webpack version and ensure you configure it correctly for ESM.

### Instantiate SDK

Import and initialize the Oracle Factory SDK in your application.

::: code-group

```js [Browser]
import { IExecOracleFactory } from "@iexec/iexec-oracle-factory-wrapper";

const web3Provider = window.ethereum;
// instantiate
const factory = new IExecOracleFactory(web3Provider);
```

```js [NodeJS]
import { IExecOracleFactory, utils } from "@iexec/iexec-oracle-factory-wrapper";

const { PRIVATE_KEY } = process.env;
// get web3 provider from a private key
const signer = utils.getSignerFromPrivateKey(
  "https://bellecour.iex.ec",
  "your-private-key"
);
const factory = new IExecOracleFactory(signer);
```

:::
