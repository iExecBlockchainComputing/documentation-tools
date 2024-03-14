# buyProtectedData

Method to buy a protected data that is for sale.

"Buying" here means to get ownership of the protected data.

After buying a protected data, you'll be free to distribute it again at your own terms, or
to keep it for yourself.

## Usage

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedDataAddress: "0x123abc...",
});
```

## Parameters

```ts
import { type BuyProtectedDataParams } from "@iexec/dataprotector";
```

### protectedDataAddress

`AddressOrENS`

Address of the protected data you'd like to buy.

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedDataAddress: "0x123abc...", // [!code focus]
});
```

### collectionTokenIdTo

`number | undefined`

Collection token id to which you'd like to transfer the ownership of the protected data.  
The Data Sharing smart-contract will still be the technical owner of the protected data, but you'll
still fully own it as you own the collection to which it'll transferred.

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedDataAddress: "0x123abc...",
  collectionTokenIdTo: 12, // [!code focus]
  appAddress: "0xdef456...",
});
```

### appWhitelist

`AddressOrENS | undefined`

The whitelist smart contract containing application that will be set to consume your new protected data in your your collection.

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedDataAddress: "0x123abc...",
  collectionTokenIdTo: 12,
  appAddress: "0xdef456...", // [!code focus]
});
```

## Return value

```ts
import { type SuccessWithTransactionHash } from "@iexec/dataprotector";
```

### txHash

`string`

The transaction hash corresponding to the execution of the function.
