# removeProtectedDataFromSubscription

Method to remove a protected data from your subscription.

## Usage

```js
const { success } =
  await dataProtectorSharing.removeProtectedDataFromSubscription({
    protectedDataAddress: "0x123abc...",
  });
```

## Pre-conditions

- You must be the owner of the collection of which the protected data is currently part of.
- There should be no active subscriptions to this collection.
- The protected data should be part of your subscription.

## Parameters

```js
import { type RemoveProtectedDataFromSubscriptionParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to remove from subscription.

```js
const { success } =
  await dataProtectorSharing.removeProtectedDataFromSubscription({
    protectedDataAddress: "0x123abc...", // [!code focus]
  });
```

## Return value

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
