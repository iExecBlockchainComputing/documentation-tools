# createOracle

The `createOracle` method is designed to facilitate the creation of an oracle, which serves as a reliable source of real-time data from a specified Application Programming Interface (API). This method is particularly suited for scenarios where only a single data point is required from the API.

## Usage

As an example, we will utilize the CoinGecko public API, which provides the Ethereum price in USD: <a href="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd">CoinGecko Ethereum API</a>.

```javascript
const createOracleRes = factory.createOracle({
  url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
  method: "GET",
  headers: {
    authorization: "%API_KEY%",
  },
  dataType: "number",
  JSONPath: "$.ethereum.usd",
  apiKey: "MY_TEST_API_KEY",
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle Creation Completed");
    }, 
  });
```

## Return values during creation process

These are the possible events iExec may send to the subscriber:

| message                              | sent                 | additional entries                          |
| ------------------------------------ | -------------------- | ------------------------------------------- |
| ENCRYPTION_KEY_CREATED               | once if using apiKey | key: String                                 |
| FILE_ENCRYPTED                       | once if using apiKey | encryptedFile: Buffer<br/> checksum: String |
| ENCRYPTED_FILE_UPLOADED              | once if using apiKey | cid: String<br/> multiaddr: String          |
| DATASET_DEPLOYMENT_SIGN_TX_REQUEST   | once if using apiKey |                                             |
| DATASET_DEPLOYMENT_SUCCESS           | once if using apiKey | address: String<br/> txHash: String         |
| PUSH_SECRET_TO_SMS_SIGN_REQUEST      | once if using apiKey |                                             |
| PUSH_SECRET_TO_SMS_SUCCESS           | once if using apiKey |                                             |
| DATASET_ORDER_SIGNATURE_SIGN_REQUEST | once if using apiKey | order: Object                               |
| DATASET_ORDER_SIGNATURE_SUCCESS      | once if using apiKey | order: Object                               |
| DATASET_ORDER_PUBLISH_SIGN_REQUEST   | once if using apiKey | order: Object                               |
| DATASET_ORDER_PUBLISH_SUCCESS        | once if using apiKey | orderHash: String                           |
| PARAM_SET_CREATED                    | once                 | paramSet: String                            |
| ORACLE_ID_COMPUTED                   | once                 | oracleId: String                            |
| PARAM_SET_UPLOADED                   | once                 | cid: String                                 |
| COMPLETED                            | once                 |                                             |


## Parameters

### url

The API URL to fetch data from.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = factory.createOracle({
<strong>    url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle Creation Completed");
    }, 
  });
</code></pre>

### method

The HTTP method to use when making the API request (e.g., "GET").

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = factory.createOracle({
<strong>    method: "GET",
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle Creation Completed");
    }, 
  });
</code></pre>

### headers (optional)

Any headers required for the API request.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = factory.createOracle({
<strong>    headers: {
        authorization: "%API_KEY%",
    },
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle Creation Completed");
    }, 
  });
</code></pre>

### dataType

The type of data to be returned (e.g., "number").

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = factory.createOracle({
<strong>    dataType: "number",
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle Creation Completed");
    }, 
  });
</code></pre>

### JSONPath

The JSON path to extract the data from the API response.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = factory.createOracle({
<strong>    JSONPath: "$.ethereum.usd",
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle Creation Completed");
    }, 
  });
</code></pre>

### apiKey (optional)

API key if required by the data source.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = factory.createOracle({
<strong>    apiKey: "MY_TEST_API_KEY",
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle Creation Completed");
    }, 
  });
</code></pre>
