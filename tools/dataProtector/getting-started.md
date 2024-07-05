# Getting Started

[![GitHub package.json version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FiExecBlockchainComputing%2Fdataprotector-sdk%2Fv2%2Fpackages%2Fsdk%2Fpackage.json&query=%24.version&label=version&color=green)](https://github.com/iExecBlockchainComputing/dataprotector-sdk/tree/main/packages/sdk)

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

::: code-group

```sh [npm]
npm install @iexec/dataprotector@beta --save-exact
```

```sh [yarn]
yarn add @iexec/dataprotector@beta
```

```sh [pnpm]
pnpm add @iexec/dataprotector@beta
```

```sh [bun]
bun add @iexec/dataprotector@beta
```

:::

**This package is an ESM package. Your project needs to use ESM too.**
&nbsp;[**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

If you use it with **Webpack**, some polyfills will be needed. You can find a
minimal working project
[here](https://github.com/iExecBlockchainComputing/dataprotector-sdk/tree/115b797cf62dcff0f41e2ba783405d5083d78922/packages/demo/browser-webpack).

### Instantiate SDK

Depending on your project's requirements, you can instantiate the SDK using the
umbrella module for full functionality or opt for one of the submodules to
access specific sets of features.

#### Instantiate using the umbrella module

For projects requiring the full functionality of the SDK, including both core
and sharing functions.

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---

import { IExecDataProtector } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate using the umbrella module for full functionality
const dataProtector = new IExecDataProtector(web3Provider);

const dataProtectorCore = dataProtector.core;
const dataProtectorSharing = dataProtector.sharing;
```

```ts twoslash [NodeJS]
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

// Get Web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');

// Instantiate using the umbrella module for full functionality
const dataProtector = new IExecDataProtector(web3Provider);

const dataProtectorCore = dataProtector.core; // access to core methods
const dataProtectorSharing = dataProtector.sharing; // access to methods
```

:::

#### Instantiate only the `core` module

For projects focusing solely on core data protection functions.

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---

import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate only the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

```ts twoslash [NodeJS]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

// Get Web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');

// Instantiate only the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

:::

#### Instantiate only the `sharing` module

For projects that need access management functions specifically.

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---

import { IExecDataProtectorSharing } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate only the Sharing module
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
```

```ts twoslash [NodeJS]
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

// Get Web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');

// Instantiate only the Sharing module
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
```

:::

#### Instantiate without a Web3 provider

For projects that only require read functions, you can instantiate the SDK
without a Web3 provider.

::: code-group

```ts twoslash [Singleton Modules]
import {
  IExecDataProtectorSharing,
  IExecDataProtectorCore,
} from '@iexec/dataprotector';

// Instantiate only the Core module for read-only core methods
const dataProtectorCore = new IExecDataProtectorCore();
// Instantiate only the Sharing module for read-only sharing methods
const dataProtectorSharing = new IExecDataProtectorSharing();
```

```ts twoslash [Umbrella Module]
import { IExecDataProtector } from '@iexec/dataprotector';

// Instantiate using the umbrella module for read-only functions
const dataProtector = new IExecDataProtector();

// Access to read-only core methods
const dataProtectorCore = dataProtector.core;
// Access to read-only sharing methods
const dataProtectorSharing = dataProtector.sharing;
```

:::

#### Advanced configuration

To add optional parameters, see
[advanced configuration](./advanced/advanced-configuration.md).
