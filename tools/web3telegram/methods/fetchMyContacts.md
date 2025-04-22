---
description:
  Use the fetchMyContacts method from iExec web3telegram to retrieve contact
  infos of users who authorized you to message them
---

# fetchMyContacts

This method provides a list of `contact` objects identifying all users who
previously granted authorization to send them telegram messages. Each contact
contains the contact's ETH address as well as the ETH address for the
`protectedData` containing their telegram chat ID.

## Usage

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---
const contactsList = await web3telegram.fetchMyContacts();
```

## Parameters

```ts twoslash
import { type FetchMyContactsParams } from '@iexec/web3telegram';
```

### isUserStrict <OptionalBadge />

**Type:** `boolean`

This parameter enables fetching contacts who granted access exclusively to the
user and no one else.

:::tip

When you grant access to someone, you can choose to grant access to a specific
user (a wallet) or to any user (`0x0000000000000000000000000000000000000000`).

:::

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---
const contactsList = await web3telegram.fetchMyContacts({
  isUserStrict: true, // [!code focus]
});
```

## Return value

The result object contains a list of `contact` objects. Each `contact`
represents one user who previously granted you authorization to send them
messages.

```ts twoslash
import { type Contact } from '@iexec/web3telegram';
```

[`Contact[]`](../../types.md#contact)
