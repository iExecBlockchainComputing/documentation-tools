# getCollectionOwners

Method to get all collection owners.

Results of `CollectionOwner.collections` are ordered by
`collections.creationTimestamp` desc.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const collectionOwners = await dataProtectorSharing.getCollectionOwners();
```

## Parameters

```ts twoslash
import { type GetCollectionOwnersParams } from '@iexec/dataprotector';
```

### limit <OptionalBadge />

**Type:** `number`  
**Default:** `100`  
**Range:** `[1...1000]`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const collectionOwners = await dataProtectorSharing.getCollectionOwners({
  limit: 100, // [!code focus]
});
```

## Return value

```ts twoslash
import type { GetCollectionOwnersResponse } from '@iexec/dataprotector';

// Child types
import type { CollectionOwner, SubscriptionParams } from '@iexec/dataprotector';
```

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sdk/blob/c83e30e6ce8b55ecf8a35ecb4eb1014cd4ecefe9/packages/sdk/src/lib/types/sharingTypes.ts" target="_blank">See
Type ↗️</a>

### hasActiveSubscription

`true` if you (logged-in user) have an active subscription to one of the
collections.
