# revokeOneAccess

Method to revoke access to a single user.

## Usage

```javascript
const revokeAccess = await dataProtector.revokeOneAccess(
    grantedAccess
)
```

{% hint style="info" %}
The grantedAccess parameter represent the object that can be get from the fetchGrantedAccess() method
{% endhint %}

## Return value example

```javascript
{
    access: {
        apprestrict: '0xea6912aed5183cd6c1ad9e5e434becb2a060cd0d',
        dataset: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        datasetprice: '0',
        requesterrestrict: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        salt: '0x0147499ca7604fe9343a71c99125f1c3f8af0e1ebb933d570cb653ef8eb043b8'
        sign: '0xc22c1f57f0b68af0fb4833e776adb73f30cc197445834bf564e9829913e104b07ab856ac39085edb5c9180f430c1ee2f29021ae33cd79eb0ddb73181e347799f1b',
        tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
        volume: '1',
        workerpoolrestrict: '0x0000000000000000000000000000000000000000'
    },
    txHash: '0x9f7e76a220aba21c6a9c79bd1680eaf33b10afc2127593fd7e9a9e2b03c2c9fd'     
}
```

## Configuration

### grantedAccess (required)

The grantedAccess object can be get from the fetchGrantedAccess method.

<pre class="language-javascript"><code class="lang-javascript">const revokeAccess = await dataProtector.revokeOneAccess(
<strong>    grantedAccess
</strong>)
</code></pre>
