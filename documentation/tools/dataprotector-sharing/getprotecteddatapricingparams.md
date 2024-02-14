# getProtectedDataPricingParams

Method to get all distribution params from a protected data.

## Usage

```javascript
const {
  id: Address,
  name: string,
  isFree: boolean,
  isRentable: boolean,
  isIncludedInSubscription: boolean,
  isForSale: boolean,
} = await dataProtector.getProtectedDataPricingParams();
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
