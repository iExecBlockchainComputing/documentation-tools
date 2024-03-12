# Getting Started

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/dataprotector-sdk/develop?filename=packages%2Fsdk%2Fpackage.json&color=green)

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Start a new project

In this section, we will show you how to set up and call the different methods of the SDK in a React.js app.

You can reach the following open-source GitHub project, clone it and start from there.

You can find the project [here](https://github.com/iExecBlockchainComputing/dataprotector-sandbox).

### Basic installation

Install `dataProtectorSDK` .

::: code-group

```sh [npm]
npm install @iexec/dataprotector
```

```sh [pnpm]
yarn add @iexec/dataprotector
```

```sh [yarn]
pnpm add @iexec/dataprotector
```

```sh [bun]
bun add @iexec/dataprotector
```

:::

**This package is an ESM package. Your project needs to be ESM too.** [**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**.**

If you use it with Webpack, you need the latest Webpack version and ensure you configure it correctly for ESM.

### Instantiate SDK

::: code-group

```js [Browser]
import { IExecDataProtectorCore } from "@iexec/dataprotector";

const web3Provider = window.ethereum;
// instantiate
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

```js [NodeJS]
import { IExecDataProtectorCore, getWeb3Provider } from "@iexec/dataprotector";

const { PRIVATE_KEY } = process.env;
// get web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// instantiate
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

:::

## Sandbox

<CodeSandbox src="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true" />
