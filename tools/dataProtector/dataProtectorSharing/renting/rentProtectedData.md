# rentProtectedData

Method to rent a protected data.

## Usage

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
});
```

## Pre-conditions

- You cannot rent a protected data that belongs to one of your own collections.

## Parameters

```ts twoslash
import { type RentProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address or ENS of the protected data that you'd like rent.

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
