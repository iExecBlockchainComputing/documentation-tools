# readOracle

The `readOracle` method is designed to retrieve the value from a specific
oracle. This enables users to access data fetched by an oracle, which serves as
a reliable source of information sourced from external APIs or other data
providers.

## Usage

As an example, we will utilize the CoinGecko public API oracle, which provides
the Ethereum price in USD:
<a href="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd">CoinGecko
Ethereum API</a>.

```js
const readOracleRes = await readerOrFactory.readOracle(
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit'
); // Content ID of the Oracle
```

::: tip

You can utilize either type of SDK instance, be it the basic
`IExecOracleFactory` or the `IExecOracleReader`, to invoke the `readOracle`
method.

:::

## Parameters

```ts twoslash
import { type ReadOracleParams } from '@iexec/iexec-oracle-factory-wrapper';
```

### cid

`paramSetOrCidOrOracleId`

Content ID of the Oracle to be read.

```js
const readOracleRes = await readerOrFactory.readOracle(
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit' // [!code focus]
);
```

## Return value

```ts twoslash
import { type OracleValue } from '@iexec/iexec-oracle-factory-wrapper';
```

`OracleValue`
