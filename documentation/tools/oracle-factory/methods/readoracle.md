# readOracle

The readOracle method is designed to retrieve the value from a specific oracle. This enables users to access data fetched by an oracle, which serves as a reliable source of information sourced from external APIs or other data providers.

## Usage

As an example, we will utilize the CoinGecko public API oracle, which provides the Ethereum price in USD: <a href="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd">CoinGecko Ethereum API</a>.

```javascript
const readOracleRes = await readerOrFactory.readOracle(
  "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"
); // Content ID of the Oracle
```
{% hint style="info" %}
You can utilize either type of SDK instance, be it the basic IExecOracleFactory or the IExecOracleReader, to invoke the readOracle method.
{% endhint %}

## Return value example

```javascript
{
  value: 1995.74,
  date: 1700047387
}
```

## Parameters

### cid

Content ID of the Oracle to be read.

<pre class="language-javascript"><code class="lang-javascript">const readOracleRes = await readerOrFactory.readOracle(
<strong>  "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"
</strong>);
</code></pre>
