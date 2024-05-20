# getProtectedDataInCollections

Method to get protected data that are in collections.

A protected data can only be in one collection at a time.

Results are ordered by `creationTimestamp` desc.

## Usage

```js
const protectedData =
  await dataProtectorSharing.getProtectedDataInCollections();
```

## Parameters

```ts twoslash
import { type GetProtectedDataInCollectionsParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS | undefined`

```js
const oneProtectedData =
  await dataProtectorSharing.getProtectedDataInCollections({
    protectedData: '0x123abc...', // [!code focus]
  });
```

### collectionId

`number | undefined`

```js
const protectedDataByCollection =
  await dataProtectorSharing.getProtectedDataInCollections({
    collectionId: 12, // [!code focus]
  });
```

### collectionOwner

`AddressOrENS | undefined`

```js
const protectedDataByOwner =
  await dataProtectorSharing.getProtectedDataInCollections({
    collectionOwner: '0x123...', // [!code focus]
  });
```

### createdAfterTimestamp

`number | undefined`

```js
const latestProtectedData =
  await dataProtectorSharing.getProtectedDataInCollections({
    createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT // [!code focus]
  });
```

### isRentable

`boolean | undefined`

```js
const rentableProtectedData =
  await dataProtectorSharing.getProtectedDataInCollections({
    isRentable: true, // [!code focus]
  });
```

### isForSale

`boolean | undefined`

```js
const protectedDataForSale =
  await dataProtectorSharing.getProtectedDataInCollections({
    isForSale: true, // [!code focus]
  });
```

### isDistributed

`boolean | undefined`

Used to filter protected data that are either for sale, renting or part of a
subscription.

```js
const protectedDataForSale =
  await dataProtectorSharing.getProtectedDataInCollections({
    isDistributed: true, // [!code focus]
  });
```

### page

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionId: 12,
  page: 3, // [!code focus]
  pageSize: 25,
});
```

### pageSize

`number | undefined`

Value between `10` and `1000`.

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionId: 12,
  page: 3,
  pageSize: 25, // [!code focus]
});
```

## Return value

```ts twoslash
import type { GetProtectedDataInCollectionsResponse } from '@iexec/dataprotector';

// Child types
import type {
  ProtectedDataInCollection,
  RentingParams,
  SellingParams,
} from '@iexec/dataprotector';
```

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sdk/blob/c83e30e6ce8b55ecf8a35ecb4eb1014cd4ecefe9/packages/sdk/src/lib/types/sharingTypes.ts" target="_blank">See
Type ↗️</a>
