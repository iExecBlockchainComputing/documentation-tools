# transferOwnership

Allows transferring ownership of a `protectedData` entity to a new owner, identified by their ETH address. The return value provides a transaction hash and confirmation of the new owner of the `protectedData`. Only the current owner of the `protectedData` may invoke this method.

## Usage

```javascript
const transferResponse = await dataProtector.transferOwnership({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    newOwner: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
});
```

## Return value example

```javascript
[
    {
        "address": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
        "to": "0xnewowner...",
        "txHash": "0xabc123..."
    }
]
```

## Parameters

***protectedData (required)***

ETH address of the `protectedData` owned by you which is to be transferred to a new owner.

***newOwner (required)***

ETH address for the new owner for the `protectedData`.

## Result

The result of this method is an array of objects identifying the new owner. The objects contain the three fields:

***address***

The ETH address of the `protectedData` you transferred.

***to***

The ETH address of the new owner of the `protectedData`.

***txHash***

The ID of the transaction that happened on iExec's side chain. You may view details on the transaction using the [iExec explorer](https://explorer.iex.ec).