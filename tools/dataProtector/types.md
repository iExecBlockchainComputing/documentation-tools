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

## ProtectedData

### name

`string`

Name specified when the protected data was created. This piece of information is
public and visible on-chain.

### address

`Address`

Ethereum address of the protected data.

### owner

`Address`

Ethereum address of the protected data owner.

### schema

`DataSchema`

Data schema for the protected data as defined when the protected data was
created (see [protectedData](./dataProtectorCore/protectData.md)). `schema`
provides a structured representation of the protected data format and
attributes. This field plays a crucial role in understanding and interpreting
the underlying structure of the sensitive information.

### creationTimestamp

`number`

Timestamp specifying when the protected data was created, expressed in
milliseconds since the epoch. This timestamp provides precise information about
the moment of creation and can be used for chronological ordering or time-based
operations.

### multiaddr

`string` | `undefined`

The multiaddr field is the IPFS path of your encrypted data.

## RevokedAccess

### access

[`GrantedAccess`](./types.md#grantedaccess)

The granted access that was revoked.

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).

<!-- prettier-ignore-start -->
_Hash example:_ `0xc9c2d58fc01fe54149b7daf49a0026d4ab1fdd3d10fb7c76350790fff03fe24d`
<!-- prettier-ignore-end -->

You can read more about he iExec Explorer
[here](https://protocol.docs.iex.ec/for-developers/toolbox/iexec-explorer).

## SuccessWithTransactionHash

### txHash

`string`

The hash of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).

<!-- prettier-ignore-start -->
_Hash example:_ `0xc9c2d58fc01fe54149b7daf49a0026d4ab1fdd3d10fb7c76350790fff03fe24d`
<!-- prettier-ignore-end -->

You can read more about he iExec Explorer
[here](https://protocol.docs.iex.ec/for-developers/toolbox/iexec-explorer).
