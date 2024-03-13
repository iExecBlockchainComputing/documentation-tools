# transferOwnership

Allows transferring ownership of a `protectedData` entity to a new owner, identified by their ETH address. The return value provides a transaction hash and confirmation of the new owner of the `protectedData`. Only the current owner of the `protectedData` may invoke this method.

## Usage

```js
const transferResponse = await dataProtector.transferOwnership({
  protectedData: "0xA0C...",
  newOwner: "0xC5E...",
});
```

## Parameters

```js
import { type TransferParams } from "@iexec/dataprotector";
```

### protectedData

`AddressOrENS`

ETH address of the `protectedData` owned by you which is to be transferred to a new owner.

```js
const transferResponse = await dataProtector.transferOwnership({
  protectedData: "0xA0C...",
  newOwner: "0xC5E...", // [!code focus]
});
```

### newOwner

`AddressOrENS`

ETH address for the new owner for the `protectedData`.

```js
const transferResponse = await dataProtector.transferOwnership({
  protectedData: "0xA0C...",
  newOwner: "0xC5E...", // [!code focus]
});
```

## Return value

```js
import { type TransferResponse } from "@iexec/dataprotector";
```

The result of this method is an array of objects identifying the new owner. The objects contain the three fields:

### address

`Address`

The ETH address of the `protectedData` you transferred.

### to

`AddressOrENS`

The ETH address of the new owner of the `protectedData`.

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view details on the transaction using the [iExec explorer](https://explorer.iex.ec).
