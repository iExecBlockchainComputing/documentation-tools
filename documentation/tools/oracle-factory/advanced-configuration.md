# Advanced configuration

The `IExecOracleFactory` constructor accepts configuration options object.
As these options are very specific, you won't need to use them for a standard usage of `@iexec/iexec-oracle-factory-wrapper`.

```js
new IExecOracleFactory(ethProvider, options);
```

## Options

### oracleApp

The Ethereum contract address or ENS (Ethereum Name Service) for the generic oracle dapp.

If not provided, the default ENS `oracle-factory.apps.iexec.eth` pointing to the latest version of the dapp provided by iExec will be used.

```js
new IExecOracleFactory(ethProvider, {
  oracleApp: "oracle-factory.apps.iexec.eth",
});
```

### oracleContract

You can also customize which smart contract is being used to save oracles values to.

If not provided, the default smart contract address provided by iExec will be used.

```js
new IExecOracleFactory(ethProvider, {
  oracleContract: "0x781482C39CcE25546583EaC4957Fb7Bf04C277D2",
});
```

### ipfsNode

The IPFS node URL for content uploads. Use this option if you want to use your own IPFS node to upload content.

If not provided, the default IPFS node provided by iExec will be used.

```js
new IExecOracleFactory(ethProvider, {
  ipfsNode: "https://ipfs-upload.v8-bellecour.iex.ec",
});
```

### ipfsGateway

The IPFS gateway URL used for content downloads. Mainly used for checking content uploaded on the IPFS network. Use this option if you want to use your own IPFS node for content downloads.

If not provided, the default IPFS gateway provided by iExec will be used.

```js
new IExecOracleFactory(ethProvider, {
  ipfsGateway: "https://ipfs-gateway.v8-bellecour.iex.ec",
});
```

### iexecOptions

Low level configuration options for `iexec` SDK, see [iexec SDK documentation IExecConfigOptions](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/internal_.IExecConfigOptions.md) for more details.
