# getUserAddOnlyAppWhitelist

Method to get `AddOnlyAppWhitelist`, you can filter by user ethereum address.

## Usage

```js
const allAppOnlyAppWhitelistAvailable =
  await dataProtectorSharing.getUserAddOnlyAppWhitelist();
```

## Parameters

```ts twoslash
import { type GetUserAppWhitelistParams } from '@iexec/dataprotector';
```

### user

`AddressOrENS | undefined`

Address or ENS of the user that you want to get
`AddAppToAddOnlyAppWhitelist`that he managed.

```js
const allUserAddOnlyAppWhitelist =
  await dataProtectorSharing.getUserAddOnlyAppWhitelist({
    user: '0x123abc...', // [!code focus]
  });
```

## Return value

```ts twoslash
import { type GetUserAppWhitelistResponse } from '@iexec/dataprotector';
```
