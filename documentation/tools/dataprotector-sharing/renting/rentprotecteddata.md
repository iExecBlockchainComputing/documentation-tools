# rentProtectedData

Method to rent a protected data.

## Usage

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedDataAddress: "0x123abc...",
});
```

## Parameters

```js
import { type RentProtectedDataParams } from "@iexec/dataprotector";
```

### protectedDataAddress (required)

`AddressOrENS`

Address of the protected data that you'd like rent.

```js
const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedDataAddress: "0x123abc...",
});
```

## Return value example

```js
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

The transaction hash of the function action.

```json
{
  "txHash": "0x33..."
}
```

## Error

TODO
