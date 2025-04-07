---
description:
  Follow this guide to migrate your DataProtector project from v1 to v2beta with
  the latest npm package
---

# Migrate from v1 to v2 <span style="margin-left: 12px; position: absolute; top: -2px;"><Badge type="warning" text="beta" /></span>

::: tip

This page concerns projects created with DataProtector prior or equal to version
1.0.0

:::

```sh
npm install @iexec/dataprotector@latest
```

## Constructor

The instantiation process has been updated to accommodate **new modular
architecture** introduced in version 2. This change allows for more flexibility
and enables the use of specific functionalities tailored to the developers'
needs.

When instantiating the IExecDataProtector object, reference the _dataProtector_
property to use core methods. Newer versions allow to use extended methods using
the _dataProtectorSharing_ property.

```js
// 1.0.0 and before
const dataProtector = new IExecDataProtector(web3Provider); // [!code --]

// AFTER 2.0.0
// with Umbrella Module
const dataProtector = new IExecDataProtector(web3Provider).dataProtector; // [!code ++]
// Or with Core Module
const dataProtector = new IExecDataProtectorCore(web3Provider); // [!code ++]
```

## Methods

Some methods were renamed in order to standardize the SDK, they still provide
the same functionalities as before.

### Rename `fetchProtectedData` & add new filtering param

```js
await dataProtector.fetchProtectedData({ // [!code --]
await dataProtector.getProtectedData({ // [!code ++]
  owner: '0xa0c15e...',
  creationTimestampGte: 1707237580, // Feb 6th, 2024 16:39:40 GMT // [!code ++]
});
```

### Rename `fetchGrantedAccess`

```js
await dataProtector.fetchGrantedAccess({ // [!code --]
await dataProtector.getGrantedAccess({ // [!code ++]
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  owner: '0xa0c15e...',
});
```

### Removed `protectDataObservable`

The `protectDataObservable` function has been removed and its functionality has
been integrated into the `protectData` method with a new optional parameter.
This parameter is a callback function that provides status updates during the
data protection process. This change simplifies the API and enhances flexibility
in handling the protection process status updates.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
  onStatusUpdate: ({ title, isDone }) => { // [!code ++]
    console.log(title, isDone); // [!code ++]
  }, // [!code ++]
});
```
<!-- prettier-ignore-end -->

### Removed `revokeAllAccessObservable`

Similarly, the `revokeAllAccessObservable` method has been replaced for
`revokeAllAccess` which does the same thing as `revokeAllAccessObservable` but
includes an optional callback function parameter. This callback allows
developers to receive feedback about the revocation status of the process,
providing more control and better handling of the process.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const allAccessRevoked = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  onStatusUpdate: ({ title, isDone }) => { // [!code ++]
    console.log(title, isDone); // [!code ++]
  }, // [!code ++]
});

```
<!-- prettier-ignore-end -->

::: tip

The introduction of callback functions in `protectData` and `revokeAllAccess`
methods allows for real-time status updates, making the data protection and
access revocation processes more interactive and manageable.

:::

## Protected Data Schema

The serialization of the data protected by `protectData()` has been changed to
support a wider range of numbers, and extend the support for processing
protected data in non-JS-based applications.

The new serialization mechanism is based on the [borsh](https://borsh.io/)
specification.

Consequently, the data schemas associated with protected data have changed.

| data type | v1 data schema                                  | v2 data schema                                 |
| --------- | ----------------------------------------------- | ---------------------------------------------- |
| boolean   | `"boolean"`                                     | `"bool"`                                       |
| number    | `"number"` </br> restricted to JS safe integers | `"f64"`                                        |
| bigint    | not supported                                   | `"i128"` </br> restricted to 128 bits integers |
| string    | `"string"`                                      | `"string"`                                     |
| binary    | detected mime type                              | detected mime type                             |
