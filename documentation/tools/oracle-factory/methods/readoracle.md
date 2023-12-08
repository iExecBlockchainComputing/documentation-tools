# readOracle

Method to retrieve the value from a specific oracle.
Example below is based on oracle created thanks to following public API which gives ethereum price in usd : https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

## Usage

```
const readOracleRes = await factory.readOracle("QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"); // Content ID of the Oracle
```

## Return value example

```
{
  value: 1995.74,
  date: 1700047387
}
```

## Configuration

### cid (required)

Content ID of the Oracle to be read.

<pre class="language-javascript"><code class="lang-javascript">const readOracleRes = await factory.readOracle(
<strong>    "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"
</strong>);
</code></pre>
