# fetchProtectedData

Method to get all protected data encrypted or filtered by a specific owner and/or a data schema.

::: tip
A data schema is a representation of the structure of the data object.
:::

## Usage

```js
const listProtectedData = await dataProtector.fetchProtectedData({
  owner: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
});
```

## Parameters

### owner (optional)

Owner address to find related protected data.

```js
const listProtectedData = await dataProtector.fetchProtectedData({
  owner: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", // [!code focus]
});
```

### dataSchema (optional)

Filter the protected data by a specific schema.

```js
const listProtectedData = await dataProtector.fetchProtectedData({
  schema: {
    // [!code focus]
    email: "string", // [!code focus]
    avatar: "JPEG", // [!code focus]
    smtp: {
      // [!code focus]
      server: "string", // [!code focus]
      port: "number", // [!code focus]
    }, // [!code focus]
  },
});
```

## Return value example

```js
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
