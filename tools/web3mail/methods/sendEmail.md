---
description:
  Send secure, permissioned emails using iExec Web3Mail's sendEmail method—no
  need to know the user's email, just their authorized protectedData address.
---

# sendEmail

This method allows an authorized entity to send an email message to a user
without needing to know their email address.

The recipient email address is stored in a `protectedData` entity. The user
receiving the email must explicitly authorize you to send them email
communications and permission must be granted for the `Web3Mail` tool to use the
`protectedData` entity containing their email address. This is best done by
granting authorization to the Web3Mail app whitelist
`0x781482C39CcE25546583EaC4957Fb7Bf04C277D2` as `authorizedApp`. Refer to the
[Data Protector `grantAccess`](../../dataProtector/dataProtectorCore/grantAccess.md)
documentation for more details.

::: tip

For executing the `sendEmail` method with a voucher or xRLC, refer to the
dedicated section in the documentation under
"[How to Pay for web3mail](../../../overview/how-to-pay-for-web3mail)".

:::

## Usage

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

## Parameters

```ts twoslash
import { type SendEmailParams } from '@iexec/web3mail';
```

### protectedData <RequiredBadge />

**Type:** `Address`

The address of the `protectedData` holding the contact's email address.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...', // [!code focus]
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

### emailSubject <RequiredBadge />

**Type:** `string`  
**Max**: 78 characters

The subject line for the email you are sending. This field is limited to 78
characters. Any characters beyond that limited are truncated.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject', // [!code focus]
  emailContent: 'My email content',
});
```

### emailContent <RequiredBadge />

**Type:** `string`

optionally HTML encoded

_maximum size_: 512 kb

The email content that needs to be sent. The content is limited to 512 kb in
size. Email content will be encrypted and stored in IPFS.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content', // [!code focus]
});
```

### useVoucher <OptionalBadge />

**Type:** `boolean`  
**Default:** `false`

This optional param allows you to pay for the deal using your voucher. Make sure
that your voucher is held by your connected wallet.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  useVoucher: true, // [!code focus]
});
```

::: tip

If your voucher doesn't have enough xRLC to cover the deal, the SDK will
automatically get the required amount to your iExec account. Ensure that your
voucher is authorized to access your iExec account and that your account has
sufficient funds for this transfer to proceed.

:::

### contentType <OptionalBadge />

**Type:** `text/plain` or `text/html`  
**Default:** `text/plain`

This is used by the mail client to properly render the delivered text. Set this
to `text/html` to enable rich HTML content in your email.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: '<h1>Hello world!</h1>',
  contentType: 'text/html', // [!code focus]
});
```

### senderName <OptionalBadge />

**Type:** `string`  
**Default:** `Web3Mail`  
**Min:** 3 characters  
**Max:** 20 characters

Allows specifying a sender name for the email. This is used by the mail client
in rendering the email to the user. The Web3Mail tool appends `via Web3Mail` to
the supplied name. Setting this to `Tom`, for example, will result in a sender
name of, `Tom via Web3Mail`, in the delivered email. If no name is specified,
the Web3Mail tool sets this to a value of `Web3Mail`.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  senderName: 'Awesome project team', // [!code focus]
});
```

### label <OptionalBadge />

**Type:** `string`

Allows adding a custom public label. The Web3Mail tool writes this onchain as
`iexec_args` in the deal params.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  label: 'some-cutom-id', // [!code focus]
});
```

### workerpoolAddressOrEns <OptionalBadge />

**Type:** `workerpoolAddressOrEns`  
**Default:** iExec's production workerpool

Allows specifying the workerpool that will run the Web3Mail application.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
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

### dataMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Allows specifying the maximum amount (in nRLC) you are willing to pay the email
address owner for using their data. The owner of the protected email address
receives this as a payment for sharing their data.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  dataMaxPrice: 42, // [!code focus]
});
```

### appMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Allows specifying the maximum amount (in nRLC) you are willing to pay the
Web3Mail app provider (iExec) for using the Web3Mail application.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  appMaxPrice: 42, // [!code focus]
});
```

### workerpoolMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Allows specifying the maximum amount you want to pay the workerpool provider for
using their infrastructure to run the web3mail app in nRLC.

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
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

**Type:** `Addess`

This uniquely identifies the email task on the iExec side chain. You can view
the status of the `sendEmail` method by monitoring the task on the
[iExec Explorer](https://explorer.iex.ec/bellecour).

## Error handling

### Validation errors

We use [yup](https://github.com/jquense/yup) to validate input parameters.

In case one is not valid, you'll get **a yup ValidationError**.

Example to check received Validation errors:

```ts
import { ValidationError } from '@iexec/web3mail';

try {
  await web3mail.sendEmail({
    protectedData,
    senderName: 'ab', // Bad input
    emailSubject,
    emailContent,
  });
} catch (err) {
  console.error(err.message); // "senderName must be at least 3 characters"

  // Or list all validation errors:
  if (err instanceof ValidationError) {
    console.error('Validation errors:', (err as ValidationError).errors);
  }
}
```

### Email schema error

To be able to send an email to a protected data, it needs to contain, well, an
email address.

If not, you'll get a `WorkflowError` in the form of:

```json5
{
  message: 'Failed to sendEmail',
  errorCause: Error('This protected data does not contain "email:string" in its schema.')
}
```

### iExec protocol errors

In case the iExec stack is to blame, we'll make it clear and you'll get a
specific `WorkflowError`:

```json5
{
  message: "A service in the iExec protocol appears to be unavailable. You can retry later or contact iExec's technical support for help.",
  errorCause: <Original error>,
  isProtocolError: true
}
```

### Workflow errors

For any other errors, you'll get a `WorkflowError` error in the form of:

```json5
{
  message: 'Failed to sendEmail',
  errorCause: <Original error>
}
```
