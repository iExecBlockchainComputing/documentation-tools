# revokeOneAccess

This method allows revoking a specific access authorization from a `protectedData` entity. The input parameter for this method is sourced from the [getGrantedAccess](getGrantedAccess.md) method, which provides a list of all authorizations on single `protectedData` entity.

## Usage

The `revokeOneAccess` method requires a `grantedAccess` object as an input parameter. This object is retrieved from the [`getGrantedAccess`](./getGrantedAccess.md) method.

```javascript
const revokeAccess = await dataProtector.revokeOneAccess(
    {
        apprestrict: '0xea...',
        dataset: '0xA0C...',
        datasetprice: '0',
        requesterrestrict: '0xecb..',
        salt: '0x0147...'
        sign: '0xc22c1...',
        tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
        volume: '1',
        workerpoolrestrict: '0x000...'
    }
)
```

## Parameters

```js
import { type GrantedAccess } from "@iexec/dataprotector";
```

### grantedAccess

`GrantedAccess`

This is the complete `granted access` object retrieved from an invocation of `fetchGrantedAccess`.

```javascript
const revokeAccess = await dataProtector.revokeOneAccess(
    {
        apprestrict: '0xea...', // [!code focus]
        dataset: '0xA0C...', // [!code focus]
        datasetprice: '0', // [!code focus]
        requesterrestrict: '0xecb..', // [!code focus]
        salt: '0x0147...' // [!code focus]
        sign: '0xc22c1...',// [!code focus]
        tag: '0x0000000000000000000000000000000000000000000000000000000000000003', // [!code focus]
        volume: '1', // [!code focus]
        workerpoolrestrict: '0x000...'// [!code focus]
    }
)
```

::: warning
The tag must always be set to `0x0000000000000000000000000000000000000000000000000000000000000003`. This specific value indicates that the order is for a confidential asset (a protected data).
:::

## Result

This method returns a JSON object containing two fields.

**_access_**

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

**_txHash_**

The ID of the transaction that happened on iExec's side chain. You may view details on the transaction using the [iExec explorer](https://explorer.iex.ec).
