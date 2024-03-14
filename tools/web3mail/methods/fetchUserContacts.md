# fetchUserContacts

Method to get the ETH addresses that gave access to their protected data for messaging usage to a specific user address or ENS.

## Usage

```js
const contactsList = await web3mail.fetchUserContacts({
  userAddress: "0xF048eF3d7E3B33A465E0599E641BB29421f7Df92",
});
```

## Parameters

```ts
import { type FetchUserContactsParams } from "@iexec/web3mail";
```

### userAddress

`Address`

Specify the Ethereum address of the user from whom you wish to obtain the list of contact.

```js
const contactsList = await web3mail.fetchUserContacts({
  userAddress: "0xF048eF3d7E3B33A465E0599E641BB29421f7Df92",
});
```

## Return value

```ts
import { type Contact } from "@iexec/web3mail";
```

[`Contract[]`](../types.md#contact)
