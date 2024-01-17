# fetchMyContacts

Method to get the ETH addresses that gave access to their protected data for messaging usage.

## Usage

```javascript
const listContact = await web3mail.fetchMyContacts()
```

## Return value example

```javascript
[
    {
        accessGrantTimestamp: '2023-06-16T09:01:31.683Z',
        owner: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        address: '0x7a35BfD91a8D3Cfe0B8Fd8B1317e4Bc21dDc9aF2'
    }    
]
```
