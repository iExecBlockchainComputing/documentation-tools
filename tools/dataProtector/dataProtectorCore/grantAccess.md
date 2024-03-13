# grantAccess

Data encrypted through the Data Protector tool requires explicit authorization for runtime access. A newly created `protectedData` object has no inherent authorizations. This method grants permission to securely access the specified `protectedData` for processing using the `processProtectedData` method. Authorization to use the `protectedData` is given to a user in the context of an application (or a designated list of applications).

## Usage

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf...",
  authorizedApp: "0xC2E...",
  authorizedUser: "0xecB...",
  pricePerAccess: 3,
  numberOfAccess: 10,
});
```

## Parameters

```js
import { type GrantAccessParams } from "@iexec/dataprotector";
```

### protectedData

`AddressOrENS`

The ethereum address of the protected data supplied by the user.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf...", // [!code focus]
  authorizedApp: "0xC2E...",
  authorizedUser: "0xecB...",
});
```

### authorizedApp

`AddressOrENS`

The address of the application you wish to authorize to process the `protectedData` within a secure execution environment. You may specify either a single application or an application whitelist. To specify a whitelist, you provide the ETH address of an [iExec Whitelist Smart Contract](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/tree/main). This smart contract aggregates multiple application versions. This allows you to introduce new versions of your application without needing to grant access for the `protectedData` each time you do so.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf...",
  authorizedApp: "0xC2E...", // [!code focus]
  authorizedUser: "0xecB...",
});
```

::: tip
You may authorize all apps to use the protected data by setting this to **0x00000000000000000000000000000000000000**

iExec maintains a whitelist for the Web3Mail decentralized application. Granting access to this whitelist allows use of an email `protectedData` with all versions of the Web3Mail application, ensuring you only have to grant this access once. The ETH address for this whitelist is **0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e**
:::

### authorizedUser

`AddressOrENS`

The address of the user you wish to authorize to use the `protectedData`. Note that these users may not view or manipulate the data. This only grants permission for the user to submit the data to an iExec application.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf...",
  authorizedApp: "0xC2E...",
  authorizedUser: "0xecB...", // [!code focus]
});
```

::: tip
You may authorize all users to use the protected data by setting this to **0x00000000000000000000000000000000000000**
:::

### pricePerAccess

`number | undefined`

Allows specifying an optional nano RLC cost associated with every access of the protected data.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf...",
  authorizedApp: "0xC2E...",
  authorizedUser: "0xecB...",
  pricePerAccess: 3, // [!code focus]
  numberOfAccess: 10,
});
```

::: warning
_default_: 0
:::

### numberOfAccess

`number | undefined`

Allows optionally restricting the number of times the protected data may be processed and used.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf...",
  authorizedApp: "0xC2E...",
  authorizedUser: "0xecB...",
  pricePerAccess: 3,
  numberOfAccess: 10, // [!code focus]
});
```

::: warning
_default_: 1
:::

## Return value

```js
import { type GrantedAccess } from "@iexec/dataprotector";
```

The result of this method confirms the new access grant. It consists of a JSON `grantedAccess` object.

### dataset

`string`

Address of the `protectedData` containing user data

### datasetprice

`string`

Price (iun nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`

### volume

`string`

Number of authorized uses of this `protectedData`; each use decrements this counter

### tag

`string`

Defines whether a `protectedData` is usable in a TEE environment; `0x00` is TEE while `0x03` is non-TEE

### apprestrict

`string`

Address of the authorized application; a value of 0x0 indicates any application may access this data

### requesterrestrict

`string`

Address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data

### workerpoolrestrict

`string`

Address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data

### salt

`string`

Random value to make an order unique and reusable as nonce in a blockchain transaction

### sign

`string`

Order signature of all the `grantedAccess` fields
