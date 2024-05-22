# DataProtector Deserializer

If you want to build your own iDapp (iExec TEE Dapp), you may need to access
protected data that your wallet and iDapp are authorized to use. To achieve
this, you must deserialize the content of the protected data with the expected
data schema.

To simplify this process, you can use our lightweight utility package,
`@iexec/dataprotector-deserializer`, in your iDapp. This package streamlines the
deserialization of protected data, making it easy for you to access and utilize
the information securely.

## Overview

This deserializer is built on the
[Borsch technical specification](https://borsh.io/). We developed this JavaScript
library to simplify deserialization in your iDapp built with JavaScript.

::: warning

If you want to build your iDapp in another language, you should follow the Borsch
serialization specification and reimplement it in your chosen language such as
Python, Rust, Go, etc.

:::

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 14 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

::: code-group

```sh [npm]
npm install @iexec/dataprotector-deserializer
```

```sh [yarn]
yarn add @iexec/dataprotector-deserializer
```

```sh [pnpm]
pnpm add @iexec/dataprotector-deserializer
```

```sh [bun]
bun add @iexec/dataprotector-deserializer
```

:::

### Instantiate SDK

```ts twoslash [NodeJS]
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
```
