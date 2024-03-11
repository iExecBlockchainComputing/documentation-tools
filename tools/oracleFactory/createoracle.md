# createOracle

Method to create an oracle from a given API, limited to returning only one data point.
As an example below, following coingecko public API which gives ethereum price in usd will be used : https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

## Usage

```javascript
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

## Return value example

```javascript
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

## Parameters

### url

The API URL to fetch data from.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = await factory.createOracle({
<strong>    url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
</strong>    // Other parameters...
})
</code></pre>

### method

The HTTP method to use when making the API request (e.g., "GET").

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = await factory.createOracle({
<strong>    method: "GET",
</strong>    // Other parameters...
})
</code></pre>

### headers (optional)

Any headers required for the API request.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = await factory.createOracle({
<strong>    headers: {
        authorization: "%API_KEY%",
    },
</strong>    // Other parameters...
})
</code></pre>

### dataType

The type of data to be returned (e.g., "number").

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = await factory.createOracle({
<strong>    dataType: "number",
</strong>    // Other parameters...
})
</code></pre>

### JSONPath

The JSON path to extract the data from the API response.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = await factory.createOracle({
<strong>    JSONPath: "$.ethereum.usd",
</strong>    // Other parameters...
})
</code></pre>

### apiKey (optional)

API key if required by the data source.

<pre class="language-javascript"><code class="lang-javascript">const createOracleRes = await factory.createOracle({
<strong>    apiKey: "MY_TEST_API_KEY",
</strong>    // Other parameters...
})
</code></pre>
