# Migrate from v1 to v2

::: tip

This page concerns projects created with data protector prior or equal to
version 0.5.1

:::

## Constructor

When instantiating the IExecDataProtector object, reference the _dataProtector_
property to use core methods. Newer versions allow the use extended methods
using the _dataProtectorSharing_ property.

```js
// 0.5.1 and before
const dataProtector = new IExecDataProtector(web3Provider); // [!code --]

// after 0.5.1
const dataProtector = new IExecDataProtector(web3Provider).dataProtector; // [!code ++]
// or
const { dataProtector } = new IExecDataProtector(web3Provider); // [!code ++]
```

## Methods

### Rename `fetchProtectedData` & add new param

Some methods were renamed in order to standardize the SDK, they still provide
the same functionalities as before

```js
await dataProtector.fetchProtectedData({ // [!code --]
await dataProtector.getProtectedData({ // [!code ++]
  owner: '0xA0c15z...',
  creationTimestampGte: 1707237580, // Feb 6th, 2024 16:39:40 GMT // [!code ++]
});
```

### Rename `fetchGrantedAccess`

Some methods were renamed in order to standardize the SDK, they still provide
the same functionalities as before

```js
await dataProtector.fetchGrantedAccess({ // [!code --]
await dataProtector.getGrantedAccess({ // [!code ++]
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  owner: '0xA0c15z...',
});
```
