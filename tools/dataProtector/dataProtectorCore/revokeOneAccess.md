# revokeOneAccess

This method allows revoking a specific access authorization from a
`protectedData` entity. The input parameter for this method is sourced from the
[getGrantedAccess](getGrantedAccess.md) method, which provides a list of all
authorizations on single `protectedData` entity.

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

### grantedAccess

This is the complete [`GrantedAccess`](../types.md#grantedaccess) object retrieved from an invocation of
[`getGrantedAccess`](./getGrantedAccess.md).

**Type:** `GrantedAccess`  
**Required:** `True`

**Usage example:**

```ts twoslash
const revokeAccess = await dataProtectorCore.revokeOneAccess({
  ...  // GrantedAccess object
});
```

**See also:**

::: warning

You must always set the `tag` property to
`0x0000000000000000000000000000000000000000000000000000000000000003`. This
specific value indicates that the order is for a confidential asset (a protected
data).

:::

## Result value

```ts twoslash
import { type RevokedAccess } from '@iexec/dataprotector';
```

[`RevokedAccess`](../types.md#revokedaccess)
