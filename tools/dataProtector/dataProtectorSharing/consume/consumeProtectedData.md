# consumeProtectedData

Method to consume a protected data, ie. visualize it or download it.

This method does a few things under the hood:

- Generate an RSA key pair and save it to indexedDB (if available)
- Push the public key to iExec SMS (Secret Management Service) (For more info,
  see
  [iExec Protocol documentation](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets#secret-management-service-sms))
- Wait for the consuming task to be executed by a worker. The iExec TEE dApp
  being executed is the one given with the `app` parameter. The iExec TEE dApp
  will get the protected data from IPFS, encrypt it with the public key
  generated in the first step, and re-upload it to IPFS.
- Retrieve the encrypted data from IPFS and decrypt it with the private key
  generated in the first step.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
  });
```

## Pre-conditions

You need to either have:

- an active rental for the protected data,
- an active subscription to the corresponding collection if the protected data
  is part of the collection subscription bundle.

## Parameters

```ts twoslash
import { type ConsumeProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address of the protected data you'd like to visualize.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...', // [!code focus]
    app: '0x456def...',
  });
```

### app {#app-param}

`AddressOrENS`

Address or ENS of the iExec TEE dApp that will be used to consume the protected
data. This iExec TEE dApp is the one that runs within an iExec worker.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...', // [!code focus]
  });
```

::: tip

For this `app` parameter you can use the following iExec TEE app:

```
0xF248000F0E99e9203FdBE509019f008F9c169705
```

For more details, see [Apps whitelist](../../advanced/appsWhitelist.md).

:::

::: tip

If you want to provide **your own TEE dApp**, you will need to create a
whitelist that contains your app.

For more details, see [Apps whitelist](../../advanced/appsWhitelist.md).

:::

### workerpool

`AddressOrENS | undefined`

Address or ENS of the workerpool.

_default_: `prod-v8-bellecour.main.pools.iexec.eth`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpool: 'prod-v8-bellecour.main.pools.iexec.eth', // [!code focus]
  });
```

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.

:::

### pemPublicKey

`string | undefined`

If you have previously called `consumeProtectedData()` and saved the returned
public key, you can reuse it in further calls.

Alternatively, you can generate a RSA keypair on your own.

If a public key is provided, its corresponding private key needs also to be
provided.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    pemPublicKey: '-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----', // [!code focus]
  });
```

### pemPrivateKey

`string | undefined`

If you have previously called `consumeProtectedData()` and saved the returned
private key, you can reuse it in further calls.

Alternatively, you can generate a RSA keypair on your own.

If a private key is provided, its corresponding public key needs also to be
provided.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    pemPrivateKey:
      '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----',
  });
```

### onStatusUpdate

`OnStatusUpdateFn<ConsumeProtectedDataStatuses> | undefined`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    onStatusUpdate: ({ title, isDone }) => { // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```
'FETCH_WORKERPOOL_ORDERBOOK'
'PUSH_ENCRYPTION_KEY'
'CONSUME_ORDER_REQUESTED'
'CONSUME_TASK'
'CONSUME_RESULT_DOWNLOAD'
'CONSUME_RESULT_DECRYPT'
```

## Return value

```ts twoslash
import { type ConsumeProtectedDataResponse } from '@iexec/dataprotector';
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.

### dealId

`string`

Identifies the specific deal associated with this transaction.

### taskId

`string`

Identifies the specific task associated with the deal.

### result

`ArrayBuffer`

The actual content of the protected file.
