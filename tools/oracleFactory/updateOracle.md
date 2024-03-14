# updateOracle

Method to update an existing oracle to have the latest data from the linked API.

Below, following public API which gives ethereum price in usd will be used :
<https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd>

## Usage

```js
const updateOracleRes = await factory.updateOracle({
  cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
  workerpool: '0x0e7...',
  targetBlockchains: ['134', '137'],
});
```

## Parameters

### cid

Content ID of the Oracle that needs to be updated.

```js
const updateOracleRes = await factory.updateOracle({
  cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit', // [!code focus]
  workerpool: '0x0e7...',
  targetBlockchains: ['134', '137'],
});
```

### workerpool

Address of the workerpool that should perform the update.

```js
const updateOracleRes = await factory.updateOracle({
  cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
  workerpool: '0x0e7...', // [!code focus]
  targetBlockchains: ['134', '137'],
});
```

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.

:::

### targetBlockchains (optional)

Array of target blockchain IDs where the oracle is deployed. 137 for polygon,
134 for iExec.

```js
const updateOracleRes = await factory.updateOracle({
  cid: 'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit',
  workerpool: '0x0e7...',
  targetBlockchains: ['134', '137'], // [!code focus]
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
