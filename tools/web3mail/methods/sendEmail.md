# sendEmail

This method allows an authorized entity to send an email message to a User
without needing to know their email address.

The recipient email address is stored in a `protectedData` entity. The user
receiving email must explicitly authorize you to send them email communications
and permission must be granted for the `Web3Mail` tool to use the
`protectedData` entity containing their email address. This is best done by
granting authorization to the Web3Mail app whitelist
`0x781482C39CcE25546583EaC4957Fb7Bf04C277D2` as `authorizedApp`. Refer to the
[Data Protector `grantAccess`](../../dataProtector/dataProtectorCore/grantAccess.md)
documentation for more details.

## Usage

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  contentType: 'text/html',
  senderName: 'Awesome project team',
  label: 'some-cutom-id',
  workerpoolAddressOrEns: 'prod-v8-bellecour.main.pools.iexec.eth',
  dataMaxPrice: 42,
  appMaxPrice: 42,
  workerpoolMaxPrice: 42,
});
```

## Return value example

The `sendEmail` method returns a unique identifier for the email task on the
iExec side chain. You can view the status of the `sendEmail` method by
monitoring the task on the [iExec Explorer](https://explorer.iex.ec/bellecour).

```json
{
  "taskId": "0x882cbfb34453f260dfa14d224fd9ae0263edbfcb"
}
```

## Parameters

```ts twoslash
import { type SendEmailParams } from '@iexec/web3mail';
```

### protectedData

`Address`

The address of the `protectedData` holding the contact's email address.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...', // [!code focus]
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

### emailSubject

`string`

_maximum length_: 78 characters

The subject line for the email you are sending. This field is limited to 78
characters. Any characters beyond that limited are truncated.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject', // [!code focus]
  emailContent: 'My email content',
});
```

### emailContent

`string`

optionally HTML encoded

_maximum size_: 512 kb

The email content that needs to be sent. The content is limited to 512 kb in
size. Email content is encrypted and stored in IPFS.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content', // [!code focus]
});
```

### contentType

`string | undefined`

may be one of: `text/html`, `text/plain`

This is used by the mail client to properly render the delivered text. Set this
to `text/html` to enable rich HTML content in your email.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: '<h1>Hello world!</h1>',
  contentType: 'text/html', // [!code focus]
});
```

### senderName

`string | undefined`

_default_: `Web3Mail`

Allows specifying a sender name for the email. This is used by the mail client
in rendering the email to the user. The Web3Mail tool appends `via Web3Mail` to
the supplied name. Setting this to `Tom`, for example, will result in a sender
name of, `Tom via Web3Mail`, in the delivered email. If no name is specified,
the Web3Mail tool sets this to a value of `Web3Mail`.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  senderName: 'Awesome project team', // [!code focus]
});
```

### label

`string | undefined`

Allows adding a custom public label. The Web3Mail tool writes this onchain as
`iexec_args` in the deal params.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  label: 'some-cutom-id', // [!code focus]
});
```

### workerpoolAddressOrEns

`workerpoolAddressOrEns | undefined`

_default_: iExec's production workerpool

Allows specifying the workerpool that will run the Web3Mail application.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
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

Allows specifying the maximum amount (in nRLC) you are willing to pay the email
address owner for using their data. The owner of the protected email address
receives this as a payment for sharing their data.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  dataMaxPrice: 42, // [!code focus]
});
```

### appMaxPrice

`number | undefined`

_default_: `0`

Allows specifying the maximum amount (in nRLC) you are willing to pay the
Web3Mail app provider (iExec) for using the Web3Mail application.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  appMaxPrice: 42, // [!code focus]
});
```

### workerpoolMaxPrice

`number | undefined`

_default_: `0`

Allows specifying the maximum amount you want to pay the workerpool provider for
using their infrastructure to run the web3mail app in nRLC.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  workerpoolMaxPrice: 42, // [!code focus]
});
```

## Return value

```ts twoslash
import { type SendEmailResponse } from '@iexec/web3mail';
```

### taskId

`Addess`

This uniquely identifies the email task on the iExec side chain. You can view
the status of the `sendEmail` method by monitoring the task on the
[iExec Explorer](https://explorer.iex.ec/bellecour).
