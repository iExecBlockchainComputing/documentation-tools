# getProtectedDataInCollections

Method to get protected data that are in collections, ie. owned by the Data
Sharing smart-contract.

## Usage

```js
const protectedData =
  await dataProtectorSharing.getProtectedDataInCollections();
```

## Parameters

```ts
import { type GetProtectedDataInCollectionsParams } from '@iexec/dataprotector';
```

### requiredSchema

`DataSchema | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: 'ArrayBuffer', secretFilename: 'string' }, // [!code focus]
  collectionTokenId: 12,
  collectionOwner: '0x123...',
  createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT
  page: 3,
  pageSize: 25,
});
```

### collectionTokenId

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: 'ArrayBuffer', secretFilename: 'string' },
  collectionTokenId: 12, // [!code focus]
  collectionOwner: '0x123...',
  createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT
  page: 3,
  pageSize: 25,
});
```

### collectionOwner

`AddressOrENS | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: 'ArrayBuffer', secretFilename: 'string' },
  collectionTokenId: 12,
  collectionOwner: '0x123...', // [!code focus]
  createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT
  page: 3,
  pageSize: 25,
});
```

### createdAfterTimestamp

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: 'ArrayBuffer', secretFilename: 'string' },
  collectionTokenId: 12,
  collectionOwner: '0x123...',
  createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT // [!code focus]
  page: 3,
  pageSize: 25,
});
```

### page

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: 'ArrayBuffer', secretFilename: 'string' },
  collectionTokenId: 12,
  collectionOwner: '0x123...',
  createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT
  page: 3, // [!code focus]
  pageSize: 25,
});
```

### pageSize

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: 'ArrayBuffer', secretFilename: 'string' },
  collectionTokenId: 12,
  collectionOwner: '0x123...',
  createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT
  page: 3,
  pageSize: 25, // [!code focus]
});
```

## Return value

```ts
import { type ProtectedDataInCollection } from '@iexec/dataprotector';
```

[`ProtectedDataInCollection[]`](../../types.md#protecteddataincollection)
