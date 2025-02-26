# iExec Web3Telegram Integration Guide

## Overview

Integrating **iExec Web3Telegram** enables secure and private messaging on
Telegram using blockchain-based access control. The process starts by **starting
a conversation with the iExec Web3Telegram bot** to retrieve your **Chat ID**
and enable message reception. Once you have your Chat ID, you must **protect it
using the iExec Data Protector SDK** to keep it encrypted and hidden from
unauthorized users. After protecting your Chat ID, you can **grant specific
users access** to send you messages by defining their Ethereum address and
setting message limits. Once authorized, users can leverage the **Web3Telegram
SDK** to send messages securely without ever knowing your actual Telegram
handle. This setup ensures **confidentiality, privacy, and decentralized
control** over your messaging, allowing only approved individuals to contact you
while maintaining full ownership of your data.

<!--
Try the demo of Web3telegram:

<a href="https://demo.iex.ec/pem" target="_blank" rel="noreferrer" class="link-as-block">
 ⚡Use case demo⚡
</a>
-->

## How to Get Your Chat ID

To retrieve your chat ID, start a conversation with
[**@IExecWeb3Telegrambot**](https://t.me/IExecWeb3TelegramBot) on Telegram.

The bot will reply with your chat ID. This ID is unique to your Telegram
account.

![Bot response](/bot-response.png)

Once you've created protected data, the bot will only be able to send messages
in the specific conversation with the bot.

All messages from Web3Telegram, regardless of the sender, will arrive in this
same conversation, depending on the chat ID. You can easily leave this
conversation at any time.

## Create Your Protected Data

To create Telegram protected data:

- Select Telegram as the type.
- Enter your chat ID in the designated field.
- Name your protected data for easy identification.

After creating your protected data, it's important to initiate a conversation
with the bot. This action authorizes the bot to send messages within that
specific conversation. Without this step, you will be unable to receive
messages.

## How to Protect Your Chat ID

To ensure privacy and security, you should protect your chat ID using the iExec
Data Protector SDK.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const protectedData = await dataProtectorCore.protectData({
  // [!code focus]
  data: {
    // [!code focus]
    chatId: '12345678', // [!code focus]
  }, // [!code focus]
});
```

## Authorizing Users

To authorize users to send you messages using the bot:

- Click on your protected data.
- Choose "Authorize New User".
- Define the user's Ethereum address and specify how many Telegram messages they
  can send you.

This can also be done programmatically using the iExec Data Protector SDK:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const grantedAccess = await dataProtectorCore.grantAccess({
  // [!code focus]
  protectedData: '0x123abc...', // your chat ID protected data address // [!code focus]
  authorizedApp: '0x456def...', // Web3Telegram app // [!code focus]
  authorizedUser: '0x789cba...', // address of the person you allow to send you messages // [!code focus]
  pricePerAccess: 3, // price you want to set when receiving messages // [!code focus]
  numberOfAccess: 10, // number of times they can send you messages // [!code focus]
  onStatusUpdate: ({ title, isDone }) => {
    // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

## Sending Messages via Web3Telegram

Once a user has been granted access, they can send messages using the
Web3Telegram SDK.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

const sendTelegram = await web3telegram.sendTelegram({
  // [!code focus]
  protectedData: '0x123abc...', // chat ID protected data address // [!code focus]
  senderName: 'Arthur', // [!code focus]
  telegramContent: 'My telegram message content', // [!code focus]
});
```

## Conclusion

With this setup, you can securely receive and send messages while maintaining
privacy using iExec's decentralized infrastructure. If you have any questions,
join the iExec community on [Discord](https://discord.com/invite/pbt9m98wnU).
