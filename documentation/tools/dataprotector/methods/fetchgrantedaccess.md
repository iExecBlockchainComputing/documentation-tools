# fetchGrantedAccess

This method provides a listing of all access grants given to the specified protected data object. It supports several optional parameters to restrict the size of the result set. Options for filtering include specifying a user, an application, or both.

## Usage

```javascript
const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    authorizedUser: '0x4a3B7c1eF78fA81bDf1aAa314D09a97578b0CA37'
})
```

## Return value example

The result of this method is a list of zero or more objects listing grants for authorization. You may use these result objects in conjunction with the [revokeOneAccess](revokeoneaccess.md) method to revoke a previously granted authorization for access.

```javascript
[
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
]
```

## Parameters

### protectedData (required)

Address of the protected data object for which you are querying access authorization grants.

### authorizedApp (optional)

Optional filter to restrict the results to include only authorizations for the specified application.

### authorizedUser (optional)

Optional filter to restrict the results to include only authorizations for the specified user.