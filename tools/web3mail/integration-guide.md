---
description:
  Integrate iExec Web3Mail to enable secure and private email communication via
  blockchain-based access control, ensuring user privacy and decentralized email
  control
---

# iExec Web3Mail Integration Guide

## Overview

Integrating **iExec Web3Mail** enables secure and private email communication
using blockchain-based access control. This allows users to send and receive
emails while maintaining full control over their data.

The integration process consists of the following steps:

1. **Get your user to protect their email address via the iExec Data Protector
   SDK.**
2. **Create the protected data via the iExec Data Protector SDK.**
3. **Grant access via the Data Protector SDK to authorize users to send
   emails.**
4. **Send emails securely using the Web3Mail SDK.**

## 1. Get your users to protect their email address

To enable messaging via Web3Mail, you need your users to protect their email
address using iExec's Data Protector.

An **email address** is protected and encrypted using iExec's technology. This
ensures that it remains **encrypted and private**, so only **authorized
senders** can contact the user **without revealing their actual email address**.
By **protecting their email address with iExec**, users ensure that only
**authorized applications and users** can send them emails.

### Steps:

- Ask the user to protect their email address using the Data Protector SDK.
- The protected data address will be used as an identifier for sending emails.
- Users maintain full control over who can send them emails and can revoke
  access at any time.

::: tip

- Once the email address is protected, all authorized senders can send emails
  without knowing the actual email address.
- The recipient can revoke access at any time to stop receiving emails from
  specific senders.

:::

## 2. Create the protected data with data protector SDK

Your users need to protect their email address using iExec's Data Protector to
ensure privacy and security.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'user@example.com', // User's email address
  },
});
```

## 3. Grant access via data protector SDK

To allow specific users or applications to send emails, you must explicitly
grant access.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // Protected email data address
  authorizedApp: '0x456def...', // Web3Mail app address
  authorizedUser: '0x789cba...', // Ethereum address of the authorized sender
  pricePerAccess: 3, // Cost per email (in iExec tokens)
  numberOfAccess: 10, // Allowed email count
  onStatusUpdate: ({ title, isDone }) => {
    console.log(title, isDone);
  },
});
```

## 4. Send emails via Web3Mail SDK

Once authorized, a user can send emails via Web3Mail SDK.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...', // Protected email data address
  emailSubject: 'Hello from Web3Mail',
  emailContent: 'This is a secure email sent via iExec Web3Mail',
  senderName: 'Arthur',
  contentType: 'text/html', // or 'text/plain'
});
```

## Conclusion

By integrating **iExec Web3Mail**, you ensure privacy, security, and
decentralized control over your email communication. Your users decide who can
send them emails and set a cost for access while keeping their email address
hidden.

For further support, join the iExec community on
[Discord](https://discord.com/invite/pbt9m98wnU).
