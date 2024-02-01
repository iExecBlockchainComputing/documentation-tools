# Advanced configuration

The `IExecWeb3mail` constructor accepts configuration options object.
As these options are very specific, you won't need to use them for a standard usage of `@iexec/web3mail`.

```js
new IExecWeb3mail(ethProvider, options);
```

## Options

### dappAddressOrENS

The Ethereum contract address or ENS (Ethereum Name Service) for the web3mail dapp.

If not provided, the default ENS `web3mail.apps.iexec.eth` pointing to the latest version of the web3mail dapp provided by iExec will be used.

```js
new IExecWeb3mail(ethProvider, {
  dappAddressOrENS: "web3mail.apps.iexec.eth",
});
```

### dappWhitelistAddress

The Ethereum contract address for the web3mail dapps whitelist contract. By granting access to a whitelist, email address owner ensure their email is still available for consumers when a new version of web3mail dapp is released.

If not provided, the default whitelist smart contract address provided by iExec will be used.

```js
new IExecWeb3mail(ethProvider, {
  dappWhitelistAddress: "0x781482C39CcE25546583EaC4957Fb7Bf04C277D2",
});
```

### dataProtectorSubgraph

The subgraph URL for querying data.

If not provided, the default data protector subgraph provided by iExec will be used.

```js
new IExecWeb3mail(ethProvider, {
  dataProtectorSubgraph:
    "https://thegraph-product.iex.ec/subgraphs/name/bellecour/dataprotector",
});
```

### ipfsNode

The IPFS node URL for content uploads. Use this option if you want to use your own IPFS node to upload content.

If not provided, the default IPFS node provided by iExec will be used.

```js
new IExecWeb3mail(ethProvider, {
  ipfsNode: "https://ipfs-upload.v8-bellecour.iex.ec",
});
```

### ipfsGateway

The IPFS gateway URL used for content downloads. Mainly used for checking content uploaded on the IPFS network. Use this option if you want to use your own IPFS node for content downloads.

If not provided, the default IPFS gateway provided by iExec will be used.

```js
new ipfsGateway(ethProvider, {
  ipfsGateway: "https://ipfs-gateway.v8-bellecour.iex.ec",
});
```

### iexecOptions

Low level configuration options for `iexec` SDK, see [iexec SDK documentation IExecConfigOptions](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/internal_.IExecConfigOptions.md) for more details.
