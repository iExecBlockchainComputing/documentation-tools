---
description:
  Remove a collection from the Data Sharing smart contract by burning its
  associated NFT. Transfer the NFT to the zero address and permanently remove
  the collection.
---

# removeCollection

Method to remove one of your collections in the Data Sharing smart contract.

By removing a collection, we mean to burn the associated NFT, ie. to **transfer
it to the zero address**.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.removeCollection({
  collectionId: 15,
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

### collectionId <RequiredBadge />

**Type:** `number`

The collection ID of the collection you want to remove.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.removeCollection({
  collectionId: 15, // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
