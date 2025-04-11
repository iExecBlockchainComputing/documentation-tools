---
description:
  Integrate iExec Web3Telegram to enable secure and private Telegram messaging
  via blockchain-based access control, ensuring user privacy and decentralized
  messaging control
---

# iExec Web3Telegram Integration Guide

## Overview

Integrating **iExec Web3Telegram** enables secure and private messaging on
Telegram using blockchain-based access control. This allows users to send and
receive messages while maintaining full control over their data.

The integration process consists of the following steps:

1. **Get your user to retrieve their Chat ID from the iExec Web3Telegram bot.**
2. **Create the protected data via the iExec Data Protector SDK.**
3. **Grant access via the Data Protector SDK to authorize users to receive
   messages.**
4. **Send messages securely using the Web3Telegram SDK.**

## 1. Get your users to retrieve their chat ID

To enable messaging via Web3Telegram, you need to retrieve the recipient's Chat
ID.

A **Chat ID** is a unique identifier assigned to your Telegram account. It
allows applications to send messages to you **without revealing your actual
Telegram username or phone number**. By **protecting your Chat ID with iExec**,
you ensure that it remains **encrypted and private**, so only **authorized
senders** can contact you.

### Steps:

- Ask the recipient to open Telegram and start a conversation with
  [**@IExecWeb3Telegrambot**](https://t.me/IExecWeb3TelegramBot).
- The bot will reply with their unique Chat ID.
- Save this Chat ID as you will need it for the next steps.

::: tip

- Once the Chat ID is protected, all messages will arrive within this bot
  conversation.
- The recipient can leave the conversation at any time to stop receiving
  messages.

:::

## 2. Create the protected data with data protector SDK

After obtaining your user's Chat ID, you need to protect it using iExec’s Data
Protector to ensure privacy and security.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const protectedData = await dataProtectorCore.protectData({
  data: {
    telegram_chatId: '12345678', // Recipient's Chat ID
  },
});
```

## 3. Grant access via data protector SDK

To allow users to send messages, you must explicitly grant access to specific
users.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // Protected Chat ID data address
  authorizedApp: '0x456def...', // Web3Telegram app address
  authorizedUser: '0x789cba...', // Ethereum address of the authorized sender
  pricePerAccess: 3, // Cost per message (in iExec tokens)
  numberOfAccess: 10, // Allowed message count
  onStatusUpdate: ({ title, isDone }) => {
    console.log(title, isDone);
  },
});
```

## 4. Send messages via Web3Telegram SDK

Once authorized, a user can send messages via Web3Telegram SDK.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...', // Protected Chat ID data address
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
});
```

## Conclusion

By integrating **iExec Web3Telegram**, you ensure privacy, security, and
decentralized control over your Telegram messaging. Your users decide who can
send them messages and set a cost for access while keeping their Telegram handle
hidden.

For further support, join the iExec community on
[Discord](https://discord.com/invite/pbt9m98wnU).
