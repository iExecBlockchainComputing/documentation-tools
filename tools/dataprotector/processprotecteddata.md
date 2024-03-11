# processProtectedData

Allows processing a protected dataset through use of a specified iExec application.

## Usage

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  app: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  maxPrice: 10,
  args: "arg1 arg2",
  inputFiles: ["https://example.com/file1", "https://example.com/file2"],
  secrets: ["secret1", "secret2"],
});
```

## Parameters

### protectedData

The ETH address or Ethereum Name Service (ENS) reference for the protected data.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", // [!code focus]
  app: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  maxPrice: 10,
  args: "arg1 arg2",
  inputFiles: ["https://example.com/file1", "https://example.com/file2"],
  secrets: ["secret1", "secret2"],
});
```

### app

The ETH address or Ethereum Name Service (ENS) address for the dataProtector application to process the protected data.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  app: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", // [!code focus]
  maxPrice: 10,
  args: "arg1 arg2",
  inputFiles: ["https://example.com/file1", "https://example.com/file2"],
  secrets: ["secret1", "secret2"],
});
```

### maxPrice (optional)

The maximum price (in nRLC) that a requester is willing to pay for each task related to processing the protected data. It is the sum of the application price, dataset price, and workerpool price per task.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  app: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  maxPrice: 10, // [!code focus]
  args: "arg1 arg2",
  inputFiles: ["https://example.com/file1", "https://example.com/file2"],
  secrets: ["secret1", "secret2"],
});
```

### args (optional)

Set of execution arguments for the dataProtector application.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  app: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  maxPrice: 10,
  args: "arg1 arg2", // [!code focus]
  inputFiles: ["https://example.com/file1", "https://example.com/file2"],
  secrets: ["secret1", "secret2"],
});
```

### inputFiles (optional)

A set of URLs representing the input files required for application execution.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  app: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  maxPrice: 10,
  args: "arg1 arg2",
  inputFiles: ["https://example.com/file1", "https://example.com/file2"], // [!code focus]
  secrets: ["secret1", "secret2"],
});
```

### secrets (optional)

A set of requester secrets necessary for the application's execution. This is represented as a mapping of numerical identifiers to corresponding secrets stored in the secrets manager needed for the application's execution.

```js
const taskid = await dataProtector.processProtectedData({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  app: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  maxPrice: 10,
  args: "arg1 arg2",
  inputFiles: ["https://example.com/file1", "https://example.com/file2"],
  secrets: ["secret1", "secret2"], // [!code focus]
});
```

## Return value example

This method returns a taskId, a unique identifier associated with a task currently running on the iExec Bellecour blockchain. It uniquely identifies the specific execution of the application (data processing) on the blockchain.

```js
0xabcd1234...
```
