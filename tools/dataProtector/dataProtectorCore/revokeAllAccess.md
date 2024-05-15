# revokeAllAccess

This method allows revoking authorizations granted to a `protectedData` entity.
You may optionally specify application or user addresses for revocation. If you
do not specify either of these optional values, this method will revoke all
access for all users and applications.

## Usage

```js
const revokeAllAccessResult = await dataProtector.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

## Parameters

```ts twoslash
import { type RevokeAllAccessParams } from '@iexec/dataprotector';
```

### protectedData

`AddressOrENS`

The address of the `protectedData` subject to access revocation.

```js
const revokeAllAccessResult = await dataProtector.revokeAllAccess({
  protectedData: '0x123abc...', // [!code focus]
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

### authorizedApp

`AddressOrENS | 'any' | undefined`

_default_: `any`

The application address to be removed from the authorization list for the
specified `protectedData`.

```js
const revokeAllAccessResult = await dataProtector.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789cba...',
});
```

### authorizedUser

`AddressOrENS | 'any' | undefined`

_default_: `any`

The user address to be removed from the authorization list for the specified
`protectedData`.

```js
const revokeAllAccessResult = await dataProtector.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

### onStatusUpdate

`OnStatusUpdateFn<RevokeAllAccessStatuses> | undefined`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```js
const revokeAllAccessResult = await dataProtector.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

## Result

```ts twoslash
import { type RevokedAccess } from '@iexec/dataprotector';
```

[`RevokedAccess[]`](../types.md#revokedaccess)
