# removeCollection

Method to remove one of your collections in the Data Sharing smart contract.

By removing a collection, we mean to burn the associated NFT, ie. to **transfer
it to the zero address**.

## Usage

```js
const { txHash } = await dataProtectorSharing.removeCollection({
  collectionId: '0x123abc...',
});
```

## Pre-conditions

- You must be the owner of the collection.
- There should be no protected data in the collection. See
  [`removeProtectedDataFromCollection`](./removeProtectedDataFromCollection.md).

## Parameters

```ts twoslash
import { type RemoveCollectionParams } from '@iexec/dataprotector';
```

### collectionId

`number`

The collection ID of the collection you want to remove.

```js
const { txHash } = await dataProtectorSharing.removeCollection({
  collectionId: '0x123abc...', // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
