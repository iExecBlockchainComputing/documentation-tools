# removeProtectedDataForSale

Method to remove a protected data for sale.

## Usage

```js
const notForSaleAymoreResult =
  await dataProtectorSharing.removeProtectedDataForSale({
    protectedDataAddress: '0x123abc...',
  });
```

## Parameters

```ts
import { type RemoveProtectedDataForSaleParams } from '@iexec/dataprotector';
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data that you'd like to remove for sale.

```js
const notForSaleAymoreResult =
  await dataProtectorSharing.removeProtectedDataForSale({
    protectedDataAddress: '0x123abc...', // [!code focus]
  });
```

## Return value

```ts
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
