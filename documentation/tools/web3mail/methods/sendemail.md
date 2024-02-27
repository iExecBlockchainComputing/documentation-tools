# sendEmail

This method allows an authorized application to send an email message to a User without needing to know their email address. Email content is encrypted and stored in IPFS so there is a permanent secure record of the communication for audit and traceability purposes.

> [!NOTE]
> - The maximum size of delivered email messages is 512 kb.
> - Email content is encrypted and uploaded to IPFS.

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

```javascript
{
  taskId: "0x882cbfb34453f260dfa14d224fd9ae0263edbfcb",
}
```

## Parameters

### protectedData

Protected data address to which you will send the email.

*type*: String representation of an Ethereum address.

### emailSubject

The email object that needs to be sent.

*type*: String text

### emailContent

The email content that needs to be sent.

*type*: String text, optionally HTML encoded

### contentType (optional)

This is used by the mail client to properly render the delivered text, use it to enable rich HTML content in your email.

*type*: String, may be one of: `text/html`, `text/plain`

*default*: `text/plain`

### senderName (optional)

Allows specifying a sender name for the email. This is used by the mail client in rendering the email to the user.

*type*: String

### label (optional)

Allows adding a custom public label that will be written onchain as `iexec_args` in the deal params.

*type*: String

### workerpoolAddressOrEns (optional)

Allows specifying the workerpool to use (default iExec's production workerpool).

*type*: String

*default*: iExec's production workerpool

### dataMaxPrice (optional)

Allows specifying the maximum amount you want to pay the email address provider for accessing her/his data in nRLC.

*type*: Integer

*default*: 0

### appMaxPrice (optional)

Allows specifying the maximum amount you want to pay the web3mail app provider for using her/his application in nRLC.

*type*: Integer

*default*: 0

### workerpoolMaxPrice (optional)

Allows specifying the maximum amount you want to pay the workerpool provider for using their infrastructure to run the web3mail app in nRLC (default 0).

*type*: Integer

*default*: 0