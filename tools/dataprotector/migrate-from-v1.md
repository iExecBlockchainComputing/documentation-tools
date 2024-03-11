# Migrate to V2

⚠️ This page concerns projects created with data protector prior or equal to version 0.5.1

## Constructor

When instantiating the IExecDataProtector object, reference the _dataProtector_ property to use core methods. Newer versions allow the use extended methods using the _dataProtectorSharing_ property.

```js
// 0.5.1 and before
const dataProtector = new IExecDataProtector(web3Provider);

// after 0.5.1
const dataProtector = new IExecDataProtector(web3Provider).dataProtector;
```

## Methods

### Method renaming

Some methods were renamed in order to standardize the SDK, they still provide the same functionalities as before

| Previous name      | New name         |
| ------------------ | ---------------- |
| fetchProtectedData | getProtectedData |
| fetchGrantedAccess | getGrantedAccess |

### Additional parameters

`getProtectedData` now takes a parameter _creationTimestampGte_ to filter elements created after a certain date
