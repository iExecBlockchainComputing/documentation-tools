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

```ts
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

`(status: OnStatusUpdateFn) => void  | undefined`

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

## Return value

```ts
import { type ConsumeProtectedDataResponse } from "@iexec/dataprotector";
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
