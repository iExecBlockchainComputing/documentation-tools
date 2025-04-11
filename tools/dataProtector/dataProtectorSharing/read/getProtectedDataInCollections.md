---
description:
  Retrieve protected data from collections in iExec. Each protected data can
  belong to only one collection at a time, with results ordered by creation
  timestamp in descending order.
---

# getProtectedDataInCollections

Method to get protected data that are in collections.

A protected data can only be in one collection at a time.

Results are ordered by `creationTimestamp` desc.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedData =
  await dataProtectorSharing.getProtectedDataInCollections();
```

## Parameters

```ts twoslash
import { type GetProtectedDataInCollectionsParams } from '@iexec/dataprotector';
```

### protectedData <OptionalBadge />

**Type:** `AddressOrENS`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const oneProtectedData =
  await dataProtectorSharing.getProtectedDataInCollections({
    protectedData: '0x123abc...', // [!code focus]
  });
```

### collectionId <OptionalBadge />

**Type:** `number`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedDataByCollection =
  await dataProtectorSharing.getProtectedDataInCollections({
    collectionId: 12, // [!code focus]
  });
```

### collectionOwner <OptionalBadge />

**Type:** `AddressOrENS`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedDataByOwner =
  await dataProtectorSharing.getProtectedDataInCollections({
    collectionOwner: '0x123...', // [!code focus]
  });
```

### createdAfterTimestamp <OptionalBadge />

**Type:** `number`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const latestProtectedData =
  await dataProtectorSharing.getProtectedDataInCollections({
    createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT // [!code focus]
  });
```

### isRentable <OptionalBadge />

**Type:** `boolean`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const rentableProtectedData =
  await dataProtectorSharing.getProtectedDataInCollections({
    isRentable: true, // [!code focus]
  });
```

### isForSale <OptionalBadge />

**Type:** `boolean`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedDataForSale =
  await dataProtectorSharing.getProtectedDataInCollections({
    isForSale: true, // [!code focus]
  });
```

### isDistributed <OptionalBadge />

**Type:** `boolean`

Used to filter protected data that are either for sale, renting or part of a
subscription.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedDataForSale =
  await dataProtectorSharing.getProtectedDataInCollections({
    isDistributed: true, // [!code focus]
  });
```

### page <OptionalBadge />

**Type:** `number`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionId: 12,
  page: 3, // [!code focus]
  pageSize: 25,
});
```

### pageSize <OptionalBadge />

**Type:** `number`  
**Range:** `[10...1000]`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionId: 12,
  page: 3,
  pageSize: 25, // [!code focus]
});
```

## Return value

```ts twoslash
import type { GetProtectedDataInCollectionsResponse } from '@iexec/dataprotector';

// Child types
import type {
  ProtectedDataInCollection,
  RentingParams,
  SellingParams,
} from '@iexec/dataprotector';
```

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sdk/blob/c83e30e6ce8b55ecf8a35ecb4eb1014cd4ecefe9/packages/sdk/src/lib/types/sharingTypes.ts" target="_blank">See
Type ↗️</a>
