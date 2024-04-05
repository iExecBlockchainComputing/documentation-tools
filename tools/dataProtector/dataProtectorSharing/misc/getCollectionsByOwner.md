# getCollectionsByOwner

Method to get all collections for a specific user.

## Usage

```js
const userCollections = await dataProtectorSharing.getCollectionsByOwner({
  owner: '0xA0c15z...',
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
  owner: '0xA0c15z...', // [!code focus]
});
```

### includeHiddenProtectedDatas

`boolean | undefined`

_default_: `false`

```js
const userCollectionsWithAllProtectedData =
  await dataProtectorSharing.getCollectionsByOwner({
    owner: '0xA0c15z...',
    includeHiddenProtectedDatas: true, // [!code focus]
  });
```

## Return value

```ts twoslash
import { type GetCollectionsByOwnerResponse } from '@iexec/dataprotector';
```
