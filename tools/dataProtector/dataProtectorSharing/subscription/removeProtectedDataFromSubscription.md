---
description:
  Remove a protected data from your iExec subscription. This method ensures that
  the data is no longer accessible to subscribers once removed, as long as there
  are no active subscriptions.
---

# removeProtectedDataFromSubscription

Method to remove a protected data from your subscription.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } =
  await dataProtectorSharing.removeProtectedDataFromSubscription({
    protectedData: '0x123abc...',
  });
```

## Pre-conditions

- You must be the owner of the collection of which the protected data is
  currently part of.
- There should be no active subscriptions to this collection.
- The protected data should be part of your subscription.

## Parameters

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
import { type RemoveProtectedDataFromSubscriptionParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to remove from subscription.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } =
  await dataProtectorSharing.removeProtectedDataFromSubscription({
    protectedData: '0x123abc...', // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
