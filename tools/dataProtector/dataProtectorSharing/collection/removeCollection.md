# removeCollection

Method to remove one of your collection in the Data Sharing smart-contract.

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

The collection token ID of the collection you want to remove.

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
