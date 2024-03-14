# revokeAllAccess

This method allows revoking authorizations granted to a `protectedData` entity. You may optionally specify application or user addresses for revocation. If you do not specify either of these optional values, this method will revoke all access for all users and applications.

## Usage

This method is asynchronous and requires use of the JavaScript observable pattern.

```js
const revokeAllAccessObservable = dataProtector
    .revokeAllAccess({
        protectedData: '0xA0C...'
        authorizedApp: '0xC2E...'
        authorizedUser: '0xecb...'
    })
```

## Parameters

```ts
import { type RevokeAllAccessParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

The address of the `protectedData` subject to access revocation.

```js
const revokeAllAccessObservable = dataProtector.revokeAllAccess({
  protectedData: '0xA0C...', // [!code focus]
  authorizedApp: '0xC2E...',
  authorizedUser: '0xecb...',
});
```

### authorizedApp

`AddressOrENS | any | undefined`

The application address to be removed from the authorization list for the specified `protectedData`.

```js
const revokeAllAccessObservable = dataProtector.revokeAllAccess({
  protectedData: '0xA0C...',
  authorizedApp: '0xC2E...', // [!code focus]
  authorizedUser: '0xecb...',
});
```

### authorizedUser

`AddressOrENS | any | undefined`

The user address to be removed from the authorization list for the specified `protectedData`.

```js
const revokeAllAccessObservable = dataProtector.revokeAllAccess({
  protectedData: '0xA0C...',
  authorizedApp: '0xC2E...',
  authorizedUser: '0xecb...', // [!code focus]
});
```

### onStatusUpdate

`OnStatusUpdateFn | undefined`

Callback function to be notified at intermediate steps.

```js
const revokeAllAccessObservable = dataProtector.revokeAllAccess({
  protectedData: '0xA0C...',
  authorizedApp: '0xC2E...',
  authorizedUser: '0xecb...',
  onStatusUpdate: ({ title, isDone }) => {
    // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

## Result

```ts
import { type AllAccessRevoked } from '@iexec/dataprotector';
```

### allAccessRevoked

[`GrantedAccess[]`](../glossary/types#grantedaccess)
