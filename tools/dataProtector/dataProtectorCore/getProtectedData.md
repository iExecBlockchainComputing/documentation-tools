# getProtectedData

This method allows the user to retrieve all protected data for a given owner,
data schema, or both. Only protected data objects the invoker has permissions to
access are included in the result set. You must include at least one of the
optional parameters when invoking this method.

::: tip

A data schema is the metadata describing the contents of the protected data
object. The schema is returned as part of the [protectedData](protectData.md)
method invocation.

:::

## Usage

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: '0xa0c15e...',
  requiredSchema: {
    email: 'string',
  },
});
```

## Parameters

```ts twoslash
import { type GetProtectedDataParams } from '@iexec/dataprotector';
```

### requiredSchema

`DataSchema | undefined`

Provides a list of protected data objects matching this schema.

```js
const listProtectedData = await dataProtector.getProtectedData({
  requiredSchema: {
    // [!code focus]
    email: 'string', // [!code focus]
  },
});
```

### owner

`AddressOrENS | undefined`

Provides a list of protected data objects owned by the user with this ETH
address.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: '0xa0c15e...', // [!code focus]
});
```

### createdAfterTimestamp

`number | undefined`

Provides a list of protected data objects created after this timestamp value.
The provided value should be in seconde.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT // [!code focus]
});
```

### page

`number | undefined`

Specifies the results page to return. The default for this is `0` which returns
all results. Pages are indexed starting at page 1. If using this field you may
also specify a `pageSize` to control the size of the results.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT
  page: 1, // [!code focus]
});
```

### pageSize

`number | undefined`

Specifies the number of records in each page of the result set. This is used in
conjunction with the optional `page` parameter to constrain the size of the
result. The default for this value is `20` but this only comes into play when
specifying a `page` parameter.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT
  page: 1,
  pageSize: 100, // [!code focus]
});
```

## Return value

```ts twoslash
import { type ProtectedData } from '@iexec/dataprotector';
```

[`ProtectedData[]`](../types.md#protecteddata)
