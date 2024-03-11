# readOracle

Method to retrieve the value from a specific oracle.
The example below is based on an oracle created using the following public API which provides
the price of Ethereum in USD:
[https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd](https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd)

## Usage

```js
const readOracleRes = await factory.readOracle(
  "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"
); // Content ID of the Oracle
```

## Parameters

### cid

Content ID of the Oracle to be read.

```js
const readOracleRes = await factory.readOracle(
  "QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit"
);
```

## Return value example

```js
{
  value: 1995.74,
  date: 1700047387
}
```
