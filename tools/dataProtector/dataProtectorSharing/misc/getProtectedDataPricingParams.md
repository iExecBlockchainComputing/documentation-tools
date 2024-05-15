# getProtectedDataPricingParams

Method to get all distribution params for a protected data.

## Usage

```js
const pricingParams = await dataProtectorSharing.getProtectedDataPricingParams({
  protectedData: '0x123abc...',
});
```

## Parameters

```ts twoslash
import { type GetProtectedDataPricingParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address of the protected data you'd like to get the pricing params for.

```js
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
