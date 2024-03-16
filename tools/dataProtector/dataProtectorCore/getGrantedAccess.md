# getGrantedAccess

This method provides a listing of all access grants given for the specified
protected data object. It supports several optional parameters to restrict the
size of the result set. Options for filtering include specifying an authorized
user, an application, or both. You may optionally receive the results as a
paginated list.

## Usage

The request object is a JSON FetchGrantedAccessParams object. Each address in
the object is a String representation of an ethereum address or ENS name
(Ethereum Name Service) reference.

```js
const listGrantedAccess = await dataProtector.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  page: 1,
  pageSize: 100,
});
```

## Parameters

```ts
import { type GetGrantedAccessParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS | any | undefined`

Address of the protected data object for which you are querying access
authorization grants. It's a representation of ethereum address or ENS name
(Ethereum Name Service)

```js
const listGrantedAccess = await dataProtector.getGrantedAccess({
  protectedData: '0x123abc...', // [!code focus]
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  page: 1,
  pageSize: 100,
});
```

### authorizedApp

`AddressOrENS | any | undefined`

Optional filter to restrict the results to include only authorizations for the
specified application.It's a representation of ethereum address or ENS name
(Ethereum Name Service)

```js
const listGrantedAccess = await dataProtector.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789ghi...',
  page: 1,
  pageSize: 100,
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

### authorizedUser

`AddressOrENS | any | undefined`

Optional filter to restrict the results to include only authorizations for the
specified user.It's a String representation of ethereum address or ENS name
(Ethereum Name Service)

```js
const listGrantedAccess = await dataProtector.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...', // [!code focus]
  page: 1,
  pageSize: 100,
});
```

### page

`number | undefined`

Specifies the results page to return. The default for this is `0` which returns
all results. Pages are indexed starting at page 1. If using this field you may
also specify a `pageSize` to control the size of the results.

```js
const listGrantedAccess = await dataProtector.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  page: 1, // [!code focus]
  pageSize: 100,
});
```

### pageSize

`number | undefined`

Specifies the number of records in each page of the result set. This is used in
conjunction with the optional `page` parameter to constrain the size of the
result. The default for this value is `20` but this only comes into play when
specifying a `page` parameter.

```js
const listGrantedAccess = await dataProtector.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  page: 1,
  pageSize: 100, // [!code focus]
});
```

## Return value

```ts
import { type GrantedAccessResponse } from '@iexec/dataprotector';
```

The return value for this method has two fields: a `count` parameter indicating
the number of results, and an array of `GrantedAccess` objects containing all
access data. When using the optional paging parameters, the `count` will be
limited by the selected `pageSize` parameter. You may use these result objects
in conjunction with the [revokeOneAccess](revokeOneAccess.md) method to revoke a
previously granted authorization for access.

### count

`number`

An integer value indicating the number of results returned by this method. This
is of particular note when using paging as the number of records returned may be
smaller than the page size.

### grantedAccess

See [`GrantedAccess[]`](../types.md#grantedaccess)
