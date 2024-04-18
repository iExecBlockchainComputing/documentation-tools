# addAppToAddOnlyAppWhitelist

Method to add an app (iExec Tee Dapp) into the `AddOnlyAppWhitelist`.

::: warning

You can't remove an app from the whitelist. The whitelist are only additive.

:::

## Usage

```js
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.addAppToAddOnlyAppWhitelist({
    addOnlyAppWhitelist: '0x123abc...',
    app: '0x127ahs...',
  });
```

## Parameters

```ts twoslash
import { type AddAppToAppWhitelistParams } from '@iexec/dataprotector';
```

### addOnlyAppWhitelist

`Address`

Address of the `addOnlyAppWhitelist` in which you want to add an app.

```js
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.addAppToAddOnlyAppWhitelist({
    addOnlyAppWhitelist: '0x123abc...', // [!code focus]
    app: '0x127ahs...',
  });
```

### app

`AddressOrENS`

Address of app that you want to add to the `addOnlyAppWhitelist`.

```js
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.addAppToAddOnlyAppWhitelist({
    addOnlyAppWhitelist: '0x123abc...',
    app: '0x127ahs...', // [!code focus]
  });
```

## Return value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)
