# sendEmail

Method to send an email to a user represented by an ETH address.

## Usage

```javascript
const sendEmail = await web3mail.sendEmail({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    emailSubject: 'My email subject',
    emailContent: 'My email content'
})
```

## Return value example

```javascript
{
    taskId: '0x882cbfb34453f260dfa14d224fd9ae0263edbfcb'
}
```

## Configuration

### protectedData (required)

Protected data address to which you will send the email.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
<strong>    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
</strong>    emailSubject: 'My email subject',
    emailContent: 'My mail content'
})
</code></pre>

### mailObject (required)

The email object that needs to be sent.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
<strong>    emailSubject: 'My email subject',
</strong>    emailContent: 'My mail content'
})
</code></pre>

### mailContent (required)

The email content that needs to be sent.

<pre class="language-javascript"><code class="lang-javascript">const sendEmail = await web3mail.sendEmail({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    emailSubject: 'My email subject',
<strong>    emailContent: 'My mail content'
</strong>})
</code></pre>
