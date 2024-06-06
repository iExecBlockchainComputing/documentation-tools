# revokeAllAccess

This method allows revoking authorizations granted to a `protectedData` entity.
You may optionally specify application or user addresses for revocation. If you
do not specify either of these optional values, this method will revoke all
access for all users and applications.

## Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
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

The address of the `protectedData` subject to access revocation.

**Type:** `AddressOrENS`  
**Required:** `True`

**Usage example:**

```ts twoslash
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...', // [!code focus]
  authorizedApp: '0x456def...',
```

### authorizedApp

The application address to be removed from the authorization list for the
specified `protectedData`.

**Type:** `AddressOrENS`  
**Required:** `False`  
**Default:** `any`

**Usage example:**

```ts twoslash
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789cba...',
```

### authorizedUser

The user address to be removed from the authorization list for the specified
`protectedData`.

**Type:** `AddressOrENS`  
**Required:** `False`  
**Default:** `any`

**Usage example:**

```ts twoslash
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

### onStatusUpdate

Callback function to be notified at intermediate steps.

**Type:** `OnStatusUpdateFn<ProcessProtectedDataStatuses>`  
**Required:** `False`

**Usage example:**

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'RETRIEVE_ALL_GRANTED_ACCESS';
'REVOKE_ONE_ACCESS';
```

Once with `isDone: false`, and then with `isDone: true`

## Result

```ts twoslash
import { type RevokedAccess } from '@iexec/dataprotector';
```

[`RevokedAccess[]`](../types.md#revokedaccess)
