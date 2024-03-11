# revokeOneAccess

This method allows revoking a specific access authorization from a `protectedData` entity. The input parameter for this method is sourced from the [fetchGrantedAccess](fetchgrantedaccess.md) method, which provides a list of all authorizations on single `protectedData` entity.

## Usage

The `revokeOneAccess` method requires a `grantedAccess` object as an input parameter. This object is retrieved from the [`fetchGrantedAccess`](./fetchgrantedaccess.md) method.

```javascript
const revokeAccess = await dataProtector.revokeOneAccess(
    {
        apprestrict: '0xea6912aed5183cd6c1ad9e5e434becb2a060cd0d',
        dataset: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        datasetprice: '0',
        requesterrestrict: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        salt: '0x0147499ca7604fe9343a71c99125f1c3f8af0e1ebb933d570cb653ef8eb043b8'
        sign: '0xc22c1f57f0b68af0fb4833e776adb73f30cc197445834bf564e9829913e104b07ab856ac39085edb5c9180f430c1ee2f29021ae33cd79eb0ddb73181e347799f1b',
        tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
        volume: '1',
        workerpoolrestrict: '0x0000000000000000000000000000000000000000'
    }
)
```

## Return value example

The return value of this operation confirms the `granted access` object values and provides a transaction hash for reference.

```javascript
{
    access: {
        apprestrict: '0xea6912aed5183cd6c1ad9e5e434becb2a060cd0d',
        dataset: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        datasetprice: '0',
        requesterrestrict: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        salt: '0x0147499ca7604fe9343a71c99125f1c3f8af0e1ebb933d570cb653ef8eb043b8'
        sign: '0xc22c1f57f0b68af0fb4833e776adb73f30cc197445834bf564e9829913e104b07ab856ac39085edb5c9180f430c1ee2f29021ae33cd79eb0ddb73181e347799f1b',
        tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
        volume: '1',
        workerpoolrestrict: '0x0000000000000000000000000000000000000000'
    },
    txHash: '0x9f7e76a220aba21c6a9c79bd1680eaf33b10afc2127593fd7e9a9e2b03c2c9fd'
}
```

## Parameters

***grantedAccess (required)***

This is the complete `granted access` object retrieved from an invocation of `fetchGrantedAccess`.

## Result

This method returns a JSON object containing two fields.

***access***

This is a nested `grantedAccess` object providing details on the prior granted access. The `grantedAccess` object has the following fields:

**apprestrict** - address of the authorized application; a value of 0x0 indicates any application may access this data  
**dataset** - address of the `protectedData` containing user data  
**datasetprice** - price (iun nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`  
**requesterrestrict** - address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data  
**volume** - number of authorized uses of this `protectedData`; each use decrements this counter  
**workerpoolrestrict**- address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data  
**salt** - random value to make an order unique and reusable as nonce in a blockchain transaction  
**sign** - order signature of all the `grantedAccess` fields  
**tag** - defines whether a `protectedData` is usable in a TEE environment (Trusted Execution Environment); `0x00` is TEE while `0x03` is non-TEE

***txHash***

The ID of the transaction that happened on iExec's side chain. You may view details on the transaction using the [iExec explorer](https://explorer.iex.ec).