# consumeProtectedData

Method to consume a protected data, ie. visualize it or download it.

For this method to be successful, you need to either rent the protected data or have a
subscription to the corresponding collection.

## Usage

Input parameters type: `ConsumeProtectedDataParams`

```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedDataAddress: "0x123...",
  });
```

## Parameters

```js
import { type ConsumeProtectedDataParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to visualize.

```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedDataAddress: "0x123...", // [!code focus]
  });
```

### onStatusUpdate

`OnStatusUpdateFn<'CONSUME_PROTECTED_DATA' | 'UPLOAD_RESULT_TO_IPFS'> | undefined`

Callback function to be notified at intermediate steps.

```js
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedDataAddress: "0x123abc...",
    onStatusUpdate: ({ title, isDone }) => {
      // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```

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
  "isDone": true
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

```js
import { type ConsumeProtectedDataResponse } from "@iexec/dataprotector";
```

TODO: To be completed.

```json
{
  "success": true,
  "txHash": "",
  "dealId": "",
  "ipfsLink": "",
  "privateKey": ""
}
```

## Error

## Possible errors

```

This protected data does not exist in the subgraph.

```

```

This protected data is not owned by the sharing contract, hence a sharing-related method cannot be called.

```

```

You are not allowed to consume this protected data. You need to rent it first, or to subscribe to the user's collection.

```

```

The app related to the protected data is not owned by the DataProtector Sharing contract

```

TODO: Details needed.
Explain that an `appAddress` can be given to `addToCollection()`, etc.

```

Could not find a free workerpool order, maybe too many requests? You might want to try again later.

```

Generic error:

```

Sharing smart contract: Failed to consume a ProtectedData

```

```

```
