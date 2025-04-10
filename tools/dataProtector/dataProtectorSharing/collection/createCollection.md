---
description:
  Create a new NFT collection with iExec’s createCollection method. Organize and
  manage your protected data for seamless distribution and monetization through
  DataProtector Sharing.
---

# createCollection

Method to create a new collection in the Data Sharing smart contract.

Having a collection is a required step before choosing how to distribute your
protected data.

A wallet address may own multiple collections.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const createCollectionResult = await dataProtectorSharing.createCollection();
```

## Return value

```ts twoslash
import { type CreateCollectionResponse } from '@iexec/dataprotector';
```
