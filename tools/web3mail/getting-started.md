---
description:
  Get started with the iExec Web3Mail SDK. Learn how to install, configure, and
  instantiate it with or without a Web3 provider to enable blockchain-based
  email communication.
---

# Getting Started

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/web3mail-sdk?color=green)](https://github.com/iExecBlockchainComputing/web3mail-sdk)

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

::: code-group

```sh [npm]
npm install @iexec/web3mail
```

```sh [yarn]
yarn add @iexec/web3mail
```

```sh [pnpm]
pnpm add @iexec/web3mail
```

```sh [bun]
bun add @iexec/web3mail
```

:::

**This package is an ESM package. Your project needs to use ESM too.**
&nbsp;[**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

If you use it with **Webpack**, some polyfills will be needed. You can find a
working project
[here](https://github.com/iExecBlockchainComputing/web3mail-sdk/tree/main/demo/browser-webpack).

### Instantiate with a Web3 provider

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
// instantiate
const web3mail = new IExecWeb3mail(web3Provider);
```

```ts twoslash [NodeJS]
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

// get web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');
// instantiate
const web3mail = new IExecWeb3mail(web3Provider);
```

:::

### Instantiate without a Web3 provider

For projects that only require read functions, you can instantiate the SDK
without a Web3 provider.

::: code-group

```ts twoslash [Browser]
import { IExecWeb3mail } from '@iexec/web3mail';

// instantiate
const web3mail = new IExecWeb3mail();
```

```ts twoslash [NodeJS]
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

// instantiate
const web3mail = new IExecWeb3mail();
```

:::

## Sandbox

<a href="https://codesandbox.io/p/github/iExecBlockchainComputing/web3mail-sandbox/main" target="_blank" rel="noreferrer" class="link-as-block">
  ⚡ &nbsp;Code Sandbox
</a>

Corresponding GitHub repository:

<a href="https://github.com/iExecBlockchainComputing/web3Mail-sandbox" target="_blank" rel="noreferrer" class="link-as-block">
  🔎 &nbsp;GitHub repository sandbox
</a>
