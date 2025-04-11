---
description:
  Remove a protected data from one of your collections in the Data Sharing smart
  contract. This method transfers the ownership of the protected data back to
  the owner.
---

# removeProtectedDataFromCollection

Method to remove one of your protected data from a collection of yours in the
Data Sharing smart contract.

To put it differently, this method will transfer the ownership of the protected
data back to you.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
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

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to remove from your collection.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
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
