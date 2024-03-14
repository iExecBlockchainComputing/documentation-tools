# getProtectedDataInCollections

Method to consume a protected data, ie. visualize it or download it.

For this method to be successful, you need to either rent the protected data or have a
subscription to the corresponding collection.

## Usage

```js
const protectedData =
  await dataProtectorSharing.getProtectedDataInCollections();
```

## Parameters

```ts
import { type GetProtectedDataInCollectionsParams } from "@iexec/dataprotector";
```

### requiredSchema

`DataSchema | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" }, // [!code focus]
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  createdAfterTimestamp: 1707237580,
  page: 3,
  pageSize: 25,
});
```

### collectionTokenId

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12, // [!code focus]
  collectionOwner: "0x123...",
  createdAfterTimestamp: 1707237580,
  page: 3,
  pageSize: 25,
});
```

### collectionOwner

`AddressOrENS | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...", // [!code focus]
  createdAfterTimestamp: 1707237580,
  page: 3,
  pageSize: 25,
});
```

### createdAfterTimestamp

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  createdAfterTimestamp: 1707237580, // [!code focus]
  page: 3,
  pageSize: 25,
});
```

### page

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  createdAfterTimestamp: 1707237580,
  page: 3, // [!code focus]
  pageSize: 25,
});
```

### pageSize

`number | undefined`

```js
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  requiredSchema: { file: "ArrayBuffer", secretFilename: "string" },
  collectionTokenId: 12,
  collectionOwner: "0x123...",
  createdAfterTimestamp: 1707237580,
  page: 3,
  pageSize: 25, // [!code focus]
});
```

## Return value

```ts
import { type ProtectedDataInCollection } from "@iexec/dataprotector";
```

`ProtectedDataInCollection[]`

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

### creationTimestamp

`number`

Timestamp marking the protected data's creation.
