---
description:
  Retrieve data from an oracle using the readOracle method of the iExec Oracle
  Factory SDK. In this guide, we fetch Ethereum price data from the CoinGecko
  API oracle using a specific content ID.
---

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

```ts twoslash
import { IExecOracleFactory } from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const readerOrFactory = new IExecOracleFactory(web3Provider);

// ---cut---
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
import type { ReadOracleParams } from '@iexec/iexec-oracle-factory-wrapper';
```

### paramSet or paramSetCid or oracleId <RequiredBadge />

::: tip

- The oracle `ParamSet` describes the parameters used to feed the oracle.

- Any different `ParamSet` has a unique `ParamSetCid` which is the Content ID of
  the document on IPFS. With a `ParamSetCid` anyone can retrieve the `ParamSet`
  from IPFS.

- The `OracleId` is the blockchain hash of the `ParamSet` it is used to store
  and read the value of an oracle on the Oracle contract.

:::

- ParamSet of the Oracle to be read.

<!-- prettier-ignore-start -->
```ts twoslash
import {
  IExecOracleFactory,
  ParamSet,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const readerOrFactory = new IExecOracleFactory(web3Provider);

// ---cut---
const paramSet: ParamSet = { // [!code focus]
  method: 'GET', // [!code focus]
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', // [!code focus]
  headers: { authorization: '%API_KEY%' }, // [!code focus]
  body: '', // [!code focus]
  dataset: '0x0eFf9Ba4304D5d3EB775cA9dB1F011e65C2eb0cE', // [!code focus]
  JSONPath: '$.ethereum.usd', // [!code focus]
  dataType: 'number', // [!code focus]
}; // [!code focus]

const readOracleRes = await readerOrFactory.readOracle(
  paramSet // [!code focus]
);
```
<!-- prettier-ignore-end -->

- ParamSet CID of the Oracle to be read.

```ts twoslash
import {
  IExecOracleFactory,
  ParamSetCID,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const readerOrFactory = new IExecOracleFactory(web3Provider);

// ---cut---
const paramSetCid: ParamSetCID = // [!code focus]
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit'; // [!code focus]

const readOracleRes = await readerOrFactory.readOracle(
  paramSetCid // [!code focus]
);
```

- Oracle ID of the Oracle to be read.

```ts twoslash
import {
  IExecOracleFactory,
  OracleID,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const readerOrFactory = new IExecOracleFactory(web3Provider);

// ---cut---
const oracleId: OracleID = // [!code focus]
  '0xf0f370ad33d1e3e8e2d8df7197c40f62b5bc403553b103858359687491234491'; // [!code focus]

const readOracleRes = await readerOrFactory.readOracle(
  oracleId, // [!code focus]
  {
    dataType: 'number', // When reading an oracle from its OracleID, the dataType must be specified.
  }
);
```

### options

#### dataType

When reading an oracle from its OracleID, the dataType must be specified.

<!-- prettier-ignore-start -->
```ts twoslash
import {
  IExecOracleFactory,
  OracleID,
  DataType,
} from '@iexec/iexec-oracle-factory-wrapper';
const web3Provider = {} as any;
const readerOrFactory = new IExecOracleFactory(web3Provider);

// ---cut---
const oracleId: OracleID =
  '0xf0f370ad33d1e3e8e2d8df7197c40f62b5bc403553b103858359687491234491';
const dataType: DataType = 'number';

const readOracleRes = await readerOrFactory.readOracle(
  oracleId,
  { // [!code focus]
    dataType, // [!code focus]
  } // [!code focus]
);
```
<!-- prettier-ignore-end -->

## Return value

`OracleValue`

```ts twoslash
import type { OracleValue } from '@iexec/iexec-oracle-factory-wrapper';
```
