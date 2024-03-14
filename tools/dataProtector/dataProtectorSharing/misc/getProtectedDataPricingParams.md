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

```js
const pricingParams = await dataProtectorSharing.getProtectedDataPricingParams({
  protectedDataAddress: "0x123...",
});
```

## Parameters

### protectedDataAddress

Address of the protected data you'd like to get the pricing parameters.

## Return value

```js
import { type GetProtectedDataPricingResponse } from "@iexec/dataprotector";
```

### name

`string`

The name of the the protected data.

### address

`Address`

Address of the protected data

### schema

`DataSchema`

Defines the data structure of the protected data.

### collectionTokenId

`number`

The collection token ID in which the protected data is.

### isIncludedInSubscription

`boolean`
Indicates if the item is accessible through a subscription.

### isRentable

`boolean`

Whether the item can be rented.

### isForSale

`boolean`

Specifies if the item is available for purchase.

### isFree

`boolean`

Specifies if the item cost zero nano RLC.

### creationTimestamp

`number`

Timestamp marking the protected data's creation.
