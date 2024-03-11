# readOracle

Method to retrieve the value from a specific oracle.
The example below is based on an oracle created using the following public API which provides
the price of Ethereum in USD:
[https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd](https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd)

## Usage

```javascript
const readOracleRes = await factory.readOracle(
  "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"
); // Content ID of the Oracle
```

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

<pre class="language-javascript"><code class="lang-javascript">const readOracleRes = await factory.readOracle(
<strong>  "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"
</strong>);
</code></pre>
