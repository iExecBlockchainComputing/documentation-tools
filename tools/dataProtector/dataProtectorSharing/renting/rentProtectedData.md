# rentProtectedData

Method to rent a protected data.

## Usage

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1,
  duration: 172800, // equivalent for 2 days in seconds
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
  protectedData: '0x123abc...', // [!code focus]
  price: 1,
  duration: 172800,
});
```

### price

`number`

Price of the rental for the protected data that you expect to rent. This
parameter ensures that you will not be front-run by the owner of the protected
data. The unit is in nano RLC (nRLC).

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1, // [!code focus]
  duration: 172800,
});
```

### duration

`number`

Duration of the rental for the protected data that you expect to rent. This
parameter ensures that you will not be front-run by the owner of the protected
data. The unit is in seconds.

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1,
  duration: 172800, // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
