# revokeAllAccessObservable

This method allows revoking authorizations granted to a `protectedData` entity. You may optionally specify application or user addresses for revocation. If you do not specify either of these optional values, this method will revoke all access for all users and applications.

## Usage

This method is asynchronous and requires use of the JavaScript observable pattern.

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
        }
    });
```

## Return value example

These are the possible events iExec may send the subscriber:

<table><thead><tr><th width="310">Message</th><th>Return value</th></tr></thead><tbody><tr><td>GRANTED_ACCESS_RETRIEVED</td><td><pre class="language-javascript"><code class="lang-javascript">access: GrantedAccess[]
</code></pre></td></tr><tr><td>REVOKE_ONE_ACCESS_REQUEST</td><td><pre class="language-javascript"><code class="lang-javascript">access: GrantedAccess
</code></pre></td></tr><tr><td>REVOKE_ONE_ACCESS_SUCCESS</td><td><pre class="language-javascript"><code class="lang-javascript">txHash: '0x9f7e76a220aba21c6a9c79bd1680eaf33b10afc2127593fd7e9a9e2b03c2c9fd',
access: GrantedAccess
</code></pre></td></tr></tbody></table>

## Parameters

***protectedData (required)***

The address of the `protectedData` subject to access revocation.

***authorizedApp (optional)***

The application address to be removed from the authorization list for the specified `protectedData`.

***authorizedUser (optional)***

The user address to be removed from the authorization list for the specified `protectedData`.

## Result

As an observable method, the `revokeAllAccessObservable` method returns several events. Those include the following.


### GRANTED_ACCESS_RETRIEVED

Triggered when the `revokeAllAccessObservable` method begins processing the authorization grants for the specified `protectedData`. It contains the following data element:

***access***

A JSON list of `grantedAccess` objects detailing the set of authorizations for the specified `protectedData`.

### REVOKE_ONE_ACCESS_REQUEST

Triggered when the `revokeAllAccessObservable` method begins revoking one of the authorizations for the `protectedData`. It contains the following data element:

***access***

The `grantedAccess` object detailing authorization iExec is currently revoking.

### REVOKE_ONE_ACCESS_SUCCESS

Triggered upon completion of an authorization revocation. It contains the following data elements:

***txHash***

The ID of the transaction that happened on iExec's side chain. You may view details on the transaction using the [iExec explorer](https://explorer.iex.ec).

***access***

The `grantedAccess` object detailing authorization iExec successfully revoked.

{% hint style="info" %}
The `grantedAccess` object has the following fields:

**apprestrict** - address of the authorized application; a value of 0x0 indicates any application may access this data  
**dataset** - address of the `protectedData` containing user data  
**datasetprice** - price (in nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`  
**requesterrestrict** - address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data  
**volume** - number of authorized uses of this `protectedData`; each use decrements this counter  
**workerpoolrestrict**- address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data  
**salt** - random value to make an order unique and reusable as nonce in a blockchain transaction  
**sign** - order signature of all the `grantedAccess` fields  
**tag** - defines whether a `protectedData` is usable in a TEE environment (Trusted Execution Environment) ; `0x00` is TEE while `0x03` is non-TEE  
{% endhint %}