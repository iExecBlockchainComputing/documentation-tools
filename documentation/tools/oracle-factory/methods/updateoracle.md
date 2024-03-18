# updateOracle

The `updateOracle` method serves to refresh an existing oracle with the latest data fetched from the linked API. This ensures that the oracle maintains up-to-date information, enhancing its reliability and usefulness for downstream applications.

## Usage

As an example, we will utilize the CoinGecko public API oracle, which provides the Ethereum price in USD: <a href="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd">CoinGecko Ethereum API</a>.

```javascript
const updateOracleRes = factory.updateOracle({
  cid: "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit", // Content ID of the Oracle
  targetBlockchains: ["134", "137"], // Target blockchain IDs, 137 for polygon, 134 for iExec (required)
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle update Completed");
    }, 
  });
```

## Return value example

These are the possible events iExec may send to the subscriber:

| message                              | sent                  | additional entries                                                                                                         |
| ------------------------------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ENSURE_PARAMS                        | once                  |                                                                                                                            |
| ENSURE_PARAMS_SUCCESS                | once                  | paramSet: Object<br/> cid: String                                                                                          |
| FETCH_APP_ORDER                      | once                  |                                                                                                                            |
| FETCH_APP_ORDER_SUCCESS              | once                  | order: Object                                                                                                              |
| FETCH_DATASET_ORDER                  | once if using dataset |                                                                                                                            |
| FETCH_DATASET_ORDER_SUCCESS          | once if using dataset | order: Object                                                                                                              |
| FETCH_WORKERPOOL_ORDER               | once                  |                                                                                                                            |
| FETCH_WORKERPOOL_ORDER_SUCCESS       | once                  | order: Object                                                                                                              |
| REQUEST_ORDER_SIGNATURE_SIGN_REQUEST | once                  | order: Object                                                                                                              |
| REQUEST_ORDER_SIGNATURE_SUCCESS      | once                  | order: Object                                                                                                              |
| MATCH_ORDERS_SIGN_TX_REQUEST         | once                  | apporder: Object<br/> datasetorder: Object<br/> workerpoolorder: Object<br/> requestorder: Object                          |
| MATCH_ORDERS_SUCCESS                 | once                  | dealid: String<br/> txHash: String                                                                                         |
| TASK_UPDATED                         | once per task update  | dealid: String<br/> taskid: String<br/> status: 'UNSET' \| 'ACTIVE' \| 'REVEALING' \| 'COMPLETED' \| 'TIMEOUT' \| 'FAILED' |
| TASK_COMPLETED                       | once                  | dealid: String<br/> taskid: String<br/> status: String                                                                     |


## Parameters

### cid

Content ID of the Oracle that needs to be updated.

<pre class="language-javascript"><code class="lang-javascript">const updateOracleRes = factory.updateOracle({
<strong>    cid: "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit",
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle update Completed");
    }, 
  });
</code></pre>

### targetBlockchains (optional)

Array of target blockchain IDs where the oracle is deployed. 137 for polygon, 134 for iExec.

<pre class="language-javascript"><code class="lang-javascript">const updateOracleRes = factory.updateOracle({
<strong>    targetBlockchains: ["134", "137"],
</strong>    // Other parameters...
}).subscribe({
    next: (data) => {
      console.log("next", data);
    },
    error: (error) => {
      console.log("error", error);
    },
    complete: () => {
      console.log("Oracle update Completed");
    }, 
  });
</code></pre>
