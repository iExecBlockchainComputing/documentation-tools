# grantAccess

Data encrypted through the Data Protector tool requires explicit authorization
for runtime access. A newly created `protectedData` object has no inherent
authorizations. This method grants permission to securely access the specified
`protectedData` for processing using the `processProtectedData` method.
Authorization to use the `protectedData` is given to a user in the context of an
application (or a designated list of applications).

## Usage

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  pricePerAccess: 3,
  numberOfAccess: 10,
  onStatusUpdate: ({ title, isDone }) => {
    console.log(title, isDone);
  },
});
```

## Parameters

```ts
import { type GrantAccessParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

The ethereum address of the protected data supplied by the user.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: '0x123abc...', // [!code focus]
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
});
```

### authorizedApp

`AddressOrENS`

The address of the application you wish to authorize to process the
`protectedData` within a secure execution environment. You may specify either a
single application or an application whitelist. To specify a whitelist, you
provide the ETH address of an
[iExec Whitelist Smart Contract](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/tree/main).
This smart contract aggregates multiple application versions. This allows you to
introduce new versions of your application without needing to grant access for
the `protectedData` each time you do so.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789ghi...',
});
```

::: tip

You may authorize all apps to use the protected data by setting this to
**0x00000000000000000000000000000000000000**

iExec maintains a whitelist for the Web3Mail decentralized application. Granting
access to this whitelist allows use of an email `protectedData` with all
versions of the Web3Mail application, ensuring you only have to grant this
access once. The ETH address for this whitelist is
**0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e**

:::

### authorizedUser

`AddressOrENS`

The address of the user you wish to authorize to use the `protectedData`. Note
that these users may not view or manipulate the data. This only grants
permission for the user to submit the data to an iExec application.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...', // [!code focus]
});
```

::: tip

You may authorize all users to use the protected data by setting this to
**0x00000000000000000000000000000000000000**

:::

### pricePerAccess

`number | undefined`

Allows specifying an optional nano RLC cost associated with every access of the
protected data.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  pricePerAccess: 3, // [!code focus]
  numberOfAccess: 10,
});
```

Default: `1`

### numberOfAccess

`number | undefined`

Allows optionally restricting the number of times the protected data may be
processed and used.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  pricePerAccess: 3,
  numberOfAccess: 10, // [!code focus]
});
```

Default: `1`

### onStatusUpdate

`OnStatusUpdateFn<GrantAccessStatuses> | undefined`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789ghi...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called four times:

1️⃣

```json
{
  "title": "CREATE_DATASET_ORDER",
  "isDone": false
}
```

2️⃣

```json
{
  "title": "CREATE_DATASET_ORDER",
  "isDone": true
}
```

3️⃣

```json
{
  "title": "PUBLISH_DATASET_ORDER",
  "isDone": false
}
```

4️⃣

```json
{
  "title": "PUBLISH_DATASET_ORDER",
  "isDone": true
}
```

## Return value

```ts
import { type GrantedAccess } from '@iexec/dataprotector';
```

The result of this method confirms the new access grant. It consists of a JSON
`grantedAccess` object.

[`GrantedAccess`](../types.md#grantedaccess)