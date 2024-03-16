# Types

Types in DataProtector.

## GrantedAccess

### dataset

`string`

Address of the `protectedData` containing user data

### datasetprice

`string`

Price (iun nRLC) to charge the user specified in `requesterrestrict` for each
use of this `protectedData`

### volume

`string`

Number of authorized uses of this `protectedData`; each use decrements this
counter

### tag

`string`

Defines whether a `protectedData` is usable in a TEE environment; `0x00` is TEE
while `0x03` is non-TEE

### apprestrict

`string`

Address of the authorized application; a value of 0x0 indicates any application
may access this data

### requesterrestrict

`string`

Address of the requester authorized to use this `protectedData` in workloads; a
value of 0x0 indicates any requester may use this data

### workerpoolrestrict

`string`

Address of the decentralized infrastructure (worker pool) authorized to execute
the application; a value of 0x0 indicates any worker pool may access this data

### salt

`string`

Random value to make an order unique and reusable as nonce in a blockchain
transaction

### sign

`string`

Order signature of all the `grantedAccess` fields

## RevokedAccess

### access

[`GrantedAccess`](./types.md#grantedaccess)

The granted access that was revoked.

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).

_Example:_ `0xc9c2d58fc01fe54149b7daf49a0026d4ab1fdd3d10fb7c76350790fff03fe24d`

## SuccessWithTransactionHash

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).

_Example:_ `0xc9c2d58fc01fe54149b7daf49a0026d4ab1fdd3d10fb7c76350790fff03fe24d`
