---
description:
  The setProtectedDataRentingParams method allows you to set or update the
  renting parameters (price and duration) for a protected data item. If the data
  isn't listed for rent yet, it will be set for renting with the provided terms.
---

# setProtectedDataRentingParams

Method to update a protected data renting params.

If the protected data is not yet available for renting, it will be set for
renting.

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
  await dataProtectorSharing.setProtectedDataRentingParams({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

## Parameters

```ts twoslash
import { type SetProtectedDataRentingParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address of the protected data you'd like to set renting parameters.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataRentingParams({
    protectedData: '0x123abc...', // [!code focus]
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### price

`number`

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
  await dataProtectorSharing.setProtectedDataRentingParams({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### duration

`number`

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
  await dataProtectorSharing.setProtectedDataRentingParams({
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
