# fetchGrantedAccess

Method to fetch the list of accesses granted on a protected data application. You may optionally receive the result as a paginated list.

## Usage

```javascript
const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    authorizedUser: '0xth9840a85d5af5bf1d1762f925bdaddc4201f984',
    page: 1,
    pageSize:100
})
```

## Return value example

This object has two fields, a `count` parameter listing the number of results, and an array of `GrantedAccess` objects containing all access data. When using the optional paging parameters, the `count` will be limited by the selected `pageSize` parameter.

```javascript
{
    count: 1;
    grantedAccess: GrantedAccess[
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
    ];
}
```

## Parameters

### protectedData (required)

Protected data address to find related to the granted access.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({
<strong>    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',</strong>
    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    authorizedUser: '0xth9840a85d5af5bf1d1762f925bdaddc4201f984',
    page: 1,
    pageSize:100
})
</code></pre>

### authorizedApp (optional)

Filter the granted access by an authorized application address.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({        
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
<strong>    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',</strong>
    authorizedUser: '0xth9840a85d5af5bf1d1762f925bdaddc4201f984',
    page: 1,
    pageSize:100
})
</code></pre>

### authorizedUser (optional)

Filter the granted access by an authorized user address.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
<strong>    authorizedUser: '0x4a3B7c1eF78fA81bDf1aAa314D09a97578b0CA37',</strong>
    page: 1,
    pageSize:100
})
</code></pre>

### page (optional)

Specifies the results page to return. The default for this is `0` which returns all results. Pages are indexed starting at page 1. If using this field you may also specify a `pageSize` to control the results.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    authorizedUser: '0x4a3B7c1eF78fA81bDf1aAa314D09a97578b0CA37',
    <strong>page: 1,</strong>
    pageSize:100
})
</code></pre>

### pageSize (optional)

Specifies the number of records in each page of the result set. This is used in conjunction with the optional `page` parameter to constrain the size of the result. The default for this value is `20` but this only comes into play when specifying a `page` parameter.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    authorizedUser: '0x4a3B7c1eF78fA81bDf1aAa314D09a97578b0CA37',
    page: 1,
    <strong>pageSize:100</strong>
})
</code></pre>
