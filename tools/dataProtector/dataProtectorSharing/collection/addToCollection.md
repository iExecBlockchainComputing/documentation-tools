---
description:
  Transfer a protected data to one of your collections in the Data Sharing smart
  contract. The method approves the contract to manage the data and adds it to
  the specified collection.
---

# addToCollection

Method to transfer one of your protected data to a collection of yours in the
Data Sharing smart contract.

Under the hood, this method performs two actions:

- Approve the Data Sharing smart contract to manage your protected data.
- Add the protected data to your collection.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.addToCollection({
  protectedData: '0x123abc...',
  collectionId: 12,
  addOnlyAppWhitelist: '0x541abc...',
});
```

## Parameters

```ts twoslash
import { type AddToCollectionParams } from '@iexec/dataprotector';
```

### collectionId <RequiredBadge />

**Type:** `number`

Collection ID to which you'd like to add the protected data.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12, // [!code focus]
  protectedData: '0x123abc...',
  addOnlyAppWhitelist: '0x541abc...',
});
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to add to your collection.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12,
  protectedData: '0x123abc...', // [!code focus]
  addOnlyAppWhitelist: '0x541abc...',
});
```

Before any smart contract interaction, the existence of the protected data will
be checked, as well as the ownership: it should be the wallet address you used
to instantiate DataProtector SDK.

### addOnlyAppWhitelist <RequiredBadge />

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
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12,
  protectedData: '0x123abc...',
  addOnlyAppWhitelist: '0xba46d6...', // [!code focus]
});
```

::: tip

For this `addOnlyAppWhitelist`, you are free to use
`0x256bcd881c33bdf9df952f2a0148f27d439f2e64`.

For more details on how to create and manage appsWhitelist, see
[Apps whitelist](../../advanced/apps-whitelist).

:::

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<AddToCollectionStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.addToCollection({
  protectedData: '0x123abc...',
  collectionId: 12,
  addOnlyAppWhitelist: '0xba46d6...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'APPROVE_COLLECTION_CONTRACT';
'ADD_PROTECTED_DATA_TO_COLLECTION';
```

Once with `isDone: false`, and then with `isDone: true`

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
