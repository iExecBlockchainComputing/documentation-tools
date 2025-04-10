---
description:
  Revoke all or specific access permissions to protected data with iExec’s
  revokeAllAccess method. Efficiently manage data security by removing access
  from users or smart contract.
---

# revokeAllAccess

This method allows revoking authorizations granted to a `protectedData` entity.
You may optionally specify application or user addresses for revocation. If you
do not specify either of these optional values, this method will revoke all
access for all users and applications.

You must be the owner of the protected data.

Under the hood, all granted access will be retrieved and be revoked one by one.
If by any chance there were **more than 20 granted access** to be revoked, you
would need to call this `revokeAllAccess()` method more than once for all
granted access to be actually revoked. Use `getGrantedAccess()` to ensure it is
all done.

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

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

The address of the `protectedData` subject to access revocation.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...', // [!code focus]
});
```

### authorizedApp <OptionalBadge />

**Type:** `AddressOrENS`

The application address to be removed from the authorization list for the
specified `protectedData`. If no address is specified, it will revoke all access
from the protected data, regardless of the app.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789cba...',
});
```

### authorizedUser <OptionalBadge />

**Type:** `AddressOrENS`

The user address to be removed from the authorization list for the specified
`protectedData`. If no address is specified, it will revoke all access from the
protected data, regardless of the authorized user.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<RevokeAllAccessStatuses>`

Callback function to be notified at intermediate steps.

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
