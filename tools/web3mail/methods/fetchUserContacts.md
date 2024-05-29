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
  userAddress: '0xF048eF3d7E3B33A465E0599E641BB29421f7Df92',
});
```

## Parameters

```ts twoslash
import { type FetchUserContactsParams } from '@iexec/web3mail';
```

### userAddress

`Address`

The entity for which you wish to obtain the list of contacts.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---

const contactsList = await web3mail.fetchUserContacts({
  userAddress: '0xF048eF3d7E3B33A465E0599E641BB29421f7Df92', // [!code focus]
});
```

## Return value

The result object contains a list of `contact` objects. Each `contact`
represents one user who previously granted authorization for the user identified
with `userAddress` to send them messages.

```ts twoslash
import { type Contact } from '@iexec/web3mail';
```

[`Contract[]`](../types.md#contact)
