# setProtectedDataToSubscription

Method to set a protected data part of your subscription.

Any user who has an active subscription to your collection will be able to
consume this protected data.

## Usage

```js
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedData: '0x123abc...',
  });
```

## Parameters

```ts twoslash
import { type SetProtectedDataToSubscriptionParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address of the protected data you'd like to be part of your subscription.

```js
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedData: '0x123abc...', // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
