# transferOwnership

Method to transfer ownership of a protected data to a new owner, identified by their ETH address. The return value provides a transaction hash and confirmation of the new owner of the data.

## Usage

```js
const transferResponse = await dataProtector.transferOwnership({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  newOwner: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
});
```

## Parameters

### protectedData

Address of the protected data owned by you which is to be transferred to a new owner.

```js
const transferResponse = await dataProtector.transferOwnership({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", // [!code focus]
  newOwner: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
});
```

### newOwner

ETH Address for the new owner for the specified data.

```js
const transferResponse = await dataProtector.transferOwnership({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  newOwner: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", // [!code focus]
});
```

## Return value example

```js
[
  {
    address: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    to: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    txHash:
      "0x9f7e76a220aba21c6a9c79bd1680eaf33b10afc2127593fd7e9a9e2b03c2c9fd",
  },
];
```
