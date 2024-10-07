# computeOracleID

The `computeOracleID` utility method is designed to compute the `OracleID` used
to store the oracle value on the oracle contract from the `ParamSet` or
`ParamSetCID.

::: tip

- The oracle `ParamSet` describes the parameters used to feed the oracle.

- Any different `ParamSet` has a unique `ParamSetCID` which is the Content ID of
  the document on IPFS. With a `ParamSetCID` anyone can retrieve the `ParamSet`
  from IPFS.

- The `OracleID` is the blockchain hash of the `ParamSet` it is used to store
  and read the value of an oracle on the Oracle contract.

:::

## Usage

```ts twoslash
import { utils } from '@iexec/iexec-oracle-factory-wrapper';

const oracleId = await utils.computeOracleId(
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit'
); // Content ID of the Oracle
```

## Parameters

```ts twoslash
import type {
  ParamSet,
  ParamSetCID,
} from '@iexec/iexec-oracle-factory-wrapper';
```

### paramSet or paramSetCid <RequiredBadge />

- ParamSet of the Oracle to be read.

<!-- prettier-ignore-start -->
```ts twoslash
import { utils, ParamSet } from '@iexec/iexec-oracle-factory-wrapper';

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

const oracleId = await utils.computeOracleId(
  paramSet // [!code focus]
);
```
<!-- prettier-ignore-end -->

- ParamSet CID of the Oracle to be read.

```ts twoslash
import { utils, ParamSetCID } from '@iexec/iexec-oracle-factory-wrapper';

// ---cut---
const paramSetCid: ParamSetCID = // [!code focus]
  'QmbXhtjAJysMMA69KkB8KohsEDTZA2PXuhYdAQcHjjQFit'; // [!code focus]

const oracleId = await utils.computeOracleId(
  paramSetCid // [!code focus]
);
```

## Return value

`OracleID`

```ts twoslash
import type { OracleID } from '@iexec/iexec-oracle-factory-wrapper';
```
