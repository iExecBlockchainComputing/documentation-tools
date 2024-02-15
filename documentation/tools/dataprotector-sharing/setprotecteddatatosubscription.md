# setProtectedDataToSubscription

Method to set a protected data part of your subscription.

Any user who has an active subscription to your collection will be able to consume this protected data.

## Usage

```javascript
const setToSubscriptionResult = await dataProtector.setProtectedDataToSubscription({
  collectionTokenId: 12,
  protectedDataAddress: '0x123abc...'
});
```

## Return value example

```json
{
  "success": true,
  "txHash": "0x33e58a89631e6b4271528a1a65eaa9717bf5d2e098602f164e30fe56585895e6"
}
```

## Parameters

### collectionTokenId (required)

Collection ID in which the protected data currently lives in. 

### protectedDataAddress (required)

Address of the protected data you'd like to be part of your subscription.
