# revokeAllAccessObservable

This method allows revoking any and all access granted to a piece of protected data. Using this method requires use of the JavaScript observable pattern. The method will not have any effect if this pattern is not used. You may optionally specify application or user addresses for revocation. If you do not specify either of these optional values, this method will revoke all access for all users and applications.

### Usage

```javascript
const revokeAllAccessObservable = dataProtector
    .revokeAllAccessObservable({
        protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
        authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1'
    })
    .subscribe({
        next: (data) => {
            console.log('next', data);
        },
        error: (error) => {
            console.log('error', error);
        },
        complete: () => {
            console.log('revokeAllAccess complete');
        },
    })
```

{% hint style="info" %}
You must explicitly subscribe to the observables for `dataProtector` to revoke access.
{% endhint %}

### Return value example

These are the possible events iExec may send the subscriber:

<table><thead><tr><th width="310">Message</th><th>Return value</th></tr></thead><tbody><tr><td>GRANTED_ACCESS_RETRIEVED</td><td><pre class="language-javascript"><code class="lang-javascript">access: GrantedAccess[]
</code></pre></td></tr><tr><td>REVOKE_ONE_ACCESS_REQUEST</td><td><pre class="language-javascript"><code class="lang-javascript">access: GrantedAccess
</code></pre></td></tr><tr><td>REVOKE_ONE_ACCESS_SUCCESS</td><td><pre class="language-javascript"><code class="lang-javascript">txHash: '0x9f7e76a220aba21c6a9c79bd1680eaf33b10afc2127593fd7e9a9e2b03c2c9fd',
access: GrantedAccess
</code></pre></td></tr></tbody></table>

### Parameters

### protectedData (required)

The address of the protected data subject to access revocation.

### authorizedApp (optional)

The application address to be removed from the authorization list for this piece of protected data.

### authorizedUser (optional)

The user address to be removed from the authorization list for this piece of protected data.

## Result

The result of this method is partially dependent on the parameters used in invoking it. In general, for each access on the specified protectedData, your results will contain an `access` field identifying what access(es) are processed and a `txHash` for your records as a confirmation of the operation.