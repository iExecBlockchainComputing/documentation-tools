# getProtectedDataPricingParams

Method to get all distribution params from a protected data.

Inside a collection, a protected data can be in a number of different states:
 - Not distributed, ie. only the collection's owner can see it
 - For free
 - For rent
 - For rent AND included in the subscription
 - For sale

## Usage

Input parameters type: `GetProtectedDataPricingParams`

```javascript
const pricingParams = await dataProtectorSharing.getProtectedDataPricingParams({
  protectedDataAddress: "0x123..."
});
```

## Return value example

Response type: `GetProtectedDataPricingResponse`

```json
{
  "address": "0x123...",
  "name": "My Protected Data",
  "isFree": false,
  "isRentable": true,
  "isIncludedInSubscription": true,
  "isForSale": false
}
```

## Parameters

### protectedDataAddress (required)

Address of the protected data you'd like to get the pricing parameters.

## Possible errors

This method might throw if the subgraph is not reachable.
