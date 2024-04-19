# buyProtectedData

Method to buy a protected data that is for sale.

"Buying" here means to get ownership of the protected data.

After buying a protected data, you'll be free to distribute it again at your own
terms, or to keep it for yourself.

## Usage

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
});
```

## Parameters

```ts twoslash
import { type BuyProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

Address of the protected data you'd like to buy.

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...', // [!code focus]
  price: 1,
});
```

### price

`number`

Price of the protected data that you expect to buy. This parameter ensures that
you will not be front-run by the owner of the protected data. The unit is in
nano RLC (nRLC).

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1, // [!code focus]
});
```

### addToCollectionId

`number | undefined`

Collection ID to which you'd like to transfer the ownership of the protected
data.  
The Data Sharing smart contract will still be the technical owner of the
protected data, but you'll fully own it as you own the collection to which it'll
transferred. If you use this param the `addOnlyAppWhitelist` is mandatory
because you must specify which `addOnlyAppWhitelist` will be able to consume
your protected data.

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
  addToCollectionId: 12, // [!code focus]
  appAddress: '0xdef456...',
});
```

### addOnlyAppWhitelist

`AddressOrENS | undefined`

Address of the whitelist smart contract that contains applications allowed to
consume the protected data.

```js
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
  addToCollectionId: 12,
  appAddress: '0xdef456...', // [!code focus]
});
```

::: tip

For this `addOnlyAppWhitelist`, you are free to use
`0x1099844c74f6a2be20dbe1aa2afb3a1d29421aed` that contains apps created for the
purpose of Content Creator usecase-demo. This `addOnlyAppWhitelist` is managed
by iExec.

:::

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
