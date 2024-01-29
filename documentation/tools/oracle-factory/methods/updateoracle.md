# updateOracle

Method to update an existing oracle to have the latest data from the linked API.

Below, following public API which gives ethereum price in usd will be used : https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

## Usage

```javascript
const updateOracleRes = await factory.updateOracle({
  cid: "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit", // Content ID of the Oracle
  workerpool: "0x0e7bc972c99187c191a17f3cae4a2711a4188c3f", // Workerpool address (required)
  targetBlockchains: ["134", "137"], // Target blockchain IDs, 137 for polygon, 134 for iExec (required)
});
```

## Return value example

```javascript
{
  dealid: '0x86e1d2b13cd176f86b2c9d10931bc20dba0d626f1dac07dd76c1b1cec569f232',
  taskid: '0x90a100c10780f1d0595dd9e37dc1655eb66f192bf1b2b31d719a6ca3c6b62d07',
  status: 'REVEALING'
}
```

## Configuration

### cid (required)

Content ID of the Oracle that needs to be updated.

<pre class="language-javascript"><code class="lang-javascript">const updateOracleRes = await factory.updateOracle({
<strong>    cid: "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit",
</strong>    // Other parameters...
})
</code></pre>

### workerpool (required)

Address of the workerpool that should perform the update.
Workerpool defined below is : 0x0e7bc972c99187c191a17f3cae4a2711a4188c3f.

<pre class="language-javascript"><code class="lang-javascript">const updateOracleRes = await factory.updateOracle({
<strong>    workerpool: "0x0e7bc972c99187c191a17f3cae4a2711a4188c3f",
</strong>    // Other parameters...
})
</code></pre>

### targetBlockchains (optional)

Array of target blockchain IDs where the oracle is deployed. 137 for polygon, 134 for iExec.

<pre class="language-javascript"><code class="lang-javascript">const updateOracleRes = await factory.updateOracle({
<strong>    targetBlockchains: ["134", "137"],
</strong>    // Other parameters...
})
</code></pre>
