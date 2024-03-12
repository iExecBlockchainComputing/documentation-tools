# addToCollection

Method to transfer one of your protected data to a collection of yours in the Data Sharing
smart-contract.

Under the hood, this method performs two actions:

- Approve the Data Sharing smart-contract to transfer the protected data.
- Add the protected data to your collection.

## Usage

```js
const { txHash } = await dataProtectorSharing.addToCollection({
  protectedDataAddress: "0x123abc...",
  collectionId: 12,
});
```

## Parameters

```js
import { type AddToCollectionParams } from "@iexec/dataprotector";
```

### collectionId

`number`

Collection ID to which you'd like to add the protected data.

```js
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12, // [!code focus]
  protectedDataAddress: "0x123abc...",
});
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to add to your collection.

```js
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12,
  protectedDataAddress: "0x123abc...", // [!code focus]
});
```

Before any smart-contract interaction, the existence of the protected data will be checked,
as well as the ownership: it should be the wallet address you used to instantiate
DataProtector SDK.

### appWhitelist

`AddressOrENS | undefined`

Address of the whitelist smart contract that contains applications able to consume the protected data.

```js
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12,
  protectedDataAddress: "0x123abc...",
  appWhitelist: "0x423abc...", // [!code focus]
});
```

### onStatusUpdate

`OnStatusUpdateFn<'APPROVE_COLLECTION_CONTRACT' | 'ADD_PROTECTED_DATA_TO_COLLECTION'> | undefined`

Callback function to be notified at intermediate steps.

```js
const { txHash } = await dataProtectorSharing.addToCollection({
  protectedDataAddress: "0x123abc...",
  collectionId: 12,
  onStatusUpdate: ({ title, isDone }) => {
    // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

You can expect this callback function to be called four times:

1️⃣

```json
{
  "title": "APPROVE_COLLECTION_CONTRACT",
  "isDone": false
}
```

2️⃣

```json
{
  "title": "APPROVE_COLLECTION_CONTRACT",
  "isDone": true
}
```

3️⃣

```json
{
  "title": "ADD_PROTECTED_DATA_TO_COLLECTION",
  "isDone": false
}
```

4️⃣

```json
{
  "title": "ADD_PROTECTED_DATA_TO_COLLECTION",
  "isDone": true
}
```

## Return value

```js
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

The transaction hash of the function action.

```json
{
  "txHash": "0x33..."
}
```

## Error

TODO
