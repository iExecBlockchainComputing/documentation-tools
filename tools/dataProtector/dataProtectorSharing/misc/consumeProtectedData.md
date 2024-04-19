# consumeProtectedData

Method to consume a protected data, ie. visualize it or download it.

This method does a few things under the hood:

- Generate an RSA key pair and save it to indexedDB (if available)
- Push the public key to iExec SMS (Secret Management Service) (For more info,
  see
  [iExec Protocol documentation](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets#secret-management-service-sms))
- Wait for the consuming task to be executed by a worker. The TEE app being
  executed is the one given with the `app` parameter. The TEE app will get the
  protected data from IPFS, encrypt it with the public key generated in the
  first step, and re-upload it to IPFS.
- Retrieve the encrypted data from IPFS and decrypt it with the private key
  generated in the first step.

## Usage

```js
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

```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...', // [!code focus]
    app: '0x456def...',
  });
```

### app

`AddressOrENS`

Address or ENS of the app that will be used to consume the protected data. This
app is the one that runs within an iExec worker.

```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...', // [!code focus]
  });
```

For this `app` parameter you can use the following iExec provided app:
`0x82e41e1b594ccf69b0cfda25637eddc4e6d4e0fc`.

::: warning

This app is specific to our Content Creator usecase-demo. It expects a protected
data that contains a property named `file`:

```json
{
  "file": "<ArrayBuffer>"
}
```

You are free to use this iExec app but if the given protected data has a
different schema, it won't work. Moreover, the app belongs to iExec
`addOnlyAppWhitelist` deployed at the address
`0x1099844c74f6a2be20dbe1aa2afb3a1d29421aed`. So if you want to use this app,
the protected data should be linked to the iExec `addOnlyAppWhitelist`.
Otherwise you must choose an app that belongs to the `addOnlyAppWhitelist`
linked to this protected data.

:::

::: warning

This app needs to be part of the `addOnlyAppWhitelist` given when calling
[addToCollection()](../collection/addToCollection.md#addOnlyAppWhitelist)

:::

### workerpool

`AddressOrENS | undefined`

Address or ENS of the workerpool.

_default_: `prod-v8-bellecour.main.pools.iexec.eth`

```js
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

### onStatusUpdate

`OnStatusUpdateFn<ConsumeProtectedDataStatuses> | undefined`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    onStatusUpdate: ({ title, isDone }) => { // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```
<!-- prettier-ignore-end -->

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

### fileAsBase64

`string`

The actual content of the protected file, encoded in base64.  
The file is expected to be found in a `file` property inside the protected data.
