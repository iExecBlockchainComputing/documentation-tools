# getCollectionOwners

Method to get all collection owners.

Results are ordered by `CollectionOwner.id` asc.

<Badge type="tip" text="Soon" /> Results will be ordered by

<p style="margin-top: 0"><code>CollectionOwner.collections.creationTimestamp</code> desc.</p>

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const collectionOwners = await dataProtectorSharing.getCollectionOwners({
  limit: 100,
});
```

## Parameters

```ts twoslash
import { type GetCollectionOwnersParams } from '@iexec/dataprotector';
```

### limit

`number | undefined`

_default_: `100`

Value between `1` and `1000`.

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
