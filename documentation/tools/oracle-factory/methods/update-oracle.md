---
description: This method allows the update of an oracle.
---

# Update Oracle

## Parameters

paramSet|ipfsCid: Can either be the paramSet object or an IPFS CID. The paramSet should contain the updated parameters, or the IPFS CID that contains these updated parameters.

| Name       | Type   | Required/Optional | Description                                       |
| ---------- | ------ | ----------------- | ------------------------------------------------- |
| workerpool | string | Optional          | The address of the workerpool to use for the task |



## Outputs

The method returns a cold Observable. It provides several callbacks: next, error, complete, and cancel.

* next is called on every process step with a message and additional pieces of data.
* error is called when an error occurs and cancels the observable process.
* complete is called when the process ends without an error.
* cancel can be called to stop the observed process and prevent any further callback call.

Messages received through next and their additional entries are as follows:

| Message                                  | Sent                  | Additional Entries                                                                    |
| ---------------------------------------- | --------------------- | ------------------------------------------------------------------------------------- |
| ENSURE\_PARAMS                           | once                  | <p><br></p>                                                                           |
| ENSURE\_PARAMS\_SUCCESS                  | once                  | paramSet: Object, cid: String                                                         |
| FETCH\_APP\_ORDER                        | once                  | <p><br></p>                                                                           |
| FETCH\_APP\_ORDER\_SUCCESS               | once                  | order: Object                                                                         |
| FETCH\_DATASET\_ORDER                    | once if using dataset | <p><br></p>                                                                           |
| FETCH\_DATASET\_ORDER\_SUCCESS           | once if using dataset | order: Object                                                                         |
| FETCH\_WORKERPOOL\_ORDER                 | once                  | <p><br></p>                                                                           |
| FETCH\_WORKERPOOL\_ORDER\_SUCCESS        | once                  | order: Object                                                                         |
| REQUEST\_ORDER\_SIGNATURE\_SIGN\_REQUEST | once                  | order: Object                                                                         |
| REQUEST\_ORDER\_SIGNATURE\_SUCCESS       | once                  | order: Object                                                                         |
| MATCH\_ORDERS\_SIGN\_TX\_REQUEST         | once                  | apporder: Object, datasetorder: Object, workerpoolorder: Object, requestorder: Object |
| MATCH\_ORDERS\_SUCCESS                   | once                  | dealid: String, txHash: String                                                        |
| TASK\_UPDATED                            | once per task update  | dealid: String, taskid: String, status: 'UNSET'                                       |
| TASK\_COMPLETED                          | once                  | dealid: String, taskid: String, status: String                                        |



## Example Usage



```javascript
factory
  .updateOracle({
    url: 'https://foo.io',
    method: 'GET',
    headers: {
      authorization: '%API_KEY%',
    },
    dataType: 'string',
    JSONPath: '$.data',
    dataset: '0xdB5e636e332916eA0de602CB94d00E8e343cAB36',
  })
  .subscribe({
    error: (e) => console.error(e),
    next: (value) => {
      const { message, ...additionalEntries } = value;
      console.log(message);
      console.info(JSON.stringify(additionalEntries));
    },
    complete: () => {
      console.log('Update task completed!');
    },
  });

```

In this example, the factory updates an oracle using a paramSet. The subscribe method is used to monitor the oracle update process. In the next callback, messages and additional entries are logged to the console. The error callback logs any errors to the console, and the complete callback logs the completion of the update task.
