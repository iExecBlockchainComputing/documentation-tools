---
description:
  Set subscription parameters for your data collection on the iExec platform.
  Define pricing, duration, and manage access to your protected data efficiently
  using the Data Sharing smart contract.
---

# setSubscriptionParams

Method to set subscription parameters for a given collection of yours.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

## Parameters

```ts twoslash
import { type SetSubscriptionParams } from '@iexec/dataprotector';
```

### collectionId <RequiredBadge />

**Type:** `number`

Collection ID to which you'd like to set the subscription params.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12, // [!code focus]
    price: 2, // 2 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### price <RequiredBadge />

**Type:** `number`

The price in nano RLC (nRLC) it's going to cost a subscriber to access your
collection.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### duration <RequiredBadge />

**Type:** `number`

The duration (in seconds) for a period of subscription.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
