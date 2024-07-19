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

`AddressOrENS`

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

### authorizedApp

`AddressOrENS | undefined`

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

### authorizedUser

`AddressOrENS | undefined`

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

### onStatusUpdate

`OnStatusUpdateFn<RevokeAllAccessStatuses> | undefined`

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
