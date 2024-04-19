# fetchGrantedAccess

This method provides a listing of all access grants given for the specified protected data object. It supports several optional parameters to restrict the size of the result set. Options for filtering include specifying an authorized user, an application, or both. You may optionally receive the results as a paginated list.

## Usage

The request object is a JSON FetchGrantedAccessParams object. Each address in the object is a String representation of an ethereum address or ENS name (Ethereum Name Service) reference.

```javascript
const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    authorizedUser: '0x4a3B7c1eF78fA81bDf1aAa314D09a97578b0CA37',
    page: 1,
    pageSize:100
});
```

## Return value example

The return value for this method has two fields: a `count` parameter indicating the number of results, and an array of `GrantedAccess` objects containing all access data. When using the optional paging parameters, the `count` will be limited by the selected `pageSize` parameter. You may use these result objects in conjunction with the [revokeOneAccess](revokeoneaccess.md) method to revoke a previously granted authorization for access.

```javascript
{
    count: 1;
    grantedAccess: GrantedAccess[
        {
            apprestrict: '0xea6912aed5183cd6c1ad9e5e434becb2a060cd0d',
            dataset: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
            datasetprice: '0',
            requesterrestrict: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
            salt: '0x0147499ca7604fe9343a71c99125f1c3f8af0e1ebb933d570cb653ef8eb043b8',
            sign: '0xc22c1f57f0b68af0fb4833e776adb73f30cc197445834bf564e9829913e104b07ab856ac39085edb5c9180f430c1ee2f29021ae33cd79eb0ddb73181e347799f1b',
            tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
            volume: '1',
            workerpoolrestrict: '0x0000000000000000000000000000000000000000'
        }
    ];
}
```

## Parameters

***protectedData (required)***
Address of the protected data object for which you are querying access authorization grants.
*type* - String representation of ethereum address or ENS name (Ethereum Name Service)

***authorizedApp (optional)***

Optional filter to restrict the results to include only authorizations for the specified application. 
*type* - String representation of ethereum address or ENS name (Ethereum Name Service)

{% hint style="info" %}
If you specified an application whitelist when using [`grantAccess`](./grantaccess.md), you must specify that same whitelist address when using this filtering option. The `fetchGrantedAccess` method does not check against whitelist smart contracts when aggregating results. If you granted authorization to a whitelist but specify an application address for the `authorizedApp` parameter, you will not receive any results unless you *also* explicitly granted access to that application address.
{% endhint %}

***authorizedUser (optional)***

Optional filter to restrict the results to include only authorizations for the specified user.

*type* - String representation of ethereum address or ENS name (Ethereum Name Service)

***page (optional)***

Specifies the results page to return. The default for this is `0` which returns all results. Pages are indexed starting at page 1. If using this field you may also specify a `pageSize` to control the size of the results.

***pageSize (optional)***

Specifies the number of records in each page of the result set. This is used in conjunction with the optional `page` parameter to constrain the size of the result. The default for this value is `20` but this only comes into play when specifying a `page` parameter.

## Result

This method returns an object with two fields:

***count***

An integer value indicating the number of results returned by this method. This is of particular note when using paging as the number of records returned may be smaller than the page size.

***grantedAccess***

This is an array of `grantedAccess` objects. Each object has the following fields:

**apprestrict** - address of the authorized application; a value of 0x0 indicates any application may access this data  
**dataset** - address of the `protectedData` containing user data  
**datasetprice** - price (in nRLC) to charge the user specified in `requesterrestrict` for each use of this `protectedData`  
**requesterrestrict** - address of the requester authorized to use this `protectedData` in workloads; a value of 0x0 indicates any requester may use this data  
**volume** - number of authorized uses of this `protectedData`; each use decrements this counter  
**workerpoolrestrict**- address of the decentralized infrastructure (worker pool) authorized to execute the application; a value of 0x0 indicates any worker pool may access this data  
**salt** - random value to make an order unique and reusable as nonce in a blockchain transaction  
**sign** - order signature of all the `grantedAccess` fields  
**tag** - defines whether a `protectedData` is usable in a TEE environment (Trusted Execution Environment); `0x00` is TEE while `0x03` is non-TEE  

