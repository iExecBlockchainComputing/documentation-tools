---
description:
  Explore the advanced configuration options for integrating Web3Telegram. Learn
  how to customize the dApp address, whitelist, subgraph, IPFS node, and more
  for secure Telegram communication on the iExec blockchain.
---

# Advanced configuration

The `IExecWeb3Telegram` constructor accepts configuration options object. As
these options are very specific, you won't need to use them for a standard usage
of `@iexec/web3telegram`.

## Parameters

```ts twoslash
import { type Web3TelegramConfigOptions } from '@iexec/web3telegram';
```

### dappAddressOrENS

The Ethereum contract address or ENS (Ethereum Name Service) for the
web3telegram dApp.

If not provided, the default ENS `web3telegram.apps.iexec.eth` pointing to the
latest version of the web3telegram dApp provided by iExec will be used.

You can find the corresponding dApp address with Bellecour explorer:
[https://explorer.iex.ec/bellecour/search/web3telegram.apps.iexec.eth](https://explorer.iex.ec/bellecour/search/web3telegram.apps.iexec.eth).

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dappAddressOrENS: 'web3telegram.apps.iexec.eth', // [!code focus]
});
```

### dappWhitelistAddress

The Ethereum contract address for the web3telegram dApps whitelist. By granting
access to a whitelist, Chat Id owners ensure their Chat Id is still available to
consumers even after a new version of web3telegram dApp gets released.

If not provided, the default whitelist smart contract address provided by iExec
will be used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dappWhitelistAddress: '0x192C6f5AccE52c81Fcc2670f10611a3665AAA98F', // [!code focus]
});
```

See it in
[https://blockscout-bellecour.iex.ec/](https://blockscout-bellecour.iex.ec/address/0x192C6f5AccE52c81Fcc2670f10611a3665AAA98F)

### dataProtectorSubgraph

The subgraph URL for querying data.

If not provided, the default data protector subgraph provided by iExec will be
used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dataProtectorSubgraph:
    'https://thegraph-product.iex.ec/subgraphs/name/bellecour/dataprotector', // [!code focus]
});
```

### ipfsNode

The IPFS node URL for content uploads. Use this option if you want to use your
own IPFS node to upload content.

If not provided, the default IPFS node provided by iExec will be used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  ipfsNode: 'https://ipfs-upload.v8-bellecour.iex.ec', // [!code focus]
});
```

### ipfsGateway

The IPFS gateway URL used for content downloads. Mainly used for checking
content uploaded on the IPFS network. Use this option if you want to use your
own IPFS node for content downloads.

If not provided, the default IPFS gateway provided by iExec will be used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  ipfsGateway: 'https://ipfs-gateway.v8-bellecour.iex.ec', // [!code focus]
});
```

### iexecOptions

Low level configuration options for `iexec` SDK, see
[iexec SDK documentation IExecConfigOptions](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/IExecConfigOptions.md)
for more details.
