---
description:
  Allows a user to purchase protected data that is listed for sale. Upon
  successful purchase, the buyer gains full ownership and can distribute or keep
  the data as desired.
---

# buyProtectedData

Method to buy a protected data that is for sale.

"Buying" here means to get ownership of the protected data.

After buying a protected data, you'll be free to distribute it again at your own
terms, or to keep it for yourself.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
});
```

## Parameters

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
import { type BuyProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to buy.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...', // [!code focus]
  price: 1,
});
```

### price <RequiredBadge />

**Type:** `number`

Price of the protected data that you expect to buy. This parameter ensures that
you will not be front-run by the owner of the protected data. The unit is in
nano RLC (nRLC).

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1, // [!code focus]
});
```

### addToCollectionId <OptionalBadge />

**Type:** `number`

Collection ID to which you'd like to transfer the ownership of the protected
data.  
The Data Sharing smart contract will still be the technical owner of the
protected data, but you'll fully own it as you own the collection to which it'll
transferred. If you use this param the `addOnlyAppWhitelist` is mandatory
because you must specify which `addOnlyAppWhitelist` will be able to consume
your protected data.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
  addToCollectionId: 12, // [!code focus]
  addOnlyAppWhitelist: '0xdef456...',
});
```

### addOnlyAppWhitelist <OptionalBadge />

**Type:** `AddressOrENS`

Address of the whitelist smart contract that contains applications allowed to
consume the protected data.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
  addToCollectionId: 12,
  addOnlyAppWhitelist: '0xdef456...', // [!code focus]
});
```

::: tip

For this `addOnlyAppWhitelist`, you are free to use
`0x256bcd881c33bdf9df952f2a0148f27d439f2e64` that contains apps created for the
purpose of Content Creator usecase-demo. This `addOnlyAppWhitelist` is managed
by iExec.

For more details on how to create and manage appsWhitelist, see
[Apps whitelist](../../advanced/apps-whitelist).

:::

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
