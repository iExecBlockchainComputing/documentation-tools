---
description:
  Learn how to integrate Oracle Factory into project with the IExec Oracle
  Factory SDK. Set up your environment, install dependencies, and instantiate
  the SDK to start creating and managing decentralized oracles.
---

# Getting Started

[![GitHub package.json version](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/iexec-oracle-factory-wrapper?color=green)](https://github.com/iExecBlockchainComputing/iexec-oracle-factory-wrapper)

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Start a new project

In this section, we will show you how to set up and call the different methods
of the SDK in JS app.

You can reach the following open-source GitHub project, clone it and start from
there.

You can find the project
[here](https://github.com/iExecBlockchainComputing/iexec-oracle-factory-wrapper).

### Installation

::: code-group

```sh [npm]
npm install @iexec/iexec-oracle-factory-wrapper
```

```sh [yarn]
yarn add @iexec/iexec-oracle-factory-wrapper
```

```sh [pnpm]
pnpm add @iexec/iexec-oracle-factory-wrapper
```

```sh [burn]
bun add @iexec/iexec-oracle-factory-wrapper
```

:::

**This package is an ESM package. Your project needs to use ESM too.**
[**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)**.**

When deployed with WebPack, the Web3Mail tool requires WebPack version 5 or
greater. You can refer to our
[sample WebPack project](https://github.com/iExecBlockchainComputing/web3mail-sdk/tree/main/demo/browser-webpack)
for more information.

### Instantiate SDK

Import and initialize the Oracle Factory SDK in your application.

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';

const web3Provider = window.ethereum;
// instantiate
const factory = new IExecOracleFactory(web3Provider);
```

```ts twoslash [NodeJS]
import { IExecOracleFactory, utils } from '@iexec/iexec-oracle-factory-wrapper';

const { PRIVATE_KEY } = process.env;
// get web3 provider from a private key
const signer = utils.getSignerFromPrivateKey(
  'https://bellecour.iex.ec',
  'your-private-key'
);
const factory = new IExecOracleFactory(signer);
```

:::

### Instantiate only `IExecOracleReader`

Import and initialize the `IExecOracleReader` from the Oracle Factory SDK in
your application.

::: code-group

```ts twoslash [Browser]
import { IExecOracleReader } from '@iexec/iexec-oracle-factory-wrapper';

// instantiate
const mainnetBlockchainReader = new IExecOracleReader('mainnet');
```

```ts twoslash [NodeJS]
import { IExecOracleReader } from '@iexec/iexec-oracle-factory-wrapper';

// instantiate
const mainnetBlockchainReader = new IExecOracleReader('mainnet');
```

:::

::: tip

You can initialize the `IExecOracleReader` with the `blockchain name` or the
`chain id` or even your custom blockchain endpoint.

:::

Supported blockchains:

| blockchain name | chainID |
| --------------- | ------- |
| mainnet         | 1       |
| bellecour       | 134     |
| polygon         | 137     |

## Sandbox

<a href="https://codesandbox.io/p/github/iExecBlockchainComputing/oracle-factory-sandbox/main" target="_blank" rel="noreferrer" class="link-as-block">
  ⚡ &nbsp;Code Sandbox
</a>

Corresponding GitHub repository:

<a href="https://github.com/iExecBlockchainComputing/oracle-factory-sandbox" target="_blank" rel="noreferrer" class="link-as-block">
  🔎 &nbsp;GitHub repository sandbox
</a>
