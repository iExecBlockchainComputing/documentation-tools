---
description:
  Get started with Web3Telegram, a secure blockchain-based tool for sending
  Telegram messages. Install the SDK and integrate it with your Web3 project.
---

# Getting Started

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/web3telegram-sdk?color=green)](https://github.com/iExecBlockchainComputing/web3telegram-sdk)

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

::: code-group

```sh [npm]
npm install @iexec/web3telegram
```

```sh [yarn]
yarn add @iexec/web3telegram
```

```sh [pnpm]
pnpm add @iexec/web3telegram
```

```sh [bun]
bun add @iexec/web3telegram
```

:::

**This package is an ESM package. Your project needs to use ESM too.**
&nbsp;[**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

If you use it with **Webpack**, some polyfills will be needed. You will find
later a working project

### Instantiate SDK

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3telegram } from '@iexec/web3telegram';

const web3Provider = window.ethereum;
// instantiate
const web3telegram = new IExecWeb3telegram(web3Provider);
```

```ts twoslash [NodeJS]
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

// get web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');
// instantiate
const web3telegram = new IExecWeb3telegram(web3Provider);
```

:::

## Sandbox

<a href="https://codesandbox.io/p/github/iExecBlockchainComputing/web3-telegram-sandbox/main" target="_blank" rel="noreferrer" class="link-as-block">
  ⚡ &nbsp;Code Sandbox
</a>

Corresponding GitHub repository:

<a href="https://github.com/iExecBlockchainComputing/web3-telegram-sandbox" target="_blank" rel="noreferrer" class="link-as-block">
  🔎 &nbsp;GitHub repository sandbox
</a>
