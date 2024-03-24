# consumeProtectedData

Method to consume a protected data, ie. visualize it or download it.

## Usage

```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedDataAddress: '0x123abc...',
  });
```

## Pre-conditions

- You need to have an active rental for the protected data,
- OR to have an active subscription to the corresponding collection if the
  protected data is part of the collection subscription bundle.

## Parameters

```ts
import { type ConsumeProtectedDataParams } from '@iexec/dataprotector';
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to visualize.

```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedDataAddress: '0x123abc...', // [!code focus]
  });
```

### onStatusUpdate

`OnStatusUpdateFn<ConsumeProtectedDataStatuses> | undefined`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedDataAddress: '0x123abc...',
    onStatusUpdate: ({ title, isDone }) => { // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called four times:

1️⃣

```json
{
  "title": "CONSUME_PROTECTED_DATA",
  "isDone": false
}
```

2️⃣

```json
{
  "title": "CONSUME_PROTECTED_DATA",
  "isDone": true,
  "payload": {
    "txHash": "0xc9c2d5..."
  }
}
```

3️⃣

```json
{
  "title": "UPLOAD_RESULT_TO_IPFS",
  "isDone": false
}
```

4️⃣

```json
{
  "title": "UPLOAD_RESULT_TO_IPFS",
  "isDone": true
}
```

## Return value

```ts
import { type ConsumeProtectedDataResponse } from '@iexec/dataprotector';
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.

### dealId

`string`

Identifies the specific deal associated with this transaction.

### ipfsLink

`string`

Link to the IPFS location of the transaction-related data.

### privateKey

`CryptoKey`

Key used for decrypting the protected data.
