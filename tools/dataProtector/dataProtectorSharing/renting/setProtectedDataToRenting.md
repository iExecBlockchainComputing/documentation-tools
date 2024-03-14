# setProtectedDataToRenting

Method to allow a protected data to be rented.

## Usage

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: "0x123abc...",
    priceInNRLC: 1_000_000_000, // 1 RLC
    durationInSeconds: 60 * 60 * 24 * 30, // 30 days
  });
```

## Parameters

```js
import { type SetProtectedDataToRentingParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to set renting parameters.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: "0x123abc...", // [!code focus]
    priceInNRLC: 1_000_000_000,
    durationInSeconds: 60 * 60 * 24 * 30,
  });
```

### priceInNRLC

`number`

The price in nano RLC you ask from someone who wants to rent the protected data.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: "0x123abc...",
    priceInNRLC: 1_000_000_000, // [!code focus]
    durationInSeconds: 60 * 60 * 24 * 30,
  });
```

### durationInSeconds

`number`

The duration of the rental in seconds.

```js
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedDataAddress: "0x123abc...",
    priceInNRLC: 1_000_000_000,
    durationInSeconds: 60 * 60 * 24 * 30, // [!code focus]
  });
```

## Return value

```js
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.
