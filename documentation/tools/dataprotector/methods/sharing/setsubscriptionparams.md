# setSubscriptionParams

Method to set subscription parameters for a given collection of yours.

## Usage

```javascript
const { collectionId } = await dataProtector.setSubscriptionParams({
  collectionId: 12,
  priceInNRLC: BigInt(priceInNrlc),
  durationInSeconds: Number(durationInDays) * 60 * 60 * 24,
});
```

## Return value example

```javascript
{
  success: true
}
```

## Parameters

### collectionId (required)

Collection ID to which you'd like to set the subscription params.

### priceInNRLC (required)

The price it's going to cost a subscriber to access your collection.

Unit is nRLC (nano RLC).

### durationInSeconds (required)

The duration for a period of subscription.

Unit is seconds.
