# getCollectionSubscriptions

Method to get all subscriptions (active & past) for a collection.

## Usage

```js
const protectedData = await dataProtectorSharing.getCollectionSubscriptions({
  collectionTokenId: 9,
});
```

## Parameters

```ts
import { type GetCollectionSubscriptionsParams } from '@iexec/dataprotector';
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
import { type GetCollectionSubscriptionsResponse } from '@iexec/dataprotector';
```

### collectionSubscriptions

[`CollectionSubscription[]`](../../types.md#collectionsubscription)
