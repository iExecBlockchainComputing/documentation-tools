# fetchMyContacts

This method gives the requester a list of Ethereum addresses that previously gave access to their protected data for messaging usage. The user's email address is stored as a piece of `protectedData` ensuring only authorized applications may access the clear text address for sending communications.

## Usage

```javascript
const contactsList = await web3mail.fetchMyContacts();
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
## Result

The result object contains a list of Contact objects. Each Contact represents one Ethereum address whose owner previously granted you permission to send them messages. Each object contains the following fields.

### accessGrantTimestamp

The date and time the owner of this Ethereum address granted you permission to send them communications. 

*type*: This is a string representation of a timestamp with the format yyyy-mm-ddThh:mm:ss.ssssZ.

### owner

The user who granted permission to send them communications.

*type*: A string representation of an Ethereum address.

### address

TBD

*type*: A string representation of an Ethereum address.