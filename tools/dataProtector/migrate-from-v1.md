# Migrate from v1 to v2

::: tip

This page concerns projects created with data protector prior or equal to
version 0.5.1

:::

## Constructor

The instantiation process has been updated to accommodate new modular
architecture introduced in version 2. This change allows for more flexibility
and enables the use of specific functionalities tailored to the developers'
needs.

When instantiating the IExecDataProtector object, reference the _dataProtector_
property to use core methods. Newer versions allow the use extended methods
using the _dataProtectorSharing_ property.

```js
import {
  IExecDataProtector,
  IExecDataProtectorCore,
} from '@iexec/dataprotector';

// 0.5.1 and before
const dataProtector = new IExecDataProtector(web3Provider); // [!code --]

// AFTER 0.5.1
// with Umbrella Module
const dataProtector = new IExecDataProtector(web3Provider).dataProtector; // [!code ++]
// Or with Core Module
const dataProtector = new IExecDataProtectorCore(web3Provider); // [!code ++]
```

## Methods

### Rename `fetchProtectedData` & add new param

Some methods were renamed in order to standardize the SDK, they still provide
the same functionalities as before

```js
await dataProtector.fetchProtectedData({ // [!code --]
await dataProtector.getProtectedData({ // [!code ++]
  owner: "0xA05...",
  creationTimestampGte: "545645" // [!code ++]
});
```

### Rename `fetchGrantedAccess`

Some methods were renamed in order to standardize the SDK, they still provide
the same functionalities as before

```js
await dataProtector.fetchGrantedAccess({ // [!code --]
await dataProtector.getGrantedAccess({ // [!code ++]
  protectedData: "0xA0C...",
  authorizedApp: "0x1f9...",
  owner: "0xA05...",
});
```

### Removed `protectDataObservable`

The `protectDataObservable` function has been removed and its functionality has
been integrated into the `protectData` method with a new optional parameter.
This parameter is a callback function that provides status updates during the
data protection process. This change simplifies the API and enhances flexibility
in handling the protection process's status updates.

<!-- prettier-ignore-start -->
```js
const protectedData = await dataProtector.protectData({
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

Similarly, the `revokeAllAccessObservable` method has been for `revokeAllAccess`
which do the same thing as `revokeAllAccessObservable` but include an optional
callback function parameter. This callback allows developers to receive feedback
about the revocation process's status, providing more control and better
handling of the process.

<!-- prettier-ignore-start -->
```js
const allAccessRevoked = await dataProtector.revokeAllAccess({
  protectedData: "0xA0C...",
  onStatusUpdate: ({ title, isDone }) => { // [!code ++]
    console.log(title, isDone); // [!code ++]
  }, // [!code ++]
});

```
<!-- prettier-ignore-end -->

::: tip

The introduction of callback functions in protectData and revokeAllAccess
methods allows for real-time status updates, making the data protection and
access revocation processes more interactive and manageable.

:::
