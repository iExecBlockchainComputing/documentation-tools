---
description:
  Retrieve all rentals for a specific protected data or user in iExec. Access
  detailed rental information based on the protected data address.
---

# getRentals

Method to get all rentals for:

- a specific protected data
- a specific user

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedDataActiveRentals = await dataProtectorSharing.getRentals({
  protectedData: '0x123abc...',
});
```

## Parameters

```ts twoslash
import { type GetRentalsParams } from '@iexec/dataprotector';
```

### renterAddress <OptionalBadge />

**Type:** `AddressOrENS`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userActiveRentals = await dataProtectorSharing.getRentals({
  renterAddress: '0x246bdf...', // [!code focus]
});
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
const protectedDataActiveRentals = await dataProtectorSharing.getRentals({
  protectedData: '0x123abc...', // [!code focus]
});
```

### includePastRentals <OptionalBadge />

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
const userRentals = await dataProtectorSharing.getRentals({
  renterAddress: '0x246bdf...',
  includePastRentals: true, // [!code focus]
});
```

## Return value

```ts twoslash
import { type GetRentalsResponse } from '@iexec/dataprotector';

// Child types
import type { ProtectedDataRental } from '@iexec/dataprotector';
```

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sdk/blob/c83e30e6ce8b55ecf8a35ecb4eb1014cd4ecefe9/packages/sdk/src/lib/types/sharingTypes.ts" target="_blank">See
Type ↗️</a>
