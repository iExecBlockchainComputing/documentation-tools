# setSubscriptionParams

::: tip

This method involves asset monetization. To learn more, visit
[pricing model](../../../../overview/monetizationConcepts/pricingModel.md).

:::

Method to set subscription parameters for a given collection of yours.

## Usage

```js
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC
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
    price: 2, // 2 nRLC
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
    price: 2, // 2 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

### duration

The duration (in seconds) for a period of subscription.

```js
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
