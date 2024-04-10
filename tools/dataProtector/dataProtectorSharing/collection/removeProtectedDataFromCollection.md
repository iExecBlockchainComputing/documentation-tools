# removeProtectedDataFromCollection

Method to remove one of your protected data from a collection of yours in the
Data Sharing smart-contract.

To put it differently, this method will transfer the ownership of the protected
data back to you.

## Usage

```js
const { txHash } = await dataProtectorSharing.removeProtectedDataFromCollection(
  {
    protectedData: '0x123abc...',
  }
);
```

## Pre-conditions

- You must be the owner of the collection of which the protected data is
  currently part of.
- There should be no active subscriptions to this collection.
- There should be no active rentals of this protected data.

## Parameters

```ts twoslash
import { type RemoveFromCollectionParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address of the protected data you'd like to remove from your collection.

```js
const { txHash } = await dataProtectorSharing.removeProtectedDataFromCollection(
  {
    protectedData: '0x123abc...', // [!code focus]
  }
);
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
