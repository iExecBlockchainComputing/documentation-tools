# sendEmail

Method to send an email to a user represented by an ETH address.

## Usage

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

### Usage Notes

- The maximum size of delivered email messages is 512 kb.
- Email content is encrypted and uploaded to IPFS.

## Parameters

```ts
import { type SendEmailParams } from '@iexec/web3mail';
```

### emailObject

`string`

The email object that needs to be sent.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

### emailContent

`string`

The email content that needs to be sent.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

### protectedData

`Address`

Protected data address to which you will send the email.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

### contentType

`string| undefined`

This may be one of: `text/html`, `text/plain` (default `text/plain`). This is
used by the mail client to properly render the delivered text, use it to enable
rich HTML content in your email.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: '<h1>Hello world!</h1>',
  contentType: 'text/html',
});
```

### senderName

`string| undefined`

Allows specifying a sender name for the email. This is used by the mail client
in rendering the email to the user.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  senderName: 'Awesome project team',
});
```

### label

`string| undefined`

Allows adding a custom public label that will be written onchain as `iexec_args`
in the deal params.

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  label: 'some-cutom-id',
});
```

### workerpoolAddressOrEns

`workerpoolAddressOrEns| undefined`

Allows specifying the workerpool to use (default iExec's production workerpool).

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  workerpoolAddressOrEns: 'prod-v8-bellecour.main.pools.iexec.eth',
});
```

::: tip

iExec currently offers a production workerpool located at the Ethereum Name
Service (ENS) address `prod-v8-bellecour.main.pools.iexec.eth`. This is the
default workerpool for running confidential computations on the iExec platform.

:::

### dataMaxPrice

`number| undefined`

Allows specifying the maximum amount you want to pay the email address provider
for accessing her/his data in nRLC (default 0).

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  dataMaxPrice: 42,
});
```

### appMaxPrice

`number| undefined`

Allows specifying the maximum amount you want to pay the web3mail app provider
for using her/his application in nRLC (default 0).

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  appMaxPrice: 42,
});
```

### workerpoolMaxPrice

`number| undefined`

Allows specifying the maximum amount you want to pay the workerpool provider for
using her/his infrastructure to run the web3mail app in nRLC (default 0).

```js
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  workerpoolMaxPrice: 42,
});
```

## Return value

```ts
import { type SendEmailResponse } from '@iexec/web3mail';
```

### taskId

`string`

A unique identifier associated with a task currently running on the iExec
Bellecour side chain. You may monitor task execution with the
[iExec blockchain explorer](https://explorer.iex.ec).
