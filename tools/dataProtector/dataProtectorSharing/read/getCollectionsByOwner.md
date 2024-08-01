# getCollectionsByOwner

Method to get all collections for a specific user.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userCollections = await dataProtectorSharing.getCollectionsByOwner({
  owner: '0xa0c15e...',
});
```

## Parameters

```ts twoslash
import { type GetCollectionsByOwnerParams } from '@iexec/dataprotector';
```

### owner <RequiredBadge />

**Type:** `AddressOrENS`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userCollections = await dataProtectorSharing.getCollectionsByOwner({
  owner: '0xa0c15e...', // [!code focus]
});
```

### includeHiddenProtectedDatas <OptionalBadge />

**Type:** `boolean`  
**Default:** `false`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userCollectionsWithAllProtectedData =
  await dataProtectorSharing.getCollectionsByOwner({
    owner: '0xa0c15e...',
    includeHiddenProtectedDatas: true, // [!code focus]
  });
```

## Return value

```ts twoslash
import type { GetCollectionsByOwnerResponse } from '@iexec/dataprotector';

// Child types
import type {
  CollectionWithProtectedDatas,
  ProtectedDataInCollection,
  SubscriptionParams,
  RentingParams,
  SellingParams,
} from '@iexec/dataprotector';
```

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sdk/blob/c83e30e6ce8b55ecf8a35ecb4eb1014cd4ecefe9/packages/sdk/src/lib/types/sharingTypes.ts" target="_blank">See
Type ↗️</a>
