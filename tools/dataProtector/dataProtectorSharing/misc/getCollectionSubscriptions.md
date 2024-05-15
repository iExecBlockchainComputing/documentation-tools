# getCollectionSubscriptions

Method to get all subscriptions for:

- a specific collection
- a specific user

## Usage

```js
const collectionActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    collectionId: 9,
  });
```

## Parameters

```ts twoslash
import { type GetCollectionSubscriptionsParams } from '@iexec/dataprotector';
```

### subscriberAddress

`AddressOrENS | undefined`

```js
const userActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    subscriberAddress: '0x246bdf...', // [!code focus]
  });
```

### collectionId

`number | undefined`

```js
const collectionActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    collectionId: 9, // [!code focus]
  });
```

### includePastSubscriptions

`boolean | undefined`

_default_: `false`

```js
const userRentals = await dataProtectorSharing.getCollectionSubscriptions({
  subscriberAddress: '0x246bdf...',
  includePastSubscriptions: true, // [!code focus]
});
```

## Return value

```ts twoslash
import { type GetCollectionSubscriptionsResponse } from '@iexec/dataprotector';

// Child types
// Wait for next beta version to export this type
// import { type CollectionSubscription } from '@iexec/dataprotector';
```
