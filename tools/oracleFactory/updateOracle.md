# updateOracle

::: tip

This method involves asset monetization. To learn more, visit
[pricing model](../../overview/monetizationConcepts/pricingModel.md).

:::

The `updateOracle` method serves to refresh an existing oracle with the latest
data fetched from the linked API. This ensures that the oracle maintains
up-to-date information, enhancing its reliability and usefulness for downstream
applications.

## Usage

As an example, we will utilize the CoinGecko public API oracle, which provides
the Ethereum price in USD:
<a href="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd">CoinGecko
Ethereum API</a>.

```js
const updateOracleRes = factory
  .updateOracle({
    cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
    workerpool: '0x0e7...',
    targetBlockchains: ['134', '137'],
  })
  .subscribe({
    next: (data) => {
      console.log('next', data);
    },
    error: (error) => {
      console.log('error', error);
    },
    complete: () => {
      console.log('Oracle update Completed');
    },
  });
```

## Return values during creation process

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

```js
const updateOracleRes = factory
  .updateOracle({
    cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit', // [!code focus]
    workerpool: '0x0e7...',
    targetBlockchains: ['134', '137'],
  })
  .subscribe({
    next: (data) => {
      console.log('next', data);
    },
    error: (error) => {
      console.log('error', error);
    },
    complete: () => {
      console.log('Oracle update Completed');
    },
  });
```

### workerpool

Address of the workerpool that should perform the update.

```js
const updateOracleRes = factory
  .updateOracle({
    cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
    workerpool: '0x0e7...', // [!code focus]
    targetBlockchains: ['134', '137'],
  })
  .subscribe({
    next: (data) => {
      console.log('next', data);
    },
    error: (error) => {
      console.log('error', error);
    },
    complete: () => {
      console.log('Oracle update Completed');
    },
  });
```

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.

:::

### targetBlockchains

Array of target blockchain IDs where the oracle is deployed. 137 for polygon,
134 for iExec.

```js
const updateOracleRes = factory
  .updateOracle({
    cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
    workerpool: '0x0e7...',
    targetBlockchains: ['134', '137'], // [!code focus]
  })
  .subscribe({
    next: (data) => {
      console.log('next', data);
    },
    error: (error) => {
      console.log('error', error);
    },
    complete: () => {
      console.log('Oracle update Completed');
    },
  });
```

## Return value

```json
{
  "dealid": "0x86e1d2b13cd176f86b2c9d10931bc20dba0d626f1dac07dd76c1b1cec569f232",
  "taskid": "0x90a100c10780f1d0595dd9e37dc1655eb66f192bf1b2b31d719a6ca3c6b62d07",
  "status": "REVEALING"
}
```
