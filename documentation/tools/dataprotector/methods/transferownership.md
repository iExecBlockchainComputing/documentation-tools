# transferOwnership

Allows transferring ownership of protected data to a new owner, identified by their ETH address. The return value provides a transaction number and confirmation of the new owner of the data.

## Usage

```javascript
const transferResponse = await dataProtector.transferOwnership({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    newOwner: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
});
```

## Return value example

```javascript
[
    {
        "address": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
        "to": "0xnewowner...",
        "txHash": "0xabc123..."
    }
]
```

## Configuration

### protectedData (required)

Address of the protected data owned by you which is to be transferred to a new owner.

<pre class="language-javascript"><code class="lang-javascript">const transferResponse = await dataProtector.transferOwnership({
    <strong>protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',</strong>
    newOwner: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
});
</code></pre>

### newOwner (required)

ETH Address for the new owner for the specified data.

<pre class="language-javascript"><code class="lang-javascript">const transferResponse = await dataProtector.transferOwnership({
    protectedData: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    <strong>newOwner: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'</strong>
});
</code></pre>
