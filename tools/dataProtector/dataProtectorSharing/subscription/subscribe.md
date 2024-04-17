# subscribe

Method to subscribe to a collection that is available for subscription.

## Usage

```js
const { txHash } = await dataProtectorSharing.subscribe({
  collectionId: 12,
  price: 1,
  duration: 172800,
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
  price: 1,
  duration: 172800,
});
```

### price

`number`

Price of the rental for the protected data that you expect to rent. This
parameter ensures that you will not be front-run by the owner of the protected
data. The unit is in nano RLC (nRLC).

```js
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1, // [!code focus]
  duration: 172800,
});
```

### duration

`number`

Duration of the rental for the protected data that you expect to rent. This
parameter ensures that you will not be front-run by the owner of the protected
data. The unit is in seconds.

```js
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1,
  duration: 172800, // [!code focus]
});
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
