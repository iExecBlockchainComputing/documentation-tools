---
description:
  Use fetchUserContacts method from iExec web3telegram to get users who
  authorized a specific Ethereum address to message them
---

# fetchUserContacts

This method provides a list of `contact` objects identifying all entities who
previously granted authorization to a specified entity to send them telegram
messages. Each contact contains the contact's ETH address as well as the ETH
address for the `protectedData` containing their telegram chat ID.

## Usage

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---
const contactsList = await web3telegram.fetchUserContacts({
  userAddress: '0xF048eF3d7E3B33A465E0599E641BB29421f7Df92',
});
```

## Parameters

```ts twoslash
import { type FetchUserContactsParams } from '@iexec/web3telegram';
```

### userAddress

`Address`

The entity for which you wish to obtain the list of contacts.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---
const contactsList = await web3telegram.fetchUserContacts({
  userAddress: '0xF048eF3d7E3B33A465E0599E641BB29421f7Df92', // [!code focus]
});
```

### isUserStrict <OptionalBadge />

**Type:** `boolean`

This parameter enables fetching contacts who granted access exclusively to the
user and no one else.

:::tip

When someone grants access, you can choose to grant access to a specific user (a
wallet) or to any user (`0x0000000000000000000000000000000000000000`).

:::

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---
const contactsList = await web3telegram.fetchUserContacts({
  userAddress: '0x789cba...',
  isUserStrict: true, // [!code focus]
});
```

## Return value

The result object contains a list of `contact` objects. Each `contact`
represents one user who previously granted authorization for the user identified
with `userAddress` to send them messages.

```ts twoslash
import { type Contact } from '@iexec/web3telegram';
```

[`Contract[]`](../../types.md#contact)
