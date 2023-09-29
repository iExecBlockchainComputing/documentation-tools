# fetchGrantedAccess

Method to fetch the access granted on a protected data.

## Usage

```javascript
const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
})
```

## Return value example

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

## Configuration

### protectedData (required)

Protected data address to find related to the granted access.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({
<strong>    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
</strong>})
</code></pre>

### authorizedApp (optional)

Filter the granted access by an authorized application address.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({        
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
<strong>    authorizedApp: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
</strong>})
</code></pre>

### authorizedUser (optional)

Filter the granted access by an authorized user address.

<pre class="language-javascript"><code class="lang-javascript">const listGrantedAccess = await dataProtector.fetchGrantedAccess({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
<strong>    authorizedUser: '0xth9840a85d5af5bf1d1762f925bdaddc4201f984'
</strong>})
</code></pre>
