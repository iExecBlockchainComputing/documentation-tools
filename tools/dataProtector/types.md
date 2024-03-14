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
