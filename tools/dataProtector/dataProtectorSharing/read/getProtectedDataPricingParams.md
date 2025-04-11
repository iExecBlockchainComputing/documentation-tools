---
description:
  Get all distribution parameters for a protected data in iExec. Retrieve
  detailed pricing information for a specific protected data using its address.
---

# getProtectedDataPricingParams

Method to get all distribution params for a protected data.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const pricingParams = await dataProtectorSharing.getProtectedDataPricingParams({
  protectedData: '0x123abc...',
});
```

## Parameters

```ts twoslash
import { type GetProtectedDataPricingParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to get the pricing params for.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const pricingParams = await dataProtectorSharing.getProtectedDataPricingParams({
  protectedData: '0x123abc...', // [!code focus]
});
```

## Return value

```ts twoslash
import type { GetProtectedDataPricingParamsResponse } from '@iexec/dataprotector';

// Child types
import type { SubscriptionParams, RentingParams } from '@iexec/dataprotector';
```

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sdk/blob/c83e30e6ce8b55ecf8a35ecb4eb1014cd4ecefe9/packages/sdk/src/lib/types/sharingTypes.ts" target="_blank">See
Type ↗️</a>
