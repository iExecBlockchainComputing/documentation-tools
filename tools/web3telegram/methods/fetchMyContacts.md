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

## Return value

The result object contains a list of `contact` objects. Each `contact`
represents one user who previously granted you authorization to send them
messages.

```ts twoslash
import { type Contact } from '@iexec/web3telegram';
```
