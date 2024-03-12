# removeFromCollection

Method to remove one of your protected data from a collection of yours in the Data Sharing
smart-contract.

To put it differently, this method will transfer the ownership of the protected data back to you.

## Usage

```js
const { txHash } = await dataProtectorSharing.removeFromCollection({
  protectedDataAddress: "0x123abc...",
});
```

## Pre-conditions

- You must be the owner of the collection of which the protected data is currently part of.
- There should be no active subscriptions to this collection.
- There should be no active rentals of this protected data.

## Parameters

```js
import { type RemoveFromCollectionParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to remove from your collection.

```js
const { txHash } = await dataProtectorSharing.removeFromCollection({
  protectedDataAddress: "0x123abc...", // [!code focus]
});
```

## Return value

```js
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

The transaction hash of the function action.

```json
{
  "txHash": "0x33..."
}
```

## Error

### yup `ValidationError` errors

```
protectedDataAddress should be an ethereum address, a ENS name, or "any"
```

TODO To be continued...
