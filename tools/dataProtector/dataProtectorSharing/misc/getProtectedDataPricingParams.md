# getProtectedDataPricingParams

Method to get all distribution params for a protected data.

## Usage

```js
const pricingParams = await dataProtectorSharing.getProtectedDataPricingParams({
  protectedDataAddress: '0x123abc...',
});
```

## Parameters

```ts twoslash
import { type GetProtectedDataPricingParams } from '@iexec/dataprotector';
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data that you'd like to get the pricing params for.

## Return value

```ts twoslash
import { type GetProtectedDataPricingParamsResponse } from '@iexec/dataprotector';
```
