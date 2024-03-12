# revokeAllAccessObservable

This method allows revoking authorizations granted to a `protectedData` entity. You may optionally specify application or user addresses for revocation. If you do not specify either of these optional values, this method will revoke all access for all users and applications.

## Usage

This method is asynchronous and requires use of the JavaScript observable pattern.

```js
const revokeAllAccessObservable = dataProtector
    .revokeAllAccessObservable({
        protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
        authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1'
    })
    .subscribe({
        next: (data) => {
            console.log('next', data);
        },
        error: (error) => {
            console.log('error', error);
        },
        complete: () => {
            console.log('revokeAllAccess complete');
        }
    });
```

## Parameters

### protectedData

The address of the `protectedData` subject to access revocation.

### authorizedApp

The application address to be removed from the authorization list for the specified `protectedData`.

### authorizedUser

The user address to be removed from the authorization list for the specified `protectedData`.

## Result

As an observable method, the `revokeAllAccessObservable` method returns several events. Those include the following.

### GRANTED_ACCESS_RETRIEVED

Triggered when the `revokeAllAccessObservable` method begins processing the authorization grants for the specified `protectedData`. It contains the following data element:

**_access_**

A JSON list of `grantedAccess` objects detailing the set of authorizations for the specified `protectedData`.

### REVOKE_ONE_ACCESS_REQUEST

Triggered when the `revokeAllAccessObservable` method begins revoking one of the authorizations for the `protectedData`. It contains the following data element:

**_access_**

The `grantedAccess` object detailing authorization iExec is currently revoking.

### REVOKE_ONE_ACCESS_SUCCESS

Triggered upon completion of an authorization revocation. It contains the following data elements:

**_txHash_**

The ID of the transaction that happened on iExec's side chain. You may view details on the transaction using the [iExec explorer](https://explorer.iex.ec).

**_access_**

The `grantedAccess` object detailing authorization iExec successfully revoked.

::: tip
The `grantedAccess` object has the following fields:

**apprestrict** - address of the authorized application; a value of 0x0 indicates any application may access this data  
**dataset** - address of the `protectedData` containing user data  
**datasetprice** - price (in nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`  
**requesterrestrict** - address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data  
**volume** - number of authorized uses of this `protectedData`; each use decrements this counter  
**workerpoolrestrict**- address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data  
**salt** - random value to make an order unique and reusable as nonce in a blockchain transaction  
**sign** - order signature of all the `grantedAccess` fields  
**tag** - defines whether a `protectedData` is usable in a TEE environment (Trusted Execution Environment) ; `0x00` is TEE while `0x03` is non-TEE  
:::
