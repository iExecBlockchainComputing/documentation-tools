# Getting Started

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/dataprotector-sdk/main?color=green)

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

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

**This package is an ESM package. Your project needs to be ESM too.**
&nbsp;[**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

If you use it with **Webpack**, some polyfills will be needed. You can find a
minimal working project
[here](https://github.com/iExecBlockchainComputing/dataprotector-sdk/tree/main/demo/browser-webpack).

### Instantiate SDK

Depending on your project's requirements, you can instantiate the SDK using the
umbrella module for full functionality or opt for one of the submodules to
access specific sets of features.

#### Instantiate using the umbrella module

For projects requiring the full functionality of the SDK, including both core
and sharing functions.

::: code-group

```js [Browser]
import { IExecDataProtector } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate using the umbrella module for full functionality
const dataProtector = new IExecDataProtector(web3Provider);

const dataProtectorCore = dataProtector.core;
const dataProtectorSharing = dataProtector.sharing;
```

```js [NodeJS]
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const { PRIVATE_KEY } = process.env;
// Get Web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// Instantiate using the umbrella module for full functionality
const dataProtector = new IExecDataProtector(web3Provider);

const dataProtectorCore = dataProtector.core; // access to core methods
const dataProtectorSharing = dataProtector.sharing; // access to methods
```

:::

#### Instantiate only the `core` module

For projects focusing solely on core data protection functions.

::: code-group

```js [Browser]
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate only the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

```js [NodeJS]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const { PRIVATE_KEY } = process.env;
// Get Web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// Instantiate only the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

:::

#### Instantiate only the `sharing` module

For projects that need access management functions specifically.

::: code-group

```js [Browser]
import { IExecDataProtectorSharing } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate only the Sharing module
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
```

```js [NodeJS]
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const { PRIVATE_KEY } = process.env;
// Get Web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// Instantiate only the Sharing module
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
```

:::