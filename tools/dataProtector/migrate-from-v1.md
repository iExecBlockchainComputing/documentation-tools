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
```

## Methods

### Rename `fetchProtectedData` & add new param

Some methods were renamed in order to standardize the SDK, they still provide
the same functionalities as before

```js
await dataProtector.fetchProtectedData({ // [!code --]
await dataProtector.getProtectedData({ // [!code ++]
  owner: "0xA0...",
  creationTimestampGte: "545645" // [!code ++]
});
```

### Rename `fetchGrantedAccess`

Some methods were renamed in order to standardize the SDK, they still provide
the same functionalities as before

```js
await dataProtector.fetchGrantedAccess({ // [!code --]
await dataProtector.getGrantedAccess({ // [!code ++]
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  owner: "0xA0...",
});
```
