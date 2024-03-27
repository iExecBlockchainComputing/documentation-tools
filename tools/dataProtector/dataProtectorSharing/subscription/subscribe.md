# subscribe

Method to subscribe to a collection that is available for subscription.

## Usage

```js
const { txHash } = await dataProtectorSharing.subscribe({
  collectionId: 12,
});
```

## Parameters

```ts twoslash
import { type SubscribeToCollectionParams } from '@iexec/dataprotector';
```

### collectionId

`number`

Collection ID to which you'd like to subscribe.

```js
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12, // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
