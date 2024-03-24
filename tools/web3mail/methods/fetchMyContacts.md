# fetchMyContacts

This method provides a list of `contact` objects identifying all users who
previously granted authorization to send them email messages. Each contact
contains the contact's ETH address as well as the ETH address for the
`protectedData` containing their email address.

## Usage

```js
const contactsList = await web3mail.fetchMyContacts();
```

## Return value

The result object contains a list of `contact` objects. Each `contact`
represents one user who previously granted you authorization to send them
messages.

```ts twoslash
import { type Contact } from '@iexec/web3mail';
```

[`Contact[]`](../types.md#contact)
