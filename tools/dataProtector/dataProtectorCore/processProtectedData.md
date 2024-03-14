# processProtectedData

Allows processing a protected dataset through use of a specified iExec
application.

> [!IMPORTANT] You must ensure this application has authorization to use the
> `protectedData`. You may grant this permission using the
> [`grantAccess`](./grantAccess.md) method.

## Usage

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0xC2E...',
  maxPrice: 10,
  args: 'arg1 arg2',
  inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
  secrets: ['secret1', 'secret2'],
});
```

## Parameters

```ts
import { type ProcessProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

The ETH address or Ethereum Name Service (ENS) reference for the protected data
you wish the `app` to process.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...', // [!code focus]
  app: '0xC2E...',
});
```

### app

`AddressOrENS`

The ETH address or Ethereum Name Service (ENS) address for the iExec application
to process the protected data.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0xC2E...', // [!code focus]
});
```

### maxPrice

`number | undefined`

The maximum price (in nRLC) that a requester is willing to pay for each task
related to processing the protected data. It is the sum of the application
price, dataset price, and workerpool price per task.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0xC2E...',
  maxPrice: 10, // [!code focus]
});
```

### args

`string | undefined`

Set of execution arguments for the application.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0xC2E...',
  args: 'arg1 arg2', // [!code focus]
});
```

::: danger

Do not use this to provide any sensitive information to the
application. All arguments passed this way are visible in plain text using the
[iExec blockchain explorer](https://explorer.iex.ec).

:::

### inputFiles

`string[] | undefined`

A set of URLs representing the input files required for application execution.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0xC2E...',
  inputFiles: ['https://example.com/file1', 'https://example.com/file2'], // [!code focus]
});
```

### secrets

`Record<number, string> | undefined`

A set of requester secrets necessary for the application's execution. This is
represented as a mapping of numerical identifiers to corresponding secrets
stored in the secrets manager needed for the application's execution.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0xC2E...',
  maxPrice: 10,
  secrets: ['secret1', 'secret2'], // [!code focus]
});
```

### workerpool

`AddressOrENS | any | undefined`

The ETH address or Ethereum Name Service (ENS) address for the iExec workerpool.
It's the confidential computer on which the iExec application will run.

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.
If no specific workerpool address is specified, computations will automatically
be directed to this default workerpool.

:::

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0xC2E...',
  workerpool: '0xA5d...', // [!code focus]
});
```

## Return value

```ts
import { type ProcessProtectedDataParams } from '@iexec/dataprotector';
```

This method returns a single value as the result, a `taskId`.

### taskId

`string`

A unique identifier associated with a task currently running on the iExec
Bellecour side chain. You may monitor task execution with the
[iExec blockchain explorer](https://explorer.iex.ec).
