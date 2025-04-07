---
description:
  Fetch all subscriptions for a specific collection or user in iExec. Get
  detailed information about subscription activity based on collection ID.
---

# getCollectionSubscriptions

Method to get all subscriptions for:

- a specific collection
- a specific user

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const collectionActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    collectionId: 9,
  });
```

## Parameters

```ts twoslash
import { type GetCollectionSubscriptionsParams } from '@iexec/dataprotector';
```

### subscriberAddress <OptionalBadge />

**Type:** `AddressOrENS`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    subscriberAddress: '0x246bdf...', // [!code focus]
  });
```

### collectionId <OptionalBadge />

**Type:** `number`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const collectionActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    collectionId: 9, // [!code focus]
  });
```

### includePastSubscriptions <OptionalBadge />

**Type:** `boolean`  
**Default:** `false`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userRentals = await dataProtectorSharing.getCollectionSubscriptions({
  subscriberAddress: '0x246bdf...',
  includePastSubscriptions: true, // [!code focus]
});
```

## Return value

```ts twoslash
import { type GetCollectionSubscriptionsResponse } from '@iexec/dataprotector';

// Child types
import { type CollectionSubscription } from '@iexec/dataprotector';
```

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sdk/blob/c83e30e6ce8b55ecf8a35ecb4eb1014cd4ecefe9/packages/sdk/src/lib/types/sharingTypes.ts" target="_blank">See
Type ↗️</a>
