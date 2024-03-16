# rentProtectedData

Method to rent a protected data.

## Usage

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedDataAddress: '0x123abc...',
});
```

## Parameters

```ts
import { type RentProtectedDataParams } from '@iexec/dataprotector';
```

### protectedDataAddress (required)

`AddressOrENS`

Address of the protected data that you'd like rent.

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedDataAddress: '0x123abc...',
});
```

## Return value

```ts
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
