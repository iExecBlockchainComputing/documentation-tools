# subscribe

Method to subscribe to a collection that is available for subscription.

## Usage

```js
const { txHash } = await dataProtectorSharing.subscribe({
  collectionId: 12,
});
```

## Parameters

```js
import { type SubscribeParams } from "@iexec/dataprotector";
```

### collectionId

`number`

Collection ID to which you'd like to subscribe.

```js
const { txHash } = await dataProtectorSharing.subscribe({
  collectionId: 12, // [!code focus]
});
```

## Return value

```js
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.

## Error

TODO
