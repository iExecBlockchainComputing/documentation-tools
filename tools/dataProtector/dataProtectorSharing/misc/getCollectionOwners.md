# getCollectionOwners

Method to get all collection owners.

## Usage

```js
const collectionOwners = await dataProtectorSharing.getCollectionOwners({
  limit: 100,
});
```

## Parameters

```ts twoslash
import { type GetCollectionOwnersParams } from '@iexec/dataprotector';
```

### limit

`number | undefined`

```js
const collectionOwners = await dataProtectorSharing.getCollectionOwners({
  limit: 100, // [!code focus]
});
```

## Return value

```ts twoslash
import { type GetCollectionOwnersResponse } from '@iexec/dataprotector';
```
