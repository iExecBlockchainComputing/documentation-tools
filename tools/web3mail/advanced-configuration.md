---
description:
  Customize iExec Web3Mail with advanced options like custom iApp address, iApp
  whitelist, IPFS node, and subgraph URL for tailored blockchain email
  communication.
---

# Advanced configuration

The `IExecWeb3mail` constructor accepts configuration options object. As these
options are very specific, you won't need to use them for a standard usage of
`@iexec/web3mail`.

## Parameters

```ts twoslash
import { type Web3MailConfigOptions } from '@iexec/web3mail';
```

### dappAddressOrENS

The Ethereum contract address or ENS (Ethereum Name Service) for the web3mail
dApp.

If not provided, the default ENS `web3mail.apps.iexec.eth` pointing to the
latest version of the web3mail dApp provided by iExec will be used.

You can find the corresponding dApp address with Bellecour explorer:
[https://explorer.iex.ec/bellecour/search/web3mail.apps.iexec.eth](https://explorer.iex.ec/bellecour/search/web3mail.apps.iexec.eth).

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  dappAddressOrENS: 'web3mail.apps.iexec.eth', // [!code focus]
});
```

### dappWhitelistAddress

The Ethereum contract address for the web3mail dApps whitelist. By granting
access to a whitelist, email address owners ensure their email is still
available to consumers even after a new version of web3mail dApp gets released.

If not provided, the default whitelist smart contract address provided by iExec
will be used.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  dappWhitelistAddress: '0x781482C39CcE25546583EaC4957Fb7Bf04C277D2', // [!code focus]
});
```

See it in
[https://blockscout-bellecour.iex.ec/](https://blockscout-bellecour.iex.ec/address/0x781482C39CcE25546583EaC4957Fb7Bf04C277D2)

### dataProtectorSubgraph

The subgraph URL for querying data.

If not provided, the default data protector subgraph provided by iExec will be
used.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  dataProtectorSubgraph:
    'https://thegraph-product.iex.ec/subgraphs/name/bellecour/dataprotector', // [!code focus]
});
```

### ipfsNode

The IPFS node URL for content uploads. Use this option if you want to use your
own IPFS node to upload content.

If not provided, the default IPFS node provided by iExec will be used.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  ipfsNode: 'https://ipfs-upload.v8-bellecour.iex.ec', // [!code focus]
});
```

### ipfsGateway

The IPFS gateway URL used for content downloads. Mainly used for checking
content uploaded on the IPFS network. Use this option if you want to use your
own IPFS node for content downloads.

If not provided, the default IPFS gateway provided by iExec will be used.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  ipfsGateway: 'https://ipfs-gateway.v8-bellecour.iex.ec', // [!code focus]
});
```

### iexecOptions

Low level configuration options for `iexec` SDK, see
[iexec SDK documentation IExecConfigOptions](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/IExecConfigOptions.md)
for more details.
