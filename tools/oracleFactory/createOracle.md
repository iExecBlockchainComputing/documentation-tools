# createOracle

Method to create an oracle from a given API, limited to returning only one data
point. As an example below, following coingecko public API which gives ethereum
price in usd will be used :
<https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd>

## Usage

```js
const createOracleRes = await factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: {
    authorization: '%API_KEY%',
  },
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
});
```

## Parameters

```ts
import { type RawParams } from '@iexec/iexec-oracle-factory-wrapper';
```

### url

`string`

The API URL to fetch data from.

```js
const createOracleRes = await factory.createOracle({
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

### method

`'GET' | 'POST' | 'PUT' | 'DELETE'`

The HTTP method to use when making the API request (e.g., "GET").

```js
const createOracleRes = await factory.createOracle({
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
```js
const createOracleRes = await factory.createOracle({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  method: 'GET',
  headers: { // [!code focus]
    authorization: '%API_KEY%', // [!code focus]
  }, // [!code focus]
  dataType: 'number',
  JSONPath: '$.ethereum.usd',
  apiKey: 'MY_TEST_API_KEY',
});
```
<!-- prettier-ignore-end -->

### JSONPath

`string`

The JSON path to extract the data from the API response.

```js
const createOracleRes = await factory.createOracle({
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

### dataType

`DataType`

The type of data to be returned (e.g., "number").

```js
const createOracleRes = await factory.createOracle({
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

### apiKey

`string | undefined`

API key if required by the data source.

```js
const createOracleRes = await factory.createOracle({
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

```ts
import { type CreateOracleMessage } from '@iexec/iexec-oracle-factory-wrapper';
```

`Observable<CreateOracleMessage>`
