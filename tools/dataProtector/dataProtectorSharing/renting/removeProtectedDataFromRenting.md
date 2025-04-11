---
description:
  The removeProtectedDataFromRenting method allows the collection owner to
  remove a protected data item from being rented. Active rentals will still be
  honored until their rental period ends.
---

# removeProtectedDataFromRenting

Method to remove a protected data from renting.

If there are still active rentals to the protected data, these rentals will be
honored until the end of their rental period.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const notForRentingAnymoreResult =
  await dataProtectorSharing.removeProtectedDataFromRenting({
    protectedData: '0x123abc...',
  });
```

## Parameters

```ts twoslash
import { type RemoveProtectedDataFromRentingParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to remove from renting.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const notForRentingAnymoreResult =
  await dataProtectorSharing.removeProtectedDataFromRenting({
    protectedData: '0x123abc...', // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
