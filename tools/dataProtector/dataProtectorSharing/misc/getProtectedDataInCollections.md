# getProtectedDataInCollections

Method to get protected data that are in collections, ie. owned by the Data
Sharing smart-contract.

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

### collectionTokenId

`number | undefined`

```js
const protectedDataByCollection =
  await dataProtectorSharing.getProtectedDataInCollections({
    collectionTokenId: 12, // [!code focus]
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
    isRentable: true, // Feb 6th, 2024 16:39:40 GMT // [!code focus]
  });
```

### isForSale

`boolean | undefined`

```js
const protectedDataForSale =
  await dataProtectorSharing.getProtectedDataInCollections({
    isForSale: true, // Feb 6th, 2024 16:39:40 GMT // [!code focus]
  });
```

### page

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionTokenId: 12,
  page: 3, // [!code focus]
  pageSize: 25,
});
```

### pageSize

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionTokenId: 12,
  page: 3,
  pageSize: 25, // [!code focus]
});
```

## Return value

```ts twoslash
import { type GetProtectedDataInCollectionsResponse } from '@iexec/dataprotector';
```
