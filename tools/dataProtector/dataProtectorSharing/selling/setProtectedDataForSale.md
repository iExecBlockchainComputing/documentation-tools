# setProtectedDataForSale

Method to set a protected data for sale.

During a successful sale, **the ownership** of the protected data **is
transferred** to the buyer. The buyer will then be able to set their own pricing
parameters, or simply keep the protected data for their own use.

## Usage

```js
const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedDataAddress: '0x123abc...',
  priceInNRLC: 2_000_000_000, // 2 RLC
});
```

## Parameters

```ts twoslash
import { type SetProtectedDataForSaleParams } from '@iexec/dataprotector';
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data that you'd like to set for sale.

```js
const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedDataAddress: '0x123abc...', // [!code focus]
  priceInNRLC: 2_000_000_000, // 2 RLC
});
```

### priceInNRLC

`number`

The price in nano RLC you ask from someone who wants to buy the protected data.

```js
const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedDataAddress: '0x123abc...',
  priceInNRLC: 2_000_000_000, // 2 RLC // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
