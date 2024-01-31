# web3mailApplicationWhitelist

Convenience method to grant ongoing access to the Web3Mail Smart Contract Whitelist. With the whitelist feature, you can grant access to your email address with a pre-approved list of Web3Mai application versions, eliminating the need to repeat the process whenever an application is updated.

## Usage


```javascript
const web3mailApplicationWhitelist= "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";

const grantedAccess= await dataProtector.grantAccess({
    protectedData:"0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    authorizedApp:web3mailApplicationWhitelist,
    authorizedUser:"0xecb504d39723b0be0e3a9aa33d646642d1051ee1"
});
```

## Parameters

### protectedData (required)

Address of the dataProtector app you're granting access to.

<pre class="language-javascript"><code class="lang-javascript">const web3mailApplicationWhitelist= "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";

constgrantedAccess=awaitdataProtector.grantAccess({
    <strong>protectedData:"0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",</strong>
    authorizedApp:web3mailApplicationWhitelist,
    authorizedUser:"0xecb504d39723b0be0e3a9aa33d646642d1051ee1"
});
</code></pre>

### authorizedApp (required)

The Web3Mail smart contract address. This is a fixed value. Each time a new Web3Mail distributed app smart contract is deployed, it's added to this smart contract.

<pre class="language-javascript"><code class="lang-javascript"><strong>const web3mailApplicationWhitelist= "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";</strong>

constgrantedAccess=awaitdataProtector.grantAccess({
    protectedData:"0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    <strong>authorizedApp:web3mailApplicationWhitelist,</strong>
    authorizedUser:"0xecb504d39723b0be0e3a9aa33d646642d1051ee1"
});
</code></pre>

### authorizedUser (required)

The ETH address for the user needing authorized for the whitelist.

<pre class="language-javascript"><code class="lang-javascript">const web3mailApplicationWhitelist= "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";

constgrantedAccess=awaitdataProtector.grantAccess({
    protectedData:"0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    authorizedApp:web3mailApplicationWhitelist,
    <strong>authorizedUser:"0xecb504d39723b0be0e3a9aa33d646642d1051ee1"</strong>
});
</code></pre>
