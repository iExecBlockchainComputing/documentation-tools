---
description:
  Retrieve all granted access details for a protected data object with iExec’s
  getGrantedAccess method. Filter access by user, application, or both, and
  manage access with pagination.
---

# getGrantedAccess

This method provides a listing of all access grants given for the specified
protected data object. Options for filtering include specifying an authorized
user, an authorized app, or both.

## Usage

The request object is a JSON `GetGrantedAccessParams` object. Each address in
the object is a string representation of an ethereum address or ENS name
(Ethereum Name Service) reference.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  page: 1,
  pageSize: 100,
});
```

## Parameters

```ts twoslash
import { type GetGrantedAccessParams } from '@iexec/dataprotector';
```

### protectedData <OptionalBadge />

**Type:** `AddressOrENS`

Address of the protected data object for which you are querying access
authorization grants. It's a representation of ethereum address or ENS name
(Ethereum Name Service). If no address is specified, it will return all granted
access for any protected data.

**Usage example:**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...', // [!code focus]
});
```

### authorizedApp <OptionalBadge />

**Type:** `AddressOrENS`

Optional filter to restrict the results to include only authorizations for the
specified application. It's a representation of ethereum address or ENS name
(Ethereum Name Service). If no address is specified, it will return all granted
access for any application.

**Usage example:**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  authorizedApp: '0x456def...', // [!code focus]
});
```

::: tip

If you specified an application whitelist when using
[`grantAccess`](./grantAccess.md), you must specify that same whitelist address
when using this filtering option. The `getGrantedAccess` method does not check
against whitelist smart contracts when aggregating results. If you granted
authorization to a whitelist but specify an application address for the
`authorizedApp` parameter, you will not receive any results unless you _also_
explicitly granted access to that application address.

:::

### authorizedUser <OptionalBadge />

**Type:** `AddressOrENS`

Optional filter to restrict the results to include only authorizations for the
specified user. It's a string representation of ethereum address or ENS name
(Ethereum Name Service). If no address is specified, it will return all granted
access for any user.

**Usage example:**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  authorizedUser: '0x789cba...', // [!code focus]
});
```

### isUserStrict <OptionalBadge />

**Type:** `boolean`  
**Default:** `false`

Optional filter to restrict the results to include only authorizations for the
specified user. Authorizations made for `any` user are not returned.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  isUserStrict: true, // [!code focus]
});
```

### page <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Specifies the page number of the result set to return. Pages are zero-based
indexed, with the default value being `0`, indicating the first page. If used,
you can also specify the `pageSize` parameter to control the number of records
per page. By default, when no page number is specified, the system returns the
first page (page 0) containing `20` elements.

**Usage example:**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  page: 1, // [!code focus]
  pageSize: 100,
});
```

### pageSize <OptionalBadge />

**Type:** `number`  
**Default:** `20`  
**Range:** `[10...1000]`

Specifies the number of records to include in each page of the result set. This
is used in conjunction with the optional `page` parameter to limit the size of
each page.

**Usage example:**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  page: 1,
  pageSize: 100, // [!code focus]
});
```

## Return value

```ts twoslash
import { type GrantedAccessResponse } from '@iexec/dataprotector';
```

The return value for this method has two fields: a `count` parameter indicating
the number of results, and an array of `GrantedAccess` objects containing all
access data. When using the optional paging parameters, the `count` will be
limited by the selected `pageSize` parameter. You may use these result objects
in conjunction with the [revokeOneAccess](revokeOneAccess.md) method to revoke a
previously granted authorization for access.

### count

**Type:** `number`

An integer value indicating the number of results returned by this method. This
is of particular note when using paging as the number of records returned may be
smaller than the page size.

### grantedAccess

**Type:** GrantedAccess

See [`GrantedAccess`](../types.md#grantedaccess)
