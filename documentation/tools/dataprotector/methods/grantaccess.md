# grantAccess

Data encrypted through the Data Protector tool requires explicit authorization for runtime access. A newly created `protectedData` object has no inherent authorizations. This method grants permission to securely access the specified `protectedData` for processing using the `processProtectedData` method. Authorization to use the `protectedData` is given to a user in the context of an application (or a designated list of applications).

## Usage

```javascript
const grantedAccess = await dataProtector.grantAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    pricePerAccess: 3,
    numberOfAccess: 10
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

## Parameters

***protectedData (required)***


The ethereum address of the protected data supplied by the user.

***authorizedApp (required)***
The address of the application you wish to authorize to process the `protectedData` within a secure execution environment. You may specify either a single application or an application whitelist. To specify a whitelist, you provide the ETH address of an [iExec Whitelist Smart Contract](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/tree/main). This smart contract aggregates multiple application versions. This allows you to introduce new versions of your application without needing to grant access for the `protectedData` each time you do so.

{% hint style="info" %}
You may authorize a specific app or a whitelist of apps to use the protected data.

iExec uses the ENS `web3mail.apps.iexec.eth` for the latest version of the Web3Mail decentralized application.

iExec also maintains a whitelist for the Web3Mail decentralized application. Granting access to this whitelist allows use of an email `protectedData` with all versions of the Web3Mail application, ensuring you only have to grant this access once. The ETH address for this whitelist is **0x781482C39CcE25546583EaC4957Fb7Bf04C277D2**
{% endhint %}

***authorizedUser (required)***
The address of the user you wish to authorize to use the `protectedData`. Note that these users may not view or manipulate the data. This only grants permission for the user to submit the data to an iExec application.

{% hint style="info" %}
You may authorize all users to use the protected data by setting this to **0x0000000000000000000000000000000000000000**.
{% endhint %}

***pricePerAccess (optional)***
Allows specifying an optional nRLC cost associated with every access of the protected data.

*default*: 0

***numberOfAccess (optional)***

Allows optionally restricting the number of times the protected data may be processed and used. 

*default*: 1

`pricePerAccess` parameter specifies the usage fee in nano RLC (nRLC) associated with each access of the data. It represents the cost incurred for each individual interaction with application.

By invoking the grantAccess method with a specific `pricePerAccess` you define the fee that the specified user (`authorizedUser` parameter) users must pay for each access to the data when used with the specified application (`authorizedApp` parameter).

The fee is paid to the owner of the protected data.

<pre class="language-javascript"><code class="lang-javascript">const grantedAccess = await dataProtector.grantAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    authorizedUser: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
<strong>    pricePerAccess: 3
</strong>})
</code></pre>

{% hint style="info" %}
`pricePerAccess` is expressed in nano RLC (nRLC). nRLC is the smallest subdivision of the RLC token, 1 RLC equals to 10^9 nRLC. 

When provided, `pricePerAccess` must be a non-negative integer value.
{% endhint %}

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

## Result

The result of this method confirms the new access grant. It consists of a JSON `grantedAccess` object.

***grantedAccess***

The `grantedAccess` object has the following fields:

**apprestrict** - address of the authorized application; a value of 0x0 indicates any application may access this data  
**dataset** - address of the `protectedData` containing user data  
**datasetprice** - price (iun nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`  
**requesterrestrict** - address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data  
**volume** - number of authorized uses of this `protectedData`; each use decrements this counter  
**workerpoolrestrict**- address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data  
**salt** - random value to make an order unique and reusable as nonce in a blockchain transaction  
**sign** - order signature of all the `grantedAccess` fields  
**tag** - defines whether a `protectedData` is usable in a TEE environment; `0x00` is TEE while `0x03` is non-TEE  
