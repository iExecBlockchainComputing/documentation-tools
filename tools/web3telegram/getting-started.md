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

## Sandbox

<a href="https://codesandbox.io/p/github/iExecBlockchainComputing/web3mail-sandbox/main?file=/src/web3mail/web3mail.tsx:1,1&preventWorkspaceRedirect=true" target="_blank" rel="noreferrer" class="link-as-block">
 ⚡Work in progress⚡ 
  <!-- ⚡&nbsp;Code Sandbox  -->
</a>

Corresponding GitHub repository:

<a href="https://github.com/iExecBlockchainComputing/web3Mail-sandbox" target="_blank" rel="noreferrer" class="link-as-block">
  <!-- 🔎 &nbsp;GitHub repository sandbox  -->
 🔎Work in progress🔎
</a>
