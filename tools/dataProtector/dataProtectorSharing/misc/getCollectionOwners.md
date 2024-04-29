# getCollectionOwners

Method to get all collection owners.

Results are ordered by `CollectionOwner.id` asc.

<Badge type="tip" text="Soon" /> Results will be ordered by

<p style="margin-top: 0"><code>CollectionOwner.collections.creationTimestamp</code> desc.</p>

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

_default_: `100`

Value between `1` and `1000`.

```js
const collectionOwners = await dataProtectorSharing.getCollectionOwners({
  limit: 100, // [!code focus]
});
```

## Return value

```ts twoslash
import type {
  GetCollectionOwnersResponse,
  CollectionOwner,
} from '@iexec/dataprotector';
```
