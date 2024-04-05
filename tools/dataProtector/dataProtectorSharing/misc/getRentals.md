# getRentals

Method to get all rentals for:

- a specific protected data
- a specific user

## Usage

```js
const protectedDataActiveRentals = await dataProtectorSharing.getRentals({
  protectedDataAddress: '0x123abc...',
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

### protectedDataAddress

`AddressOrENS | undefined`

```js
const protectedDataActiveRentals = await dataProtectorSharing.getRentals({
  protectedDataAddress: '0x123abc...', // [!code focus]
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
```
