# setProtectedDataToSubscription

Method to set a protected data part of your subscription.

Any user who has an active subscription to your collection will be able to consume this protected data.

## Usage

```javascript
const { success } = await dataProtector.setProtectedDataToSubscription({
  collectionId: 12,
  protectedDataAddress: '0x123abc...'
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

Collection ID in which the protected data currently lives in. 

### protectedDataAddress (required)

Address of the protected data you'd like to be part of your subscription.
