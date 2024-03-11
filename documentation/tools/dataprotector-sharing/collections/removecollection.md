# removeCollection

Method to remove one of your collection in the Data Sharing smart-contract.

## Usage

```js
const { txHash } = await dataProtectorSharing.removeCollection({
  collectionTokenId: "0x123abc...",
});
```

## Pre-conditions

- You must be the owner of the collection.
- There should be no protected data in the collection.

## Parameters

```js
import { type RemoveCollectionParams } from "@iexec/dataprotector";
```

### collectionTokenId

`number`

The collection token ID of tha collection that you want to remove.

```js
const { txHash } = await dataProtectorSharing.removeCollection({
  collectionTokenId: "0x123abc...", // [!code focus]
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

TODO
