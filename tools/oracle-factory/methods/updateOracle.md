---
description:
  Update an existing oracle using the updateOracle method from the iExec Oracle
  Factory SDK. This guide demonstrates how to fetch and refresh Ethereum price
  data from the CoinGecko API to ensure that your oracle stays up-to-date and
  reliable.
---

# updateOracle

The `updateOracle` method serves to refresh an existing oracle with the latest
data fetched from the linked API. This ensures that the oracle maintains
up-to-date information, enhancing its reliability and usefulness for downstream
applications.

## Usage

As an example, we will utilize the CoinGecko public API oracle, which provides
the Ethereum price in USD:
<a href="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd">CoinGecko
Ethereum API</a>.

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
// create an observable
const updateOracleObservable = factory.updateOracle(
  {
    JSONPath: "$['ethereum']['usd']",
    body: '',
    dataType: 'number',
    dataset: '0x0000000000000000000000000000000000000000',
    headers: {},
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  },
  {
    workerpool: '0xa5de76...',
    targetBlockchains: [137],
  }
);

// subscribe to the observable and start the workflow
updateOracleObservable.subscribe({
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

## Parameters

### paramSet or paramSetCid <RequiredBadge />

::: tip

- The oracle `ParamSet` describes the parameters used to feed the oracle.

- Any different `ParamSet` has a unique `ParamSetCid` which is the Content ID of
  the document on IPFS. With a `ParamSetCid` anyone can retrieve the `ParamSet`
  from IPFS.

:::

- ParamSet of the Oracle to update.

<!-- prettier-ignore-start -->
```ts twoslash
import {
  IExecOracleFactory,
  ParamSet,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const paramSet: ParamSet = { // [!code focus]
  JSONPath: "$['ethereum']['usd']", // [!code focus]
  body: '', // [!code focus]
  dataType: 'number', // [!code focus]
  dataset: '0x0000000000000000000000000000000000000000', // [!code focus]
  headers: {}, // [!code focus]
  method: 'GET', // [!code focus]
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', // [!code focus]
}; // [!code focus]

const updateOracleObservable = factory.updateOracle(
  paramSet // [!code focus]
);
```
<!-- prettier-ignore-end -->

- ParamSet CID of the Oracle to update.

```ts twoslash
import {
  IExecOracleFactory,
  ParamSetCID,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const paramSetCid: ParamSetCID = // [!code focus]
  'QmbeY27w6dKxNQnGXih4AaotgNY3XuZ2yzbi2ZWQfRApqs'; // [!code focus]

const updateOracleObservable = factory.updateOracle(
  paramSetCid // [!code focus]
);
```

### useVoucher <OptionalBadge />

**Type:** `boolean`  
**Default:** `false`

This optional param allows you to pay for the deal using your voucher. Make sure
that your voucher is held by your connected wallet.

```ts
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const updateOracleObservable = factory.updateOracle(
  {
    JSONPath: "$['ethereum']['usd']",
    body: '',
    dataType: 'number',
    dataset: '0x0000000000000000000000000000000000000000',
    headers: {},
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  },
  {
    useVoucher: true, // [!code focus]
  }
);
```

::: tip

If your voucher doesn't have enough xRLC to cover the deal, the SDK will
automatically get the required amount to your iExec account. Ensure that your
voucher is authorized to access your iExec account and that your account has
sufficient funds for this transfer to proceed.

:::

### workerpool <OptionalBadge />

Address of the workerpool that should perform the update.

```ts twoslash
import {
  IExecOracleFactory,
  ParamSetCID,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const updateOracleObservable = factory.updateOracle(
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
  {
    workerpool: '0xa5de76...', // [!code focus]
    targetBlockchains: [137],
  }
);
```

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.

:::

### targetBlockchains <OptionalBadge />

Array of target blockchain chainId where the oracle is deployed. 1 for Ethereum
mainnet, 137 for Polygon mainnet.

```ts twoslash
import {
  IExecOracleFactory,
  ParamSetCID,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const updateOracleObservable = factory.updateOracle(
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
  {
    workerpool: '0xa5de76...',
    targetBlockchains: [1, 137], // [!code focus]
  }
);
```

## Return value

`Observable<UpdateOracleMessage>`

```ts twoslash
import type {
  UpdateOracleMessage, // any `data` the `next(data)` handler can receive

  // all `data` types
  EnsureParamsMessage, // check ParamSet can be found on IPFS
  EnsureParamsUploadMessage, // the ParamSet will be uploaded on IPFS
  EnsureParamsSuccessMessage, // ParamSet exists on IPFS
  FetchAppOrderMessage, // fetching app order
  FetchAppOrderSuccessMessage, // app order found
  FetchDatasetOrderMessage, // fetching dataset order (only for oracles using API key dataset)
  FetchDatasetOrderSuccessMessage, // app order found (only for oracles using API key dataset)
  FetchWorkerpoolOrderMessage, // fetching workerpool order
  FetchWorkerpoolOrderSuccessMessage, // app workerpool found
  RequestOrderSignatureSignRequestMessage, // asking the user to sign the request order
  RequestOrderSignatureSuccessMessage, //
  MatchOrdersSignTxRequestMessage, // asking the user to sign the transaction to match the orders and make a deal
  MatchOrdersSuccessMessage, // orders matched
  TaskUpdatedMessage, // notifies a task status change
  UpdateTaskCompletedMessage, // the oracle update task is completed
} from '@iexec/iexec-oracle-factory-wrapper';
```

::: tip

Nothing happens before `subscribe()` is called on the returned observable.

You can provide custom `next`, `complete` and `error` callback methods to
`subscribe`

```ts twoslash
import {
  IExecOracleFactory,
  Observable,
  ObservableNext,
  ObservableComplete,
  ObservableError,
  UpdateOracleMessage,
} from '@iexec/iexec-oracle-factory-wrapper';

const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

const updateOracleObservable = factory.updateOracle(
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit'
);
// ---cut---
// method to call when the workflow goes to a new step
const nextCallback: ObservableNext<UpdateOracleMessage> = (data) => {
  // your logic
};

// method to call when the workflow completes successfully
const completeCallback: ObservableComplete = () => {
  // your logic
};

// method to call when the workflow fails
const errorCallback: ObservableError = (error: Error) => {
  // your logic
};

updateOracleObservable.subscribe({
  next: nextCallback,
  complete: completeCallback,
  error: errorCallback,
});
```

:::
