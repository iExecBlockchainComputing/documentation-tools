---
description:
  Consume protected data in iExec by visualizing or downloading it. This method
  involves generating RSA keys, interacting with iExec's Secret Management
  Service, and securely retrieving encrypted data from IPFS.
---

<script setup>
import { Icon } from '@iconify/vue';
</script>

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

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

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

### app <RequiredBadge /> {#app-param}

**Type:** `AddressOrENS`

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

For this `app` parameter you can use the "Protected data delivery TEE dApp":

```
0x1cb7D4F3FFa203F211e57357D759321C6CE49921
```

<div style="display: inline-block; vertical-align: text-top; margin-top: -1px; margin-right: 5px;">
  <Icon icon="mdi:warning-box" height="20" />
</div>Please note: This application can only be used <strong>within the
dataProtectorSharing module</strong>, as it is owned by the DataProtector Sharing smart contract.

For more details, see [Apps whitelist](../../advanced/apps-whitelist).

:::

::: tip

If you want to provide **your own TEE dApp**, you will need to create a
whitelist that contains your app.

For more details, see [Apps whitelist](../../advanced/apps-whitelist).

:::

### path <OptionalBadge />

**Type:** `string`

Under the hood, a protected data is a zip file. With this `path` parameter, you
can specify the file you're interested in. The zip file will be uncompressed for
you, and only the desired file will be given as the `result`.

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
    path: 'my-content', // [!code focus]
  });
```

### workerpool <OptionalBadge />

**Type:** `AddressOrENS`  
**Default:** `prod-v8-bellecour.main.pools.iexec.eth`

Address or ENS of the workerpool.

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

### maxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

The maximum price (in nRLC) that a requester is willing to pay for each task
related to consuming the protected data. It is the sum of the application price,
dataset price, and workerpool price per task.

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
    maxPrice: 10, // [!code focus]
  });
```

### pemPublicKey <OptionalBadge />

**Type:** `string`

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

### pemPrivateKey <OptionalBadge />

**Type:** `string`

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
      '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----', // [!code focus]
  });
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<ConsumeProtectedDataStatuses>`

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

```ts
'FETCH_WORKERPOOL_ORDERBOOK';
'PUSH_ENCRYPTION_KEY';
'CONSUME_ORDER_REQUESTED';
'CONSUME_TASK';
'CONSUME_RESULT_DOWNLOAD';
'CONSUME_RESULT_DECRYPT';
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
