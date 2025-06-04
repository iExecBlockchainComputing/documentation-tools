---
description:
  Explore advanced configuration options for the IExecDataProtector constructor
  in the iExec DataProtector SDK. Customize Ethereum contract addresses,
  subgraph URLs, IPFS nodes, and more for specific needs.
---

# Advanced configuration

The `IExecDataProtector` constructor accepts additional configuration
parameters. As these parameters are very specific, they are not needed for a
standard usage of `@iexec/dataprotector`.

Similarly, not all functionalities need to be instantiated at once in the SDK,
as described in the [getting started](../getting-started.md#instantiate-sdk)
section.

## Parameters

```ts twoslash
import { type DataProtectorConfigOptions } from '@iexec/dataprotector';
```

### dataprotectorContractAddress

`AddressOrENS`

The Ethereum contract address or ENS (Ethereum Name Service) for dataProtector
smart contract. If not provided, the default dataProtector contract address will
be used.

```ts twoslash
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  dataprotectorContractAddress: '0x123abc...', // [!code focus]
});
```

### sharingContractAddress

`AddressOrENS`

The Ethereum contract address or ENS (Ethereum Name Service) for dataProtector
sharing smart contract. If not provided, the default dataProtector sharing
contract address will be used.

```ts twoslash
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  sharingContractAddress: '0x123abc...', // [!code focus]
});
```

### subgraphUrl

`string`

The subgraph URL for querying data.

If not provided, the default data protector subgraph provided by iExec will be
used.

```ts twoslash
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  subgraphUrl:
    'https://thegraph-product.iex.ec/subgraphs/name/bellecour/dataprotector', // [!code focus]
});
```

### ipfsNode

`string`

The IPFS node URL for content uploads. Use this option if you want to use your
own IPFS node to upload content.

If not provided, the default IPFS node provided by iExec will be used.

```ts twoslash
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  ipfsNode: 'https://ipfs-upload.v8-bellecour.iex.ec', // [!code focus]
});
```

### ipfsGateway

`string`

The IPFS gateway URL used for content downloads. Mainly used for checking
content uploaded on the IPFS network. Use this option if you want to use your
own IPFS node for content downloads.

If not provided, the default IPFS gateway provided by iExec will be used.

```ts twoslash
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  ipfsGateway: 'https://ipfs-gateway.v8-bellecour.iex.ec', // [!code focus]
});
```

### iexecOptions

Low level configuration options for `iexec` SDK, see
[iexec SDK documentation IExecConfigOptions](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/IExecConfigOptions.md)
for more details.

```ts twoslash
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: { smsURL: 'https://sms.scone-prod.v8-bellecour.iex.ec' }, // [!code focus]
});
```

::: info

🧪 While protected data are processed in **TEE** by **intel SGX** technology by
default, `@iexec/dataprotector` can be configured to create and process
protected data in the experimental **intel TDX** environment.

TDX mode is enabled by setting connecting the TDX SMS and using the TDX
workerpool.

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtector } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate dataProtector connected to the TDX SMS
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec',
  },
});
```

⚠️ Keep in mind: TDX mode is experimental and can be subject to instabilities or
discontinuity.

:::
