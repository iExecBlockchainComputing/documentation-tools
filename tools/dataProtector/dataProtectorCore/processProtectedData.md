# processProtectedData

Allows processing a protected dataset through use of a specified iExec
application.

> [!IMPORTANT]
>
> You must ensure this application has authorization to use the `protectedData`.
> You may grant this permission using the [`grantAccess`](./grantAccess.md)
> method.

## Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    maxPrice: 10,
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: {
      1: 'secret1',
      2: 'secret2',
    },
  });
```

## Parameters

```ts twoslash
import { type ProcessProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData <RequiredYesBadge />

**Type:** `AddressOrENS`

The ETH address or Ethereum Name Service (ENS) reference for the protected data
you wish the `app` to process.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...', // [!code focus]
    app: '0x456def...',
  });
```

### app <RequiredYesBadge /> {#app-param}

**Type:** `AddressOrENS`

The ETH address or Ethereum Name Service (ENS) address for the iExec application
to process the protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...', // [!code focus]
  });
```

### userWhitelist

**Type:** `Address | undefined`

If access to the protected data is granted to a group of users via a whitelist
contract, you must use the userWhitelist parameter. The value should be the
whitelist contract address that has access to the protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    userWhitelist: '0x656def...', // [!code focus]
  });
```

### maxPrice

**Type:** `number`

The maximum price (in nRLC) that a requester is willing to pay for each task
related to processing the protected data. It is the sum of the application
price, dataset price, and workerpool price per task.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    maxPrice: 10, // [!code focus]
  });
```

### args

**Type:** `string`

Set of execution arguments for the application.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    args: 'arg1 arg2', // [!code focus]
  });
```

::: danger

Do not use this to provide any sensitive information to the application. All
arguments passed this way are visible in plain text using the
[iExec blockchain explorer](https://explorer.iex.ec).

:::

### inputFiles

**Type:** `string[]`

A set of URLs representing the input files required for application execution.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'], // [!code focus]
  });
```

### secrets

**Type:** `Record<number, string>`

A set of requester secrets necessary for the application's execution. This is
represented as a mapping of numerical identifiers to corresponding secrets
stored in the secrets manager needed for the application's execution.

Secrets are accessible during the application's execution as environment
variables. For more details, see
[Access requester secrets](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets/requester-secrets).

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  maxPrice: 10,
  secrets: { // [!code focus]
    1: 'secret1', // [!code focus]
    2: 'secret2', // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

### workerpool

**Type:** `AddressOrENS | 'any'`  
**Default:** `prod-v8-bellecour.main.pools.iexec.eth`

The ETH address or Ethereum Name Service (ENS) address for the iExec workerpool.
It's the confidential computer on which the iExec application will run.

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.

If you don't specify a workerpool preference,
0x0000000000000000000000000000000000000000 represents any randomly available
workerpool.

:::

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpool: '0xa5de76...', // [!code focus]
  });
```

### onStatusUpdate

**Type:** `OnStatusUpdateFn<ProcessProtectedDataStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'FETCH_PROTECTED_DATA_ORDERBOOK';
'FETCH_APP_ORDERBOOK';
'FETCH_WORKERPOOL_ORDERBOOK';
'PUSH_REQUESTER_SECRET';
'REQUEST_TO_PROCESS_PROTECTED_DATA';
'CONSUME_TASK';
'CONSUME_RESULT_DOWNLOAD';
'CONSUME_RESULT_DECRYPT';
```

Once with `isDone: false`, and then with `isDone: true`

## Return value

```ts twoslash
import { type ProcessProtectedDataResponse } from '@iexec/dataprotector';
```

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).

### dealId

`string`

Identifies the specific deal associated with this transaction.

### taskId

`string`

A unique identifier associated with a task currently running on the iExec
Bellecour side chain. You may monitor task execution with the
[iExec blockchain explorer](https://explorer.iex.ec).

### result

`ArrayBuffer`

The actual content of the protected file.
