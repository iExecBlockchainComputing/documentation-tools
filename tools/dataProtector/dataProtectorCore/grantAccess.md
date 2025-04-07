---
description:
  Grant secure access to encrypted data with iExec's grantAccess method.
  Authorize specific applications or users to process protected data, with
  customizable access limits and pricing.
---

# grantAccess

Data encrypted through the Data Protector tool requires explicit authorization
for runtime access. A newly created `protectedData` object has no inherent
authorizations. This method grants permission to securely access the specified
`protectedData` for processing using the `processProtectedData` method.
Authorization to use the `protectedData` is given to a user in the context of an
application (or a designated list of applications).

## Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10,
  onStatusUpdate: ({ title, isDone }) => {
    console.log(title, isDone);
  },
});
```

## Parameters

```ts twoslash
import { type GrantAccessParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

The ethereum address of the protected data supplied by the user.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // [!code focus]
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

### authorizedApp <RequiredBadge />

**Type:** `AddressOrENS`

The address of the application you wish to authorize to process the
`protectedData` within a secure execution environment. You may specify either a
single application or an application whitelist. To specify a whitelist, you
provide the ETH address of an
[iExec Whitelist Smart Contract](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/tree/main).
This smart contract aggregates multiple application versions. This allows you to
introduce new versions of your application without needing to grant access for
the `protectedData` each time you do so.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789cba...',
});
```

::: tip

You may authorize a specific app or a whitelist of apps to use the protected
data.

iExec uses the ENS `web3mail.apps.iexec.eth` for the latest version of the
Web3Mail decentralized application.

iExec also maintains a whitelist for current and past versions of Web3Mail
dApps. Granting access to this whitelist allows use of an email `protectedData`
with all versions of the Web3Mail application, ensuring you only have to grant
this access once. The ETH address for this whitelist is
**0x781482C39CcE25546583EaC4957Fb7Bf04C277D2**.

:::

### authorizedUser <RequiredBadge />

**Type:** `AddressOrENS`

The address of the user you wish to authorize to use the `protectedData`. Note
that these users may not view or manipulate the data. This only grants
permission for the user to submit the data to an iExec application.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

::: tip

You may authorize all users to use the protected data by setting this to
**0x0000000000000000000000000000000000000000**.

:::

### pricePerAccess <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Specifies the usage fee in nano RLC (nRLC) associated with each access of the
data. It represents the cost incurred for each individual interaction with
application.

By invoking the grantAccess method with a specific `pricePerAccess` you define
the fee that the specified user (`authorizedUser` parameter) must pay for each
access to the data when used with the specified application (`authorizedApp`
parameter).

The fee is paid to the owner of the protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3, // [!code focus]
  numberOfAccess: 10,
});
```

::: tip

`pricePerAccess` is expressed in nano RLC (nRLC). nRLC is the smallest
subdivision of the RLC token, 1 RLC equals to 10^9 nRLC.

When provided, `pricePerAccess` must be a non-negative integer value.

:::

### numberOfAccess <OptionalBadge />

**Type:** `number`  
**Default:** `1`

Allows restricting the number of times the protected data may be processed and
used.

It is not technically possible to set an unlimited number of accesses, but you
can set `numberOfAccess` to `10000` for example.

::: info Important Notes: If you attempt to process the protected data more
times than specified in `numberOfAccess`, you will encounter a **"no dataset
orders"** error.

To prevent this error, ensure the `numberOfAccess` is properly set when calling
the `grantAccess` method.  
:::

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10, // [!code focus]
});
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<GrantAccessStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
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
'CREATE_DATASET_ORDER';
'PUBLISH_DATASET_ORDER';
```

Once with `isDone: false`, and then with `isDone: true`

## Return value

```ts twoslash
import { type GrantedAccess } from '@iexec/dataprotector';
```

The result of this method confirms the new access grant. It consists of a JSON
`grantedAccess` object.

[`GrantedAccess`](../types.md#grantedaccess)
