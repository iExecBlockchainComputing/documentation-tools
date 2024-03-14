# removeProtectedDataFromRenting

Method to remove a protected data from renting.

If there are still active rentals to the protected data, these rentals will be honored until the
end of their rental period.

## Usage

```js
const notForRentingAnymoreResult =
  await dataProtectorSharing.removeProtectedDataFromRenting({
    protectedDataAddress: "0x123abc...",
  });
```

## Parameters

```ts
import { type RemoveProtectedDataFromRentingParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to remove from renting.

```js
const notForRentingAnymoreResult =
  await dataProtectorSharing.removeProtectedDataFromRenting({
    protectedDataAddress: "0x123abc...", // [!code focus]
  });
```

## Return value

```ts
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.
