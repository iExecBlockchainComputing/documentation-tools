# removeFromCollection

Method to remove one of your protected data from a collection of yours in the Data Sharing
smart-contract.

To put it differently, this method will transfer the ownership of the protected data back to you.

## Usage

```javascript
const { success } = await dataProtectorSharing.removeFromCollection({
  protectedDataAddress: '0x123abc...',
});
```

{% hint style="info" %}
Input parameters type: `RemoveFromCollectionParams`
{% endhint %}

## Pre-conditions

 - You must be the owner of the collection of which the protected data is currently part of.
 - There should be no active subscriptions to this collection.
 - There should be no active rentals of this protected data.

## Return value example

```json
{
  "success": true,
  "txHash": "0x33e58a89631e6b4271528a1a65eaa9717bf5d2e098602f164e30fe56585895e6"
}
```

{% hint style="info" %}
Response type: `SuccessWithTransactionHash`
{% endhint %}

## Parameters

### protectedDataAddress (required)

Address of the protected data you'd like to remove from your collection.

## Possible errors

### yup `ValidationError` errors

```
protectedDataAddress should be an ethereum address, a ENS name, or "any"
```

TODO To be continued...
