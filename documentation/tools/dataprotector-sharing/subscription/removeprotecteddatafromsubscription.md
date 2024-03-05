# removeProtectedDataFromSubscription

Method to remove a protected data from your subscription.

## Usage

```javascript
const { success } = await dataProtectorSharing.removeProtectedDataFromSubscription({
  protectedDataAddress: '0x123abc...',
});
```

{% hint style="info" %}
Input parameters type: `RemoveProtectedDataFromSubscriptionParams`
{% endhint %}

## Pre-conditions

- You must be the owner of the collection of which the protected data is currently part of.
- There should be no active subscriptions to this collection.
- The protected data should be part of your subscription.
