# fetchProtectedData

This method allows the user to retrieve all protected data for a given owner, data schema, or both. Only protected data objects the invoker has permissions to access are included in the result set. You must include at least one of the optional parameters when invoking this method. 

{% hint style="info" %}
A data schema is the metadata describing the contents of the protected data object. The schema is returned as part of the [protectedData](protectdata.md) method invocation.
{% endhint %}

## Usage

```javascript
const listProtectedData = await dataProtector.fetchProtectedData({
    owner: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    schema: {
        "email": "string",
        "avatar": "JPEG",
        "smtp": {
            "server": "string",
            "port": "number"
        }
    }
})
```

## Return value example

The `name` and `address` fields in the result object(s) represent the name provided when creating the protected data and the eth address respectively. This method also returns the owner and associated data schema, regardless of which invocation method is used.

```javascript
[
  {
    name: "John Doe professional email address",
    address: "0x7a35BfD91a8D3Cfe0B8Fd8B1317e4Bc21dDc9aF2",
    owner: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    creationTimestamp: 1687528535,
    schema: {
      email: "string",
      avatar: "JPEG",
      smtp: {
        server: "string",
        port: "number",
      },
    },
  },
];
```

## Parameters

### owner (optional)

Provides a list of protected data objects owned by the user with this ETH address.

### dataSchema (optional)

Provides a list of protected data objects matching this schema.

## Result

This method returns an array of objects containing the protectedData information queried. Each object contains the following parameters:

* **name**: Name specified when the protected data was created. This information is public and visible on-chain.
* **adress**: Ethereum address of the protected data.
* **owner**: Ethereum address of the protected data owner.
* **creationTimestamp**: Timestamp specifying when the protected data was created, expressed in milliseconds since the epoch. This timestamp provides precise information about the moment of creation and can be used for chronological ordering or time-based operations.

* **schema**: Data schema for the protected data as defined when the protected data was created (see [protectedData](protectdata.md)). `schema` provides a structured representation of the protected data format and attributes. This field plays a crucial role in understanding and interpreting the underlying structure of the sensitive information.
