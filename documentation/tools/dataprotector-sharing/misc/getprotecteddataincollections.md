# getProtectedDataInCollections

Method to consume a protected data, ie. visualize it or download it.

For this method to be successful, you need to either rent the protected data or have a
subscription to the corresponding collection.

## Usage

```javascript
const protectedData =
  await dataProtectorSharing.getProtectedDataInCollections();
```

## Parameters

```js
import { type GetProtectedDataInCollectionsParams } from "@iexec/dataprotector";
```

### requiredSchema

`DataSchema | undefined`

```javascript
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" }, // [!code focus]
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  creationTimestampGte: 1707237580,
  page: 3,
  pageSize: 25,
});
```

### collectionTokenId

`number | undefined`

```javascript
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12, // [!code focus]
  collectionOwner: "0x123...",
  creationTimestampGte: 1707237580,
  page: 3,
  pageSize: 25,
});
```

### collectionOwner

`AddressOrENS | undefined`

```javascript
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...", // [!code focus]
  creationTimestampGte: 1707237580,
  page: 3,
  pageSize: 25,
});
```

### creationTimestampGte

`number | undefined`

```javascript
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  creationTimestampGte: 1707237580, // [!code focus]
  page: 3,
  pageSize: 25,
});
```

### page

`number | undefined`

```javascript
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  creationTimestampGte: 1707237580,
  page: 3, // [!code focus]
  pageSize: 25,
});
```

### pageSize

`number | undefined`

```javascript
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  creationTimestampGte: 1707237580,
  page: 3,
  pageSize: 25, // [!code focus]
});
```

## Return value

```js
import { type ProtectedDataInCollection } from "@iexec/dataprotector";
```

```json
[
  {
    "name": "My shared protected data",
    "address": "0x123...",
    "schema": { "file": "ArrayBuffer", "secretFilename": "string" },
    "collectionTokenId": 12,
    "isIncludedInSubscription": true,
    "isRentable": true,
    "isForSale": false,
    "creationTimestamp": 1707237581
  }
]
```

## Error

TODO
