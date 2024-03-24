# getProtectedDataRentals

Method to get all subscriptions (active & past) for a collection.

## Usage

```js
const protectedData = await dataProtectorSharing.getProtectedDataRentals({
  collectionTokenId: 9,
});
```

## Parameters

```ts
import { type GetProtectedDataRentalsParams } from '@iexec/dataprotector';
```

### collectionTokenId

`number`

```js
const protectedData = await dataProtectorSharing.getCollectionSubscriptions({
  collectionTokenId: 9, // [!code focus]
});
```

## Return value

```ts
import { type GetProtectedDataRentalsResponse } from '@iexec/dataprotector';
```

### rentals

[`ProtectedDataRental[]`](../../types.md#protecteddatarental)
