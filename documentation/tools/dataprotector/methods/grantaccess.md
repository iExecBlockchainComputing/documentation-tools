# grantAccess

When a `protectedData` object is initially created via the `protectData` method, only the user creating the `protectedData` may access it. The `grantAccess` method authorizes an iExec application to securely access and utilize a piece of protected data. Only the specified user(s) may submit this protected data to this iExec application. The user(s) do not gain access to view the data, only to submit it for processing to a secure application environment.data and from a user.

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

The address of the protected data supplied by the user.

***authorizedApp (required)***

The address of the application permitted to process the protected data within a secure execution environment.

{% hint style="info" %}
If you want to authorize every app to use the protected data, write **0x00000000000000000000000000000000000000**
{% endhint %}

***authorizedUser (required)***

The address of the user(s) permitted to use this piece of protected data. Note that these users may not view or manipulate the data. This only grants permission for the user to submit the data to an iExec application.

{% hint style="info" %}
If you want to authorize every user to use the protected data, write **0x00000000000000000000000000000000000000**
{% endhint %}

***pricePerAccess (optional)***

Allows specifying an optional nRLC cost associated with every access of the protected data.

*default*: 0

***numberOfAccess (optional)***

Allows optionally restricting the number of times the protected data may be processed and used. 

*default*: 1

## Result

The result of this method confirms the new access grant. It consists of a JSON `grantedAccess` field.

***grantedAccess***

This is an array of `grantedAccess` objects. Each object has the following fields:

**apprestrict** - address of the authorized application; a value of 0x0 indicates any application may access this data  
**dataset** - address of the `protectedData` containing user data  
**datasetprice** - price (iun nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`  
**requesterrestrict** - address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data  
**volume** - number of authorized uses of this `protectedData`; each use decrements this counter  
**workerpoolrestrict**- address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data  
**salt** - TBD  
**sign** - TBD  
**tag** - TBD  