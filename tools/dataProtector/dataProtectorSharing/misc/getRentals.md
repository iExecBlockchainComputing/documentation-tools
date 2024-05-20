# getRentals

Method to get all rentals for:

- a specific protected data
- a specific user

## Usage

```js
const protectedDataActiveRentals = await dataProtectorSharing.getRentals({
  protectedData: '0x123abc...',
});
```

## Parameters

```ts twoslash
import { type GetRentalsParams } from '@iexec/dataprotector';
```

### renterAddress

`AddressOrENS | undefined`

```js
const userActiveRentals = await dataProtectorSharing.getRentals({
  renterAddress: '0x246bdf...', // [!code focus]
});
```

### protectedData

`AddressOrENS | undefined`

```js
const protectedDataActiveRentals = await dataProtectorSharing.getRentals({
  protectedData: '0x123abc...', // [!code focus]
});
```

### includePastRentals

`boolean | undefined`

_default_: `false`

```js
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
