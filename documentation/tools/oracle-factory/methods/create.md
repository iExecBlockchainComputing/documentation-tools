---
description: This method allows the creation of an oracle from an API using rawParams.
---

# Create

## Parameters

**rawParams**: An object that contains all the information required to create the oracle.

| Name     | Type                           | Required/Optional | Description                                         |
| -------- | ------------------------------ | ----------------- | --------------------------------------------------- |
| url      | string                         | Required          | A string containing the URL of the API              |
| method   | 'GET', 'POST', 'PUT', 'DELETE' | Required          | The HTTP method to be used                          |
| headers  | Map\<string, string>           | Required          | Headers to be included in the HTTP request          |
| body     | string                         | Optional          | The body of the HTTP request                        |
| apiKey   | string                         | Optional          | The API key (secured in an encrypted iExec Dataset) |
| JSONPath | string                         | Required          | JSONPath expression                                 |
| dataType | 'boolean', 'number', 'string'  | Required          | The type of data the API returns                    |



Note: Use %API\_KEY% placeholder in URL or headers to inject the apiKey. You may want to call utils.testRawParams(rawParams) to test the rawParams returned value before creating an oracle.

## Outputs

The method returns a cold Observable. It provides several callbacks: next, error, complete, and cancel.

* next is called on every process step with a message and additional pieces of data.
* error is called when an error occurs and cancels the observable process.
* complete is called when the process ends without an error.
* cancel can be called to stop the observed process and prevent any further callback call.

Messages received through next and their additional entries are as follows:

| Message                                  | Sent                 | Additional Entries                      |
| ---------------------------------------- | -------------------- | --------------------------------------- |
| ENCRYPTION\_KEY\_CREATED                 | once if using apiKey | key: String                             |
| FILE\_ENCRYPTED                          | once if using apiKey | encryptedFile: Buffer, checksum: String |
| ENCRYPTED\_FILE\_UPLOADED                | once if using apiKey | cid: String, multiaddr: String          |
| DATASET\_DEPLOYMENT\_SIGN\_TX\_REQUEST   | once if using apiKey | <p><br></p>                             |
| DATASET\_DEPLOYMENT\_SUCCESS             | once if using apiKey | address: String, txHash: String         |
| PUSH\_SECRET\_TO\_SMS\_SIGN\_REQUEST     | once if using apiKey | <p><br></p>                             |
| PUSH\_SECRET\_TO\_SMS\_SUCCESS           | once if using apiKey | <p><br></p>                             |
| DATASET\_ORDER\_SIGNATURE\_SIGN\_REQUEST | once if using apiKey | order: Object                           |
| DATASET\_ORDER\_SIGNATURE\_SUCCESS       | once if using apiKey | order: Object                           |
| DATASET\_ORDER\_PUBLISH\_SIGN\_REQUEST   | once if using apiKey | order: Object                           |
| DATASET\_ORDER\_PUBLISH\_SUCCESS         | once if using apiKey | orderHash: String                       |
| PARAM\_SET\_CREATED                      | once                 | paramSet: String                        |
| ORACLE\_ID\_COMPUTED                     | once                 | oracleId: String                        |
| PARAM\_SET\_UPLOADED                     | once                 | cid: String                             |
| COMPLETED                                | once                 | <p><br></p>                             |

### Example usage

```
let paramSet;
let cid;


factory
  .createOracle({
    url: 'https://foo.io',
    method: 'GET',
    headers: {
      authorization: '%API_KEY%',
    },
    dataType: 'string',
    JSONPath: '$.data',
    apiKey: 'foo',
  })
  .subscribe({
    error: (e) => console.error(e),
    next: (value) => {
      const { message, ...additionalEntries } = value;
      if (message === 'PARAM_SET_CREATED') {
        paramSet = additionalEntries.paramSet;
      }
      if (message === 'PARAM_SET_UPLOADED') {
        cid = additionalEntries.cid;
      }
      console.log(message);
      console.info(JSON.stringify(additionalEntries));
    },
    complete: () => {
      console.log(`Oracle created, paramSet CID is ${cid}!`);
      console.log(`paramSet: "${paramSet}"`);
    },
  });
```

In this example, the factory creates an oracle using specified raw parameters. The subscribe method is used to monitor the oracle creation process. In the next callback, messages and additional entries are logged to the console. The error callback logs any errors to the console, and the complete callback logs the final paramSet CID and paramSet.
