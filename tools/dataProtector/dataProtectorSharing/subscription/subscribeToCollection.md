---
description:
  Subscribe to a collection on iExec and gain access to both current and future
  protected data. Manage your subscription with a fixed price and duration, with
  no automatic renewal, using the Data Sharing smart contract.
---

# subscribeToCollection

Method to subscribe to a collection.

You subscribe for a certain price and duration. **The subscription will not
automatically renew.**

With an active subscription, you'll have access to current **and future**
protected data.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

::: tip

Technically, `price` and `duration` parameters could be avoided. It is mainly a
protection against front-running "attacks", ie. if the collection owner changes
the price **at the same time** you subscribe to the collection, you would end up
paying more than expected. Passing the `price` here allows the SDK to ensure
you're paying the right price. If prices don't match, the SDK will throw an
error.

:::

## Pre-conditions

- The collection must be available for subscription, ie. the collection owner
  must have set a price and a duration.

## Parameters

```ts twoslash
import { type SubscribeToCollectionParams } from '@iexec/dataprotector';
```

### collectionId <RequiredBadge />

**Type:** `number`

Collection ID to which you'd like to subscribe.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12, // [!code focus]
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

### price <RequiredBadge />

**Type:** `number`

Price of the rental for the protected data that you expect to rent. This
parameter ensures that you will not be front-run by the owner of the protected
data. The unit is in nano RLC (nRLC).

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1, // 1 nRLC // [!code focus]
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

### duration <RequiredBadge />

**Type:** `number`

Duration of the rental for the protected data that you expect to rent. This
parameter ensures that you will not be front-run by the owner of the protected
data. The unit is in seconds.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
