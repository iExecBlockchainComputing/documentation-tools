# fetchUserContacts

This method provides a list of `contact` objects identifying all entities who previously granted authorization to a specified entity to send them email messages. Each contact contains the contact's ETH address as well as the ETH address for the `protectedData` containing their email address.

## Usage

```javascript
const contactsList = await web3mail.fetchUserContacts({
  userAddress: "0xF048eF3d7E3B33A465E0599E641BB29421f7Df92",
});
```

## Return value example

```javascript
[
  {
    accessGrantTimestamp: "2023-06-16T09:01:31.683Z",
    owner: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    address: "0x7a35BfD91a8D3Cfe0B8Fd8B1317e4Bc21dDc9aF2",
  },
];
```

## Parameters

### userAddress

The entity for which you wish to obtain the list of contacts.

*type*: String representation of an Ethereum address. 

## Result

The result object contains a list of `contact` objects. Each `contact` represents one user who previously granted authorization for the user identified with `userAddress` to send them messages. Each object contains the following fields:

***accessGrantTimestamp***

The precise date and time when the user granted authorization to send them email-based communications. This timestamp represents the moment the access was granted.

*type*: This is a string representation of a timestamp with the format yyyy-mm-ddThh:mm:ss.ssssZ.

***owner***

The address for the contact who granted permission to send them communications.

*type*: A string representation of an Ethereum address.

***address***

The address of the `protectedData` holding the contact's email address.

*type*: A string representation of an Ethereum address.