# setSubscriptionParams

Method to set subscription parameters for a given collection of yours.

When someone tries to consume a protected data that is part of your subscription, the Data Sharing
smart-contract will check that the given user has a currently valid subscription.

## Usage

```js
const durationInDays = 30;

const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    priceInNRLC: BigInt(priceInNrlc),
    durationInSeconds: durationInDays * 60 * 60 * 24,
  });
```

## Parameters

```js
import { type SetSubscriptionParams } from "@iexec/dataprotector";
```

### collectionId

Collection ID to which you'd like to set the subscription params.

```js
const durationInDays = 30;

const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12, // [!code focus]
    priceInNRLC: BigInt(priceInNrlc),
    durationInSeconds: durationInDays * 60 * 60 * 24,
  });
```

### priceInNRLC

The price (in nano RLC) it's going to cost a subscriber to access your collection.

```js
const durationInDays = 30;

const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    priceInNRLC: BigInt(priceInNrlc), // [!code focus]
    durationInSeconds: durationInDays * 60 * 60 * 24,
  });
```

### durationInSeconds

The duration (in seconds) for a period of subscription.

```js
const durationInDays = 30;

const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    priceInNRLC: BigInt(priceInNrlc),
    durationInSeconds: durationInDays * 60 * 60 * 24, // [!code focus]
  });
```

## Return value

```js
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.

## Error

TODO
