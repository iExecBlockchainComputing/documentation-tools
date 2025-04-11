---
description:
  Revoke specific access permissions to protected data with iExec’s
  revokeOneAccess method. Manage and remove access granted to users or
  applications through blockchain transactions.
---

# revokeOneAccess

This method allows revoking a specific access authorization from a
`protectedData` entity. The input parameter for this method is sourced from the
[getGrantedAccess](getGrantedAccess.md) method, which provides a list of all
authorizations on single `protectedData` entity.

As this will generate a blockchain transaction, expect it to take a least 5sec
(a block time).

## Usage

The `revokeOneAccess` method requires a `grantedAccess` object as an input
parameter. This object is retrieved from the
[`getGrantedAccess`](./getGrantedAccess.md) method.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAccess = await dataProtectorCore.revokeOneAccess({
  apprestrict: '0xea...',
  dataset: '0xA0C...',
  datasetprice: '0',
  requesterrestrict: '0xecb..',
  salt: '0x0147...',
  sign: '0xc22c1...',
  tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
  volume: '1',
  workerpoolrestrict: '0x000...',
});
```

## Parameters

```ts twoslash
import { type GrantedAccess } from '@iexec/dataprotector';
```

### grantedAccess <RequiredBadge />

**Type:** `GrantedAccess`

This is the complete `granted access` object retrieved from an invocation of
`getGrantedAccess`.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAccess = await dataProtectorCore.revokeOneAccess({
  apprestrict: '0xea...', // [!code focus]
  dataset: '0xA0C...', // [!code focus]
  datasetprice: '0', // [!code focus]
  requesterrestrict: '0xecb..', // [!code focus]
  salt: '0x0147...', // [!code focus]
  sign: '0xc22c1...', // [!code focus]
  tag: '0x0000000000000000000000000000000000000000000000000000000000000003', // [!code focus]
  volume: '1', // [!code focus]
  workerpoolrestrict: '0x000...', // [!code focus]
});
```

::: warning

The tag must always be set to
`0x0000000000000000000000000000000000000000000000000000000000000003`. This
specific value indicates that the order is for a confidential asset (a protected
data).

:::

## Result value

```ts twoslash
import { type RevokedAccess } from '@iexec/dataprotector';
```

[`RevokedAccess`](../types.md#revokedaccess)
