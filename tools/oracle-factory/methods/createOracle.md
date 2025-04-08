---
description:
  Create an oracle with the createOracle method using the iExec Oracle Factory
  SDK. In this guide, we use the CoinGecko API to fetch Ethereum price data and
  set up a real-time data source for blockchain applications.
---

# createOracle

The `createOracle` method is designed to facilitate the creation of an oracle,
which serves as a reliable source of real-time data from a specified Application
Programming Interface (API). This method is particularly suited for scenarios
where only a single data point is required from the API.

## Usage

As an example, we will utilize the CoinGecko public API, which provides the
Ethereum price in USD:
<a href="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd">CoinGecko
Ethereum API</a>.

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
// create an observable
const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
});

// subscribe to the observable and start the workflow
createOracleObservable.subscribe({
  next: (data) => {
    console.log('next', data);
  },
  error: (error) => {
    console.log('error', error);
  },
  complete: () => {
    console.log('Oracle Creation Completed');
  },
});
```

## Parameters

```ts twoslash
import { type RawParams } from '@iexec/iexec-oracle-factory-wrapper';
```

### url <RequiredBadge />

`string`

The API URL to fetch data from.

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', // [!code focus]
  method: 'GET',
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
});
```

### method <RequiredBadge />

`'GET' | 'POST' | 'PUT' | 'DELETE'`

The HTTP method to use when making the API request (e.g., "GET").

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET', // [!code focus]
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
});
```

### headers

`Record<string, string> | undefined`

Any headers required for the API request.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: { // [!code focus]
    authorization: '%API_KEY%', // [!code focus]
  }, // [!code focus]
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
})
```
<!-- prettier-ignore-end -->

### dataType <RequiredBadge />

`DataType`

The type of data to be returned (e.g., "number").

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number', // [!code focus]
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
});
```

### JSONPath <RequiredBadge />

`string`

The JSON path to extract the data from the API response.

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number',
  JSONPath: '$.ethereum.usd', // [!code focus]
  apiKey: 'MY_TEST_API_KEY',
});
```

### apiKey

`string | undefined`

API key if required by the data source.

The `apiKey` is protected an injected when an oracle is updated. `%API_KEY%` is
used as a placeholder for the `apiKey` value in oracle public parameters url and
headers.

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

// ---cut---
const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY', // [!code focus]
});
```

## Return value

`Observable<CreateOracleMessage>`

```ts twoslash
import type {
  CreateOracleMessage, // any `data` the `next(data)` handler can receive

  // all `data` types
  ApiKeyEncryptionKeyCreatedMessage, // encryption key for `apiKey` value created
  ApiKeyEncryptedMessage, // `apiKey` value encrypted
  ApiKeyUploadedMessage, // `apiKey` encrypted value uploaded on IPFS
  ApiKeyDatasetDeployRequestMessage, // requests the user to sign the API key's dataset deployment tx
  ApiKeyDatasetDeploySuccessMessage, // API key's dataset deployed
  ApiKeyPushSecretRequestMessage, // requests the user to push the encryption key in the SMS
  ApiKeyPushSecretSuccessMessage, // encryption key pushed
  ApiKeySignOrderRequestMessage, // requests the user to sign the dataset order
  ApiKeySignOrderSuccessMessage, // dataset order signed
  ApiKeyPublishOrderRequestMessage, // requests the user to publish the dataset order
  ApiKeyPublishOrderSuccessMessage, // dataset order published
  ParamSetCreatedMessage, // ParamSet created from inputs
  OracleIDComputedMessage, // OracleId computed from ParamSet
  ParamSetUploadedMessage, // ParamSet uploaded on IPFS
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
  CreateOracleMessage,
} from '@iexec/iexec-oracle-factory-wrapper';

const web3Provider = {} as any;
const factory = new IExecOracleFactory(web3Provider);

const createOracleObservable = factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
});
// ---cut---
// method to call when the workflow goes to a new step
const nextCallback: ObservableNext<CreateOracleMessage> = (data) => {
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

createOracleObservable.subscribe({
  next: nextCallback,
  complete: completeCallback,
  error: errorCallback,
});
```

:::
