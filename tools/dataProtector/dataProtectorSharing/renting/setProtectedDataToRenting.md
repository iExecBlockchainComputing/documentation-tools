# setProtectedDataToRenting

Method to allow a protected data to be rented.

## Usage

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: '0x123abc...',
    priceInNRLC: 1_000_000_000, // 1 RLC
    durationInSeconds: 60 * 60 * 24 * 30, // 30 days
  });
```

## Parameters

```ts
import { type SetProtectedDataToRentingParams } from '@iexec/dataprotector';
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to set renting parameters.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: '0x123abc...', // [!code focus]
    priceInNRLC: 1_000_000_000, // 1 RLC
    durationInSeconds: 60 * 60 * 24 * 30, // 30 days
  });
```

### priceInNRLC

`number`

The price in nano RLC you ask from someone who wants to rent the protected data.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: '0x123abc...',
    priceInNRLC: 1_000_000_000, // 1 RLC // [!code focus]
    durationInSeconds: 60 * 60 * 24 * 30, // 30 days
  });
```

### durationInSeconds

`number`

The duration of the rental in seconds.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: '0x123abc...',
    priceInNRLC: 1_000_000_000, // 1 RLC
    durationInSeconds: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

## Return value

```ts
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
