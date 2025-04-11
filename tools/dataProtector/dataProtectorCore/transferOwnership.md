---
description:
  Transfer ownership of protected data to a new owner with iExec’s
  transferOwnership method. Securely update data ownership and automatically
  revoke previous access permissions.
---

# transferOwnership

Allows transferring ownership of a `protectedData` entity to a new owner,
identified by their ETH address. The return value provides a transaction hash
and confirmation of the new owner of the `protectedData`. Only the current owner
of the `protectedData` may invoke this method.

When transferring the `protectedData`, the grantedAccess created by the previous
owner are revoked automatically.

Ownership of the `protectedData` can be renounced by transferring it to the burn
address `0x000000000000000000000000000000000000dEaD`.

## Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const transferResponse = await dataProtectorCore.transferOwnership({
  protectedData: '0x123abc...',
  newOwner: '0xc5e9f4...',
});
```

## Parameters

```ts twoslash
import { type TransferParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

ETH address of the `protectedData` owned by you which is to be transferred to a
new owner.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const transferResponse = await dataProtectorCore.transferOwnership({
  protectedData: '0x123abc...', // [!code focus]
  newOwner: '0xc5e9f4...',
});
```

### newOwner <RequiredBadge />

**Type:** `AddressOrENS`

ETH address for the new owner for the `protectedData`.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const transferResponse = await dataProtectorCore.transferOwnership({
  protectedData: '0x123abc...',
  newOwner: '0xc5e9f4...', // [!code focus]
});
```

## Return value

```ts twoslash
import { type TransferResponse } from '@iexec/dataprotector';
```

The result of this method is an array of objects identifying the new owner. The
objects contain the three fields:

### address

`Address`

The ETH address of the `protectedData` you transferred.

### to

`AddressOrENS`

The ETH address of the new owner of the `protectedData`.

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).
