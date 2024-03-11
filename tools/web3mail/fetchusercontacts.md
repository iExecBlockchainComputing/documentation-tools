# fetchUserContacts

Method to get the ETH addresses that gave access to their protected data for messaging usage to a specific user address or ENS.

## Usage

```js
const contactsList = await web3mail.fetchUserContacts({
  userAddress: "0xF048eF3d7E3B33A465E0599E641BB29421f7Df92",
});
```

## Parameters

### userAddress

Specify the Ethereum address of the user from whom you wish to obtain the list of contact.

```js
const contactsList = await web3mail.fetchUserContacts({
  userAddress: "0xF048eF3d7E3B33A465E0599E641BB29421f7Df92",
});
```

## Return value example

```js
[
  {
    accessGrantTimestamp: "2023-06-16T09:01:31.683Z",
    owner: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    address: "0x7a35BfD91a8D3Cfe0B8Fd8B1317e4Bc21dDc9aF2",
  },
];
```
