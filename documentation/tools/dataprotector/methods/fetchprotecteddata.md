# fetchProtectedData

Method to get all protected data encrypted or filtered by a specific owner and/or a data schema.

{% hint style="info" %}
A data schema is a representation of the structure of the data object.
{% endhint %}

## Usage

```javascript
const listProtectedData = await dataProtector.fetchProtectedData({
    owner: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
})
```

## Return value example

```javascript
[
    {
        name: 'John Doe professional email address',
        address: '0x9pCf798816D4b9b9866b5330EEa46a183ishy780',
        owner: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        creationTimestamp: 1687528535,
        schema: {
            "email": "string",
            "avatar": "JPEG",
            "smtp": {
                "server": "string",
                "port": "number"
            }
        }
    }  
]
```

## Configuration

### owner (optional)

Owner address to find related protected data.

<pre class="language-javascript"><code class="lang-javascript">const listProtectedData = await dataProtector.fetchProtectedData({
<strong>    owner: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
</strong>})
</code></pre>

### dataSchema (optional)

Filter the protected data by a specific schema.

<pre class="language-javascript"><code class="lang-javascript">const listProtectedData = await dataProtector.fetchProtectedData({
<strong>    schema: {
</strong>        "email": "string",
        "avatar": "JPEG",
        "smtp": {
            "server": "string",
            "port": "number"
        }
    }
})
</code></pre>
