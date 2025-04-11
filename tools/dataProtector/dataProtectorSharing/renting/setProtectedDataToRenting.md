---
description:
  The setProtectedDataToRenting method allows a protected data item to be listed
  for rent. This method sets the price and duration for future rentals. If the
  data is already listed for rent, it updates the terms accordingly.
---

# setProtectedDataToRenting

Method to allow a protected data to be rented.

If you call this method on a protected data that is already set for renting, it
will update the `price` and `duration` parameters, and will apply to future
rentals.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

## Parameters

```ts twoslash
import { type SetProtectedDataToRentingParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to set renting parameters for.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...', // [!code focus]
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### price <RequiredBadge />

**Type:** `number`

The price in nano RLC (nRLC) you ask from someone who wants to rent the
protected data.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### duration <RequiredBadge />

**Type:** `number`

The duration of the rental in seconds.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
