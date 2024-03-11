# createOracle

Method to create an oracle from a given API, limited to returning only one data point.
As an example below, following coingecko public API which gives ethereum price in usd will be used : <https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd>

## Usage

```js
const createOracleRes = await factory.createOracle({
  url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
  method: "GET",
  headers: {
    authorization: "%API_KEY%",
  },
  dataType: "number",
  JSONPath: "$.ethereum.usd",
  apiKey: "MY_TEST_API_KEY",
});
```

## Parameters

### url

The API URL to fetch data from.

```js
const createOracleRes = await factory.createOracle({
  url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
  // Other parameters...
});
```

### method

The HTTP method to use when making the API request (e.g., "GET").

```js
const createOracleRes = await factory.createOracle({
  method: "GET",
  // Other parameters...
});
```

### headers (optional)

Any headers required for the API request.

```js
const createOracleRes = await factory.createOracle({
  headers: {
    authorization: "%API_KEY%",
  },
  // Other parameters...
});
```

### dataType

The type of data to be returned (e.g., "number").

```js
const createOracleRes = await factory.createOracle({
  dataType: "number",
  // Other parameters...
});
```

### JSONPath

The JSON path to extract the data from the API response.

```js
const createOracleRes = await factory.createOracle({
  JSONPath: "$.ethereum.usd",
  // Other parameters...
});
```

### apiKey (optional)

API key if required by the data source.

```js
const createOracleRes = await factory.createOracle({
  apiKey: "MY_TEST_API_KEY",
  // Other parameters...
});
```

## Return value example

```js
{
  paramSet: {
    JSONPath: '$.ethereum.usd',
    body: '',
    dataType: 'number',
    dataset: '0x0eFf9Ba4304D5d3EB775cA9dB1F011e65C2eb0cE',
    headers: { authorization: '%API_KEY%' },
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
  },
  cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit'
}
```
