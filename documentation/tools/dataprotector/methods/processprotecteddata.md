# processProtectedData

Allows processing a protected dataset through use of a specified iExec application.

{% hint style="success" %}
You must ensure this application has authorization to use the `protectedData`. You may grant this permission using the [`grantAccess`](./grantaccess.md) method.
{% endhint %}


## Usage

```javascript
const taskid = await dataProtector.processProtectedData({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    app: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    maxPrice: 10,
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: {
        1: 'secret1',
        2: 'secret2'
    },
});
```

## Return value example

This method returns a taskId, a unique identifier associated with a task currently running on the iExec Bellecour side chain. You may monitor task execution with the [iExec blockchain explorer](https://explorer.iex.ec).

```javascript
0xabcd1234...
```

## Parameters

***protectedData (required)***

The ETH address or Ethereum Name Service (ENS) reference for the protected data you wish the `app` to process.

***app (required)***

The ETH address or Ethereum Name Service (ENS) address for the iExec application to process the protected data.

***maxPrice (optional)***

The maximum price (in nRLC) that a requester is willing to pay for each task related to processing the protected data. It is the sum of the application price, dataset price, and workerpool price per task.

***args (optional)***

Set of execution arguments for the application. 

{% hint style="danger" %}
Do not use this to provide any sensitive information to the application. All arguments passed this way are visible in plain text using the [iExec blockchain explorer](https://explorer.iex.ec).
{% endhint %}

***inputFiles (optional)***

A set of URLs representing the input files required for application execution.

***secrets (optional)***

A set of requester secrets necessary for the application's execution. This is represented as a mapping of numerical identifiers to corresponding secrets stored in the secrets manager needed for the application's execution.

Secrets are accessible during the application's execution as environment variables. For more details, see [Access requester secrets](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets/requester-secrets).

## Result

This method returns a single value as the result, a `taskId`.

***taskId***

A unique identifier associated with a task currently running on the iExec Bellecour side chain. You may monitor task execution with the [iExec blockchain explorer](https://explorer.iex.ec).
