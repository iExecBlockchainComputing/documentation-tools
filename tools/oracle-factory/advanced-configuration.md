---
description:
  Discover how to configure the iExec Oracle Factory SDK with advanced options,
  including custom smart contract addresses, IPFS nodes, and workerpools. Learn
  how to override default settings to tailor your oracle deployment for specific
  environments or infrastructures.
---

# Advanced configuration

The `IExecOracleFactory` constructor accepts configuration options object. As
these options are very specific, you won't need to use them for a standard usage
of `@iexec/iexec-oracle-factory-wrapper`.

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;
const options = {} as OracleFactoryOptions;

// ---cut---
new IExecOracleFactory(ethProvider, options);
```

## Options

### oracleContract

You can customize which oracle smart contract is being used to save oracles
values to and read oracles value from.

If not provided, the default oracle smart contract `VerifiedResultOracle` at
[0x36dA71ccAd7A67053f0a4d9D5f55b725C9A25A3E](https://blockscout-bellecour.iex.ec/address/0x36dA71ccAd7A67053f0a4d9D5f55b725C9A25A3E)
provided by iExec will be used.

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;

// ---cut---
new IExecOracleFactory(ethProvider, {
  oracleContract: '0x36dA71ccAd7A67053f0a4d9D5f55b725C9A25A3E',
});
```

### oracleApp

The Ethereum contract address or ENS (Ethereum Name Service) for the generic
oracle dApp.

This is the iExec dApp used to fetch the value from the source.

If not provided, the default ENS
[`oracle-factory.apps.iexec.eth`](https://explorer.iex.ec/bellecour/search/oracle-factory.apps.iexec.eth)
pointing to the latest version of the dApp provided by iExec will be used.

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;

// ---cut---
new IExecOracleFactory(ethProvider, {
  oracleApp: 'oracle-factory.apps.iexec.eth',
});
```

### oracleAppWhitelist

The Ethereum contract address for the generic oracle dApp whitelist.

This is the `IExecWhitelist` contract of iExec dApps authorized to write values
in the [oracle contract](#oraclecontract), this must contain the
[oracle app](#oracleapp)

If not provided, the default whitelist contract at
[0x26472b355849B409769545A8595fe97846a8F0C9](https://blockscout-bellecour.iex.ec/address/0x26472b355849B409769545A8595fe97846a8F0C9)
containing currently supported versions of generic oracle dApp provided by iExec
will be used.

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;

// ---cut---
new IExecOracleFactory(ethProvider, {
  oracleAppWhitelist: '0x26472b355849B409769545A8595fe97846a8F0C9',
});
```

### workerpool

The Ethereum contract address or ENS (Ethereum Name Service) of the workerpool
to use for running the dApp.

The workerpool must be listed in the authorized workerpools by the
[oracle contract](#oraclecontract)

If not provided, the default workerpool
[`prod-v8-bellecour.main.pools.iexec.eth`](https://explorer.iex.ec/bellecour/search/prod-v8-bellecour.main.pools.iexec.eth)
will be used.

::: tip

For learning purpose, the learn workerpool
[`prod-v8-learn.main.pools.iexec.eth`](https://explorer.iex.ec/bellecour/search/prod-v8-learn.main.pools.iexec.eth)
providing free computing power can be used.

:::

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;

// ---cut---
new IExecOracleFactory(ethProvider, {
  workerpool: 'prod-v8-bellecour.main.pools.iexec.eth',
});
```

### ipfsNode

The IPFS node URL for content uploads. Use this option if you want to use your
own IPFS node to upload content.

If not provided, the default IPFS node provided by iExec will be used.

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;

// ---cut---
new IExecOracleFactory(ethProvider, {
  ipfsNode: 'https://ipfs-upload.v8-bellecour.iex.ec',
});
```

### ipfsGateway

The IPFS gateway URL used for content downloads. Mainly used for checking
content uploaded on the IPFS network. Use this option if you want to use your
own IPFS node for content downloads.

If not provided, the default IPFS gateway provided by iExec will be used.

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;

// ---cut---
new IExecOracleFactory(ethProvider, {
  ipfsGateway: 'https://ipfs-gateway.v8-bellecour.iex.ec',
});
```

### iexecOptions

Low level configuration options for `iexec` SDK, see
[iexec SDK documentation IExecConfigOptions](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/IExecConfigOptions.md)
for more details.

```ts twoslash
import {
  IExecOracleFactory,
  OracleFactoryOptions,
} from '@iexec/iexec-oracle-factory-wrapper';
const ethProvider = {} as any;
const iexecOptions = {};

// ---cut---
new IExecOracleFactory(ethProvider, {
  iexecOptions,
});
```
