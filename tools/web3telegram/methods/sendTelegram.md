# sendTelegram

This method allows an authorized entity to send a telegram message to a User
without needing to know their username or Chat ID.

The recipient Chat ID is stored in a `protectedData` entity. The user receiving
message must explicitly authorize you to send them telegram communications and
permission must be granted for the `Web3Telegram` tool to use the
`protectedData` entity containing their chat ID. This is best done by granting
authorization to the Web3Telegram app whitelist
`0x781482C39CcE25546583EaC4957Fb7Bf04C277D2` as `authorizedApp`. Refer to the
[Data Protector `grantAccess`](../../dataProtector/dataProtectorCore/grantAccess.md)
documentation for more details.

## Usage

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  label: 'some-cutom-id',
  workerpoolAddressOrEns: 'prod-v8-bellecour.main.pools.iexec.eth',
  dataMaxPrice: 42,
  appMaxPrice: 42,
  workerpoolMaxPrice: 42,
});
```

## Parameters

```ts twoslash
import { type SendTelegramParams } from '@iexec/web3telegram';
```

### protectedData

`Address`

The address of the `protectedData` holding the contact's telegram chat ID.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...', // [!code focus]
  telegramContent: 'My telegram message content',
});
```

### telegramContent

`string`

_maximum size_: 512 kb

The telegram message content that needs to be sent. The content is limited to
512 kb in size. Telegram content is encrypted and stored in IPFS.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content', // [!code focus]
});
```

### label

`string | undefined`

Allows adding a custom public label. The Web3telegram tool writes this onchain
as `iexec_args` in the deal params.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  label: 'some-cutom-id', // [!code focus]
});
```

### workerpoolAddressOrEns

`workerpoolAddressOrEns | undefined`

_default_: iExec's production workerpool

Allows specifying the workerpool that will run the Web3Telegram application.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  workerpoolAddressOrEns: 'prod-v8-bellecour.main.pools.iexec.eth', // [!code focus]
});
```

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.

:::

### dataMaxPrice

`number | undefined`

_default_: `0`

Allows specifying the maximum amount (in nRLC) you are willing to pay the
telegram chat ID owner for using their data. The owner of the protected chat ID
receives this as a payment for sharing their data.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  dataMaxPrice: 42, // [!code focus]
});
```

### appMaxPrice

`number | undefined`

_default_: `0`

Allows specifying the maximum amount (in nRLC) you are willing to pay the
Web3telegram app provider (iExec) for using the Web3telegram application.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  appMaxPrice: 42, // [!code focus]
});
```

### workerpoolMaxPrice

`number | undefined`

_default_: `0`

Allows specifying the maximum amount you want to pay the workerpool provider for
using their infrastructure to run the web3telegram app in nRLC.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  workerpoolMaxPrice: 42, // [!code focus]
});
```

## Return value

```ts twoslash
import { type SendTelegramResponse } from '@iexec/web3telegram';
```

### taskId

`Addess`

This uniquely identifies the telegram task on the iExec side chain. You can view
the status of the `sendTelegram` method by monitoring the task on the
[iExec Explorer](https://explorer.iex.ec/bellecour).
