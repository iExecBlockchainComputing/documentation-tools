# addAppToAddOnlyAppWhitelist

Method to add an app (iExec TEE dApp) into the `AddOnlyAppWhitelist`.

::: warning

Once added, you can't remove an app from the whitelist.

_Why?_

This is mainly **to protect users** who have paid for protected data. Imagine
the collection owner could remove all apps from the initial whitelist, users
having rented the protected data could no longer consume it.

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

### app {#app-param}

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