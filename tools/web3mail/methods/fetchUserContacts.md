---
description:
  Use fetchUserContacts from iExec Web3Mail to get users who authorized a
  specific address to email them.
---

# fetchUserContacts

This method provides a list of `contact` objects identifying all entities who
previously granted authorization to a specified entity to send them email
messages. Each contact contains the contact's ETH address as well as the ETH
address for the `protectedData` containing their email address.

## Usage

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const contactsList = await web3mail.fetchUserContacts({
  userAddress: '0x789cba...',
});
```

## Parameters

```ts twoslash
import { type FetchUserContactsParams } from '@iexec/web3mail';
```

### userAddress <RequiredBadge />

**Type:** `Address`

The user for which you wish to obtain the list of contacts.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const contactsList = await web3mail.fetchUserContacts({
  userAddress: '0x789cba...', // [!code focus]
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
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const contactsList = await web3mail.fetchUserContacts({
  userAddress: '0x789cba...',
  isUserStrict: true, // [!code focus]
});
```

## Return value

The result object contains a list of `contact` objects. Each `contact`
represents one user who previously granted authorization for the user identified
with `userAddress` to send them messages.

```ts twoslash
import { type Contact } from '@iexec/web3mail';
```

[`Contract[]`](../../types.md#contact)
