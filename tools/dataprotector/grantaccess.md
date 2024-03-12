# grantAccess

Data encrypted through the Data Protector tool requires explicit authorization for runtime access. A newly created `protectedData` object has no inherent authorizations. This method grants permission to securely access the specified `protectedData` for processing using the `processProtectedData` method. Users may grant permissions to an application, an application whitelist, or a user.

## Usage

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  pricePerAccess: 3,
  numberOfAccess: 10,
});
```

## Parameters

### protectedData

The ethereum address of the protected data supplied by the user.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", // [!code focus]
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
});
```

### authorizedApp

The address of the application you wish to authorize to process the `protectedData` within a secure execution environment. You may specify either a single application or an application whitelist. To specify a whitelist, you provide the ETH address of an [iExec Whitelist Smart Contract](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/tree/main). This smart contract aggregates multiple application versions. This allows you to introduce new versions of your application without needing to grant access for the `protectedData` each time you do so.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", // [!code focus]
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
});
```

::: tip
You may authorize all apps to use the protected data by setting this to **0x00000000000000000000000000000000000000**

iExec maintains a whitelist for the Web3Mail decentralized application. Granting access to this whitelist allows use of an email `protectedData` with all versions of the Web3Mail application, ensuring you only have to grant this access once. The ETH address for this whitelist is **0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e**
:::

### authorizedUser

The address of the user you wish to authorize to use the `protectedData`. Note that these users may not view or manipulate the data. This only grants permission for the user to submit the data to an iExec application.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1", // [!code focus]
});
```

::: tip
You may authorize all users to use the protected data by setting this to **0x00000000000000000000000000000000000000**
:::

### pricePerAccess

Allows specifying an optional nRLC cost associated with every access of the protected data.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  pricePerAccess: 3, // [!code focus]
});
```

::: warning
_default_: 0
:::

### numberOfAccess

Allows optionally restricting the number of times the protected data may be processed and used.

```js
const grantedAccess = await dataProtector.grantAccess(
    args: {
        protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
      numberOfAccess: 10  // [!code focus]
  }
)
```

::: warning
_default_: 1
:::

## Return value

The result of this method confirms the new access grant. It consists of a JSON `grantedAccess` object.

`grantedAccess`

The `grantedAccess` object has the following fields:

**apprestrict** - address of the authorized application; a value of 0x0 indicates any application may access this data  
**dataset** - address of the `protectedData` containing user data  
**datasetprice** - price (iun nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`  
**requesterrestrict** - address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data  
**volume** - number of authorized uses of this `protectedData`; each use decrements this counter  
**workerpoolrestrict**- address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data  
**salt** - random value to make an order unique and reusable as nonce in a blockchain transaction  
**sign** - order signature of all the `grantedAccess` fields  
**tag** - defines whether a `protectedData` is usable in a TEE environment; `0x00` is TEE while `0x03` is non-TEE