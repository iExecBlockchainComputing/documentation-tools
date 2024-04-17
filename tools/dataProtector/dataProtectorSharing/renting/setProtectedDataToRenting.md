# setProtectedDataToRenting

Method to allow a protected data to be rented.

## Usage

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

## Parameters

```ts twoslash
import { type SetProtectedDataToRentingParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address of the protected data you'd like to set renting parameters.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...', // [!code focus]
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### price

`number`

The price in nano RLC (nRLC) you ask from someone who wants to rent the
protected data.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### duration

`number`

The duration of the rental in seconds.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
