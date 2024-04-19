# setSubscriptionParams

Method to set subscription parameters for a given collection of yours.

When someone tries to consume a protected data that is part of your
subscription, the Data Sharing smart contract will check that the given user has
a currently valid subscription.

## Usage

```js
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 RLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

## Parameters

```ts twoslash
import { type SetSubscriptionParams } from '@iexec/dataprotector';
```

### collectionId

Collection ID to which you'd like to set the subscription params.

```js
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12, // [!code focus]
    price: 2, // 2 RLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### price

The price in nano RLC (nRLC) it's going to cost a subscriber to access your
collection.

```js
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 RLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### duration

The duration (in seconds) for a period of subscription.

```js
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 RLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
