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

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const listProtectedData = await dataProtectorCore.getProtectedData({
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

**Type:** `SearchableDataSchema`

Provides a list of protected data objects matching this schema.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const listProtectedData = await dataProtectorCore.getProtectedData({
  requiredSchema: { // [!code focus]
    email: 'string', // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

### owner

**Type:** `AddressOrENS`

Provides a list of protected data objects owned by the user with this ETH
address.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...', // [!code focus]
});
```

### createdAfterTimestamp

**Type:** `number`

Provides a list of protected data objects created after this timestamp value.
The provided value should be in seconds.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT // [!code focus]
});
```

### page

**Type:** `number`

Specifies the results page to return. The default for this is `0` which returns
all results. Pages are indexed starting at page 1. If using this field you may
also specify a `pageSize` to control the size of the results.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT
  page: 1, // [!code focus]
});
```

### pageSize

**Type:** `number`  
**Default:** `20`  
**Range:** `[10...1000]`

Specifies the number of records in each page of the result set. This is used in
conjunction with the optional `page` parameter to constrain the size of the
result.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const listProtectedData = await dataProtectorCore.getProtectedData({
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

See [`ProtectedData`](../types.md#protecteddata)
