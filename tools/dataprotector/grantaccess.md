# grantAccess

Method to grant access to a protected data from an application that will process the data and from a user.

## Usage

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
});
```

## Parameters

### protectedData

Protected data address on which access will be granted.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", // [!code focus]
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
});
```

### authorizedApp

Application address which will be able to process the data in a secured environment.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", // [!code focus]
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
});
```

::: tip
If you want to authorize every app to use the protected data, write **0x00000000000000000000000000000000000000**
:::

### authorizedUser

User address who will have the right to use the data without knowing it.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1", // [!code focus]
});
```

::: tip
If you want to authorize every user to use the protected data, write **0x00000000000000000000000000000000000000**
::

### pricePerAccess (optional)

The defined price in nRLC for each access of the data.

```js
const grantedAccess = await dataProtector.grantAccess({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  authorizedApp: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  authorizedUser: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  pricePerAccess: 3, // [!code focus]
});
```

### numberOfAccess (optional)

The number of times the data can be processed and used. The numberOfAccess defaults to 1 if omitted.

```js
const grantedAccess = await dataProtector.grantAccess(
    args: {
        protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
      numberOfAccess: 10  // [!code focus]
  }
)
```

## Return value example

```js
{
    apprestrict: '0xea6912aed5183cd6c1ad9e5e434becb2a060cd0d',
    dataset: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    datasetprice: '0',
    requesterrestrict: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    salt: '0x0147499ca7604fe9343a71c99125f1c3f8af0e1ebb933d570cb653ef8eb043b8'
    sign: '0xc22c1f57f0b68af0fb4833e776adb73f30cc197445834bf564e9829913e104b07ab856ac39085edb5c9180f430c1ee2f29021ae33cd79eb0ddb73181e347799f1b',
    tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
    volume: '1',
    workerpoolrestrict: '0x0000000000000000000000000000000000000000'
}
```
