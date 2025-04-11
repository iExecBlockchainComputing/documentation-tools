---
description:
  Allows a data owner to list their protected data for sale by setting a price.
  Upon successful sale, ownership is transferred to the buyer, who can choose
  their own pricing or retain the data for personal use."
---

# setProtectedDataForSale

Method to set a protected data for sale.

During a successful sale, **the ownership** of the protected data **is
transferred** to the buyer. The buyer will then be able to set their own pricing
parameters, or simply keep the protected data for their own use.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 2, // 2 nRLC
});
```

## Parameters

```ts twoslash
import { type SetProtectedDataForSaleParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data that you'd like to set for sale.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...', // [!code focus]
  price: 2, // 2 nRLC
});
```

### price <RequiredBadge />

**Type:** `number`

The price in nano RLC (nRLC) you ask from someone who wants to buy the protected
data.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 2, // 2 nRLC // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
