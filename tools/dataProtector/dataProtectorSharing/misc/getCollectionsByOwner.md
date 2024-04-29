# getCollectionsByOwner

Method to get all collections for a specific user.

## Usage

```js
const userCollections = await dataProtectorSharing.getCollectionsByOwner({
  owner: '0xa0c15e...',
});
```

## Parameters

```ts twoslash
import { type GetCollectionsByOwnerParams } from '@iexec/dataprotector';
```

### owner

`AddressOrENS`

```js
const userCollections = await dataProtectorSharing.getCollectionsByOwner({
  owner: '0xa0c15e...', // [!code focus]
});
```

### includeHiddenProtectedDatas

`boolean | undefined`

_default_: `false`

```js
const userCollectionsWithAllProtectedData =
  await dataProtectorSharing.getCollectionsByOwner({
    owner: '0xa0c15e...',
    includeHiddenProtectedDatas: true, // [!code focus]
  });
```

## Return value

```ts twoslash
import type {
  GetCollectionsByOwnerResponse,
  CollectionWithProtectedDatas,
  ProtectedDataInCollection,
} from '@iexec/dataprotector';
```
