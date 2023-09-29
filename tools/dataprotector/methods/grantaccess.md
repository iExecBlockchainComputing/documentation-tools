# grantAccess

Method to grant access to a protected data from an application that will process the data and from a user.

## Usage

```javascript
const grantedAccess = await dataProtector.grantAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1'
})
```

## Return value example

```javascript
{
    apprestrict: '0xea6912aed5183cd6c1ad9e5e434becb2a060cd0d',
    dataset: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    datasetprice: '0',
    requesterrestrict: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    salt: '0x0147499ca7604fe9343a71c99125f1c3f8af0e1ebb933d570cb653ef8eb043b8'
    sign: '0xc22c1f57f0b68af0fb4833e776adb73f30cc197445834bf564e9829913e104b07ab856ac39085edb5c9180f430c1ee2f29021ae33cd79eb0ddb73181e347799f1b',
    tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
    volume: '1',
    workerpoolrestrict: '0x0000000000000000000000000000000000000000'
}
```

## Configuration

### protectedData (required)

Protected data address on which access will be granted.

<pre class="language-javascript"><code class="lang-javascript">const grantedAccess = await dataProtector.grantAccess({
<strong>    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
</strong>    authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1'
})
</code></pre>

### authorizedApp (required)

Application address which will be able to process the data in a secured environment.

<pre class="language-javascript"><code class="lang-javascript">const grantedAccess = await dataProtector.grantAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
<strong>    authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
</strong>    authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1'
})
</code></pre>

{% hint style="info" %}
If you want to authorize every app to use the protected data, write **0x00000000000000000000000000000000000000**
{% endhint %}

### authorizedUser (required)

User address who will have the right to use the data without knowing it.

<pre class="language-javascript"><code class="lang-javascript">const grantedAccess = await dataProtector.grantAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
<strong>    authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1'
</strong>})
</code></pre>

{% hint style="info" %}
If you want to authorize every user to use the protected data, write **0x00000000000000000000000000000000000000**
{% endhint %}

### pricePerAccess (optional)

The defined price in nRLC for each access of the data.

<pre class="language-javascript"><code class="lang-javascript">const grantedAccess = await dataProtector.grantAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
<strong>    pricePerAccess: 3
</strong>})
</code></pre>

### numberOfAccess (optional)

The number of times the data can be processed and used. The numberOfAccess defaults to 1 if omitted.

<pre class="language-javascript"><code class="lang-javascript">const grantedAccess = await dataProtector.grantAccess(
    args: {
        protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
<strong>        numberOfAccess: 10
</strong>    }
)
</code></pre>
