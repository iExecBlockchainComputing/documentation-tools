# getProtectedDataPricingParams

Method to get all distribution params from a protected data.

Inside a collection, a protected data can be in a number of different states:
 - Not distributed, ie. only the collection's owner can see it
 - For free
 - For rent
 - For rent AND included in a subscription
 - For sale

## Usage

```javascript
const pricingParams = await dataProtector.getProtectedDataPricingParams();
```

## Return value example

```json
{
  "id": "0x123...",
  "name": "My Protected Data",
  "isFree": false,
  "isRentable": true,
  "isIncludedInSubscription": true,
  "isForSale": false
}
```
