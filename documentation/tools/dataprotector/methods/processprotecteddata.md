# processProtectedData

Allows processing a protected dataset through use of a specified iExec application.

## Usage

```javascript
const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    maxPrice: 10,
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: ['secret1', 'secret2'],
});
```

## Return value example

This method returns a taskId, a unique identifier associated with a task currently running on the iExec Bellecour blockchain. It uniquely identifies the specific execution of the application (data processing) on the blockchain.

```javascript
0xabcd1234...
```

## Parameters

### protectedData (required)

The ETH address or Ethereum Name Service (ENS) reference for the protected data.

### app (required)

The ETH address or Ethereum Name Service (ENS) address for the dataProtector application to process the protected data.

### maxPrice (optional)

The maximum price (in nRLC) that a requester is willing to pay for each task related to processing the protected data. It is the sum of the application price, dataset price, and workerpool price per task.

### args (optional)

Set of execution arguments for the dataProtector application.

### inputFiles (optional)

A set of URLs representing the input files required for application execution.

### secrets (optional)

A set of requester secrets necessary for the application's execution. This is represented as a mapping of numerical identifiers to corresponding secrets stored in the secrets manager needed for the application's execution.

## Result

This method returns a single value as the result, a taskId.

### taskId

A unique identifier associated with a task currently running on the iExec Bellecour blockchain. It uniquely identifies the specific execution of the application (data processing) on the blockchain.