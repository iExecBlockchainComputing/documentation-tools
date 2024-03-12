# removeProtectedDataForSale

Method to remove a protected data for sale.

## Usage

```javascript
const notForSaleAymoreResult =
  await dataProtectorSharing.removeProtectedDataForSale({
    protectedDataAddress: "0x123abc...",
  });
```

## Parameters

```js
import { type RemoveProtectedDataForSaleParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data that you'd like to remove for sale.

```javascript
const notForSaleAymoreResult =
  await dataProtectorSharing.removeProtectedDataForSale({
    protectedDataAddress: "0x123abc...", // [!code focus]
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
