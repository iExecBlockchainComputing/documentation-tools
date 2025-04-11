---
description:
  The rentProtectedData method allows you to rent a protected data item by
  specifying the price and duration. If the parameters don't match the current
  listing, the SDK will not submit the transaction to avoid paying gas fees for
  a transaction that would revert.
---

# rentProtectedData

Method to rent a protected data.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

::: tip

Technically, `price` and `duration` parameters could be avoided. It is mainly a
protection against front-running "attacks", ie. if the collection owner changes
the price **at the same time** you rent the protected data, you would end up
paying more than expected. Passing the `price` here allows the SDK to ensure
you're paying the right price. If prices don't match, the SDK will throw an
error.

:::

## Parameters

```ts twoslash
import { type RentProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address or ENS of the protected data that you'd like rent.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...', // [!code focus]
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
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1, // 1 nRLC // [!code focus]
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

::: tip

To get the renting price of the given protected data, you can use
[getProtectedDataPricingParams](../read/getProtectedDataPricingParams.md).

:::

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
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days // [!code focus]
});
```

::: tip

To get the renting duration of the given protected data, you can use
[getProtectedDataPricingParams](../read/getProtectedDataPricingParams.md).

:::

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
