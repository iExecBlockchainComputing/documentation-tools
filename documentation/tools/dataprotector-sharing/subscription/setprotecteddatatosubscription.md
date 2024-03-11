# setProtectedDataToSubscription

Method to set a protected data part of your subscription.

Any user who has an active subscription to your collection will be able to consume this protected data.

## Usage

```js
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedDataAddress: "0x123abc...",
  });
```

## Parameters

```js
import { type SetProtectedDataToSubscriptionParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to be part of your subscription.

```js
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedDataAddress: "0x123abc...",
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
