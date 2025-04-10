---
description:
  Add your protected data to a subscription on the iExec platform. Allow active
  subscribers to access your data easily by linking it to your subscribers to
  access your data easily.
---

# setProtectedDataToSubscription

Method to set a protected data as part of your subscription.

Any user who has an active subscription to your collection will be able to
consume this protected data.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedData: '0x123abc...',
  });
```

## Parameters

```ts twoslash
import { type SetProtectedDataToSubscriptionParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to be part of your subscription.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedData: '0x123abc...', // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
