# sendEmail

Method to send an email to a user represented by an ETH address.

## Usage

```javascript
const sendEmail = await web3mail.sendEmail({
  protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  emailSubject: "My email subject",
  emailContent: "My email content",
});
```

### Usage Notes

- The maximum size of delivered email messages is 512 kb.
- Email content is encrypted and uploaded to IPFS.

## Return value example

```javascript
{
  taskId: "0x882cbfb34453f260dfa14d224fd9ae0263edbfcb";
}
```

## Parameters

### protectedData (required)

Protected data address to which you will send the email.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
<strong>    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
</strong>    emailSubject: "My email subject",
    emailContent: "My email content"
})
</code></pre>

### emailObject (required)

The email object that needs to be sent.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
<strong>    emailSubject: "My email subject",
</strong>    emailContent: "My email content"
})
</code></pre>

### emailContent (required)

The email content that needs to be sent.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
<strong>    emailContent: "My email content"
</strong>})
</code></pre>

### contentType (optional)

This may be one of: `text/html`, `text/plain` (default `text/plain`). This is used by the mail client to properly render the delivered text, use it to enable rich HTML content in your email.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
    emailContent: "<h1>Hello world!</h1>",
<strong>    contentType: "text/html"
</strong>})
</code></pre>

### senderName (optional)

Allows specifying a sender name for the email. This is used by the mail client in rendering the email to the user.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
    emailContent: "My email content",
<strong>    senderName: "Awesome project team"
</strong>})
</code></pre>

### label (optional)

Allow adding a custom public label that will be written onchain as `iexec_args` in the deal params.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
    emailContent: "My email content",
<strong>    label: "some-cutom-id"
</strong>})
</code></pre>

### workerpoolAddressOrEns (optional)

Allows specifying the workerpool to use (default iExec's production workerpool).

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
    emailContent: "My email content",
<strong>    workerpoolAddressOrEns: "prod-v8-bellecour.main.pools.iexec.eth"
</strong>
})
</code></pre>

### dataMaxPrice (optional)

Allows specifying the maximum amount you want to pay the email address provider for accessing her/his data in nRLC (default 0).

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
    emailContent: "My email content",
<strong>    dataMaxPrice: 42
</strong>})
</code></pre>

### appMaxPrice (optional)

Allows specifying the maximum amount you want to pay the web3mail app provider for using her/his application in nRLC (default 0).

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
    emailContent: "My email content",
<strong>    appMaxPrice: 42
</strong>})
</code></pre>

### workerpoolMaxPrice (optional)

Allows specifying the maximum amount you want to pay the workerpool provider for using her/his infrastructure to run the web3mail app in nRLC (default 0).

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    emailSubject: "My email subject",
    emailContent: "My email content",
<strong>    workerpoolMaxPrice: 42
</strong>})
</code></pre>
