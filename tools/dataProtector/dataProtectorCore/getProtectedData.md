# getProtectedData

This method allows the user to retrieve all protected data for a given owner, data schema, or both. Only protected data objects the invoker has permissions to access are included in the result set. You must include at least one of the optional parameters when invoking this method.

::: tip
A data schema is the metadata describing the contents of the protected data object. The schema is returned as part of the [protectedData](protectData.md) method invocation.
:::

## Usage

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: "0xA0C...",
  schema: {
    email: "string",
    avatar: "JPEG",
    smtp: {
      server: "string",
      port: "number",
    },
  },
});
```

## Parameters

```ts
import { type GetProtectedDataParams } from "@iexec/dataprotector";
```

### requiredSchema

`DataSchema | undefined`

Provides a list of protected data objects matching this schema.

```js
const listProtectedData = await dataProtector.getProtectedData({
  schema: {
    // [!code focus]
    email: "string", // [!code focus]
    avatar: "JPEG", // [!code focus]
    smtp: {
      // [!code focus]
      server: "string", // [!code focus]
      port: "number", // [!code focus]
    }, // [!code focus]
  },
});
```

### owner

`AddressOrENS | undefined`

Provides a list of protected data objects owned by the user with this ETH address.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: "0xA0Cf...", // [!code focus]
});
```

### createdAfterTimestamp

`number | undefined`

Provides a list of protected data objects created after this timestamp value. The provided value should be in seconde.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: "0xA0Cf...",
  createdAfterTimestamp: "1710257612", // [!code focus]
});
```

### page

`number | undefined`

Specifies the results page to return. The default for this is `0` which returns all results. Pages are indexed starting at page 1. If using this field you may also specify a `pageSize` to control the size of the results.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: "0xA0Cf...",
  createdAfterTimestamp: "1710257612",
  page: 1, // [!code focus]
});
```

### pageSize

`number | undefined`

Specifies the number of records in each page of the result set. This is used in conjunction with the optional `page` parameter to constrain the size of the result. The default for this value is `20` but this only comes into play when specifying a `page` parameter.

```js
const listProtectedData = await dataProtector.getProtectedData({
  owner: "0xA0Cf...",
  createdAfterTimestamp: "1710257612",
  page: 1,
  pageSize: 100, // [!code focus]
});
```

## Return value

```ts
import { type ProtectedData } from "@iexec/dataprotector";
```

`ProtectedData[]`

The `name` and `address` fields in the result object(s) represent the name provided when creating the protected data and the eth address respectively. This method also returns the owner and associated data schema, regardless of which invocation method is used.

This method returns an array of objects containing the protectedData information queried. Each object contains the following parameters:

### name

`string`

Name specified when the protected data was created. This information is public and visible on-chain.

### address

`Address`

Ethereum address of the protected data.

### owner

`Address`

Ethereum address of the protected data owner.

### schema

`DataSchema`

Data schema for the protected data as defined when the protected data was created (see [protectedData](protectData.md)). `schema` provides a structured representation of the protected data format and attributes. This field plays a crucial role in understanding and interpreting the underlying structure of the sensitive information.

### creationTimestamp

`number`

Timestamp specifying when the protected data was created, expressed in milliseconds since the epoch. This timestamp provides precise information about the moment of creation and can be used for chronological ordering or time-based operations.
