# sendEmail

This method allows an authorized entity to send an email message to a User without needing to know their email address. 

The recipient email address is stored in a `protectedData` entity. The user receiving email must explicitly authorize you to send them email communications and permission must be granted for the `Web3Mail` tool to use the `protectedData` entity containing their email address. This is best done by granting authorization to the Web3Mail whitelist. Refer to the [Data Protector `grantAccess`](../../dataprotector/methods/grantaccess.md) documentation for more details.

## Usage



```javascript
const sendEmail = await web3mail.sendEmail({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  emailSubject: "My email subject",
  emailContent: "My email content",
  contentType: "text/html",
  senderName: "Awesome project team",
  label: "some-cutom-id",
  workerpoolAddressOrEns: "prod-v8-bellecour.main.pools.iexec.eth",
  dataMaxPrice: 42,
  appMaxPrice: 42,
  workerpoolMaxPrice: 42
});
```

## Return value example

The `sendEmail` method returns a unique identifier for the email task on the iExec side chain. You can view the status of the `sendEmail` method by monitoring the task on the [iExec Explorer](https://explorer.iex.ec/bellecour).

```javascript
{
  taskId: "0x882cbfb34453f260dfa14d224fd9ae0263edbfcb",
}
```

## Parameters

***protectedData***

The address of the `protectedData` holding the contact's email address.

*type*: A string representation of an Ethereum address.

***emailSubject***

The subject line for the email you are sending. This field is limited to 78 characters. Any characters beyond that limited are truncated.

*type*: String text

*maximum length*: 78 characters

***emailContent***

The email content that needs to be sent. The content is limited to 512 kb in size. Email content is encrypted and stored in IPFS.

*type*: String text, optionally HTML encoded

*maximum size*: 512 kb

***contentType (optional)***

This is used by the mail client to properly render the delivered text. Set this to `text/html` to enable rich HTML content in your email.

*type*: String, may be one of: `text/html`, `text/plain`

*default*: `text/plain`

***senderName (optional)***

Allows specifying a sender name for the email. This is used by the mail client in rendering the email to the user. The Web3Mail tool appends `via Web3Mail` to the supplied name. Setting this to `Tom`, for example, will result in a sender name of, `Tom via Web3Mail`, in the delivered email. If no name is specified, the Web3Mail tool sets this to a value of `Web3Mail`.

*type*: String

*default*: `Web3Mail`

***label (optional)***

Allows adding a custom public label. The Web3Mail tool writes this onchain as `iexec_args` in the deal params.

*type*: String

***workerpoolAddressOrEns (optional)***

Allows specifying the workerpool that will run the Web3Mail application.

*type*: String

*default*: iExec's production workerpool

***dataMaxPrice (optional)***

Allows specifying the maximum amount (in nRLC) you are willing to pay the email address owner for using their data. The owner of the protected email address receives this as a payment for sharing their data.

*type*: Integer

*default*: 0

***appMaxPrice (optional)***

Allows specifying the maximum amount (in nRLC) you are willing to pay the Web3Mail app provider (iExec) for using the Web3Mail application.

*type*: Integer

*default*: 0

***workerpoolMaxPrice (optional)***

Allows specifying the maximum amount you want to pay the workerpool provider for using their infrastructure to run the web3mail app in nRLC (default 0).

*type*: Integer

*default*: 0

## Result

The `Web3Mail` tool returns a single value:

***taskId***

This uniquely identifies the email task on the iExec side chain. You can view the status of the `sendEmail` method by monitoring the task on the [iExec Explorer](https://explorer.iex.ec/bellecour).

*type*: A string representation of an Ethereum address.