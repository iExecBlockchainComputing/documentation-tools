# setProtectedDataToSubscription

Method to set a protected data part of your subscription.

Any user who has an active subscription to your collection will be able to consume this protected data.

## Usage

```js
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedDataAddress: '0x123abc...',
  });
```

## Parameters

```ts
import { type SetProtectedDataToSubscriptionParams } from '@iexec/dataprotector';
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to be part of your subscription.

```js
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedDataAddress: '0x123abc...',
  });
```

## Return value

```ts
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.
