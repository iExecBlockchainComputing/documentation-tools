# getUserAddOnlyAppWhitelist

Method to get `AddOnlyAppWhitelist`, you can filter by user ethereum address.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const allAppOnlyAppWhitelistAvailable =
  await dataProtectorSharing.getUserAddOnlyAppWhitelist();
```

## Parameters

```ts twoslash
import { type GetUserAppWhitelistParams } from '@iexec/dataprotector';
```

### user <OptionalBadge />

**Type:** `AddressOrENS`

Address or ENS of the user that manages the `AddAppToAddOnlyAppWhitelist`

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const allUserAddOnlyAppWhitelist =
  await dataProtectorSharing.getUserAddOnlyAppWhitelist({
    user: '0x123abc...', // [!code focus]
  });
```

## Return value

```ts twoslash
import { type GetUserAppWhitelistResponse } from '@iexec/dataprotector';

// Child types
import { type AddOnlyAppWhitelist } from '@iexec/dataprotector';
```
