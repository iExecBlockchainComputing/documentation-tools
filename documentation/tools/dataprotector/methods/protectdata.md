# protectData

The iExec tool suite supports deployment of applications where the user of the application has complete and total control over access to their data. This ensures privacy and security when invoking these applications. Through use of the protectData API, a user may secure any type of data. Data may be secured using either promise or observable methods.

{% hint style="info" %}

The `protectData` method allows processing all data on the client side, including extracting the data schema prior to encryption.

The following data types are automatically detected: 

- Scalars
  - `boolean`
  - `number`
  - `string`
- Binary:
  - `application/octet-stream`
  - `application/pdf`
  - `application/xml`
  - `application/zip`
  - `audio/midi`
  - `audio/mpeg`
  - `audio/x-wav`
  - `image/bmp`
  - `image/gif`
  - `image/jpeg`
  - `image/png`
  - `image/webp`
  - `video/mp4`
  - `video/mpeg`
  - `video/x-msvideo`

Any undetected binary data type is categorized as `application/octet-stream`

{% endhint %}

## Parameters

The `protectData` method accepts the following parameters

### data (required)

This is the actual data the user is protecting. An email address, for example, may be submitted as:

<pre class="language-javascript"><code class="lang-javascript">const protectedData = await dataProtector.protectData({
<strong>    data: {
</strong><strong>        email: 'example@gmail.com'
</strong><strong>    }
</strong>})
</code></pre>

{% hint style="info" %}
Keep in mind that you can create your object with custom keys and any number of them as desired. Following this, the object will be encrypted.
{% endhint %}

The following example illustrates protection of multiple categories of data within one object:

```javascript
{
    email: 'example@gmail.com',
    SMTPserver: {
        port: 5000,
        smtp_server: 'smtp.gmail.com'
    }
}
```

### name (optional)

Allows providing a descriptive name for the protected data. This is considered public metadata, describing the protected data.

<pre class="language-javascript"><code class="lang-javascript">const protectedData = await dataProtector.protectData({
    data: {
        email: 'example@gmail.com'
    },
<strong>    name: 'My protected data name'
</strong>})

</code></pre>

{% hint style="info" %}
The name will be public and not encrypted. If you don't pass a name to your protected data we will automatically define it as "Untitled".
{% endhint %}


## Usage Examples

The `protectData` method may be invoked using either the promise pattern or the observable pattern. Examples of both approaches are included below.

### **1. With promise**

#### Sample invocation with promise pattern

```javascript
const protectedData = await dataProtector.protectData({
    data: {
        email: 'example@gmail.com'
    }
})
```

#### Return value example with promise pattern

```javascript
{ 
  name: "My protected data name",
  address: "0x459FA81e0731e1dd39DD578fa16E31ADe898023e",
  owner: "0xda225B8325A1818A4239a68990349987C4221828",
  schema: {
    email: "string"
  },
  creationTimestamp: 1685371355,
  transactionHash: "0x83c79bcf6e09861aa41d990024a16145dbb384ac19926789810cf59c94bac14f",
  zipFile: {
    "0": 80,
    "1": 75,
    "2": 3,
    "3": 4,
    "4": 10,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 72,
    "11": 117,
    "12": 189,
    "13": 86,
    "14": 170,
    "15": 140,
    "16": 255,
    "17": 118,
    "18": 3,
    "19": 0,
    "20": 0,
    "21": 0,
    "22": 3,
    "23": 0,
    "24": 0,
    "25": 0,
    "26": 5,
    "27": 0,
    "28": 0,
    "29": 0,
    "30": 101,
    "31": 109,
    "32": 97,
    "33": 105,
    "34": 108,
    "35": 98,
    "36": 97,
    "37": 114,
    "38": 80,
    "39": 75,
    "40": 1,
    "41": 2,
    "42": 20,
    "43": 0,
    "44": 10,
    "45": 0,
    "46": 0,
    "47": 0,
    "48": 0,
    "49": 0,
    "50": 72,
    "51": 117
  },
  encryptionKey: "m/c3TZHr7K7CYhf991OzfL4ROmtbmORPtFsiBK546mI="
}
```

{% hint style="info" %}
The zip file generated is a uint8array, so if you want to handle the binary data or download it consider adding a zip extension to it.
{% endhint %}

### **2. With observable**

#### Sample invocation with observable pattern

```javascript
const protectedData = await dataProtector.protectDataObservable({
    data: {
        email: 'example@gmail.com'
    }
}).subscribe({
      next: (data) => {
        if (mounted.current) {
          const { message } = data;
          switch (message) {
            case "DATA_SCHEMA_EXTRACTED":
              const dataSchema = data.schema;
              //Execute your customized logic here
              break;
            case "ZIP_FILE_CREATED":
              const zipFileUint8array= data.zipFile;
              //Execute your customized logic here
              break;
            case "ENCRYPTION_KEY_CREATED":
              //Execute your customized logic here
              break;
            case "FILE_ENCRYPTED":
              //Execute your customized logic here
              break;
            case "ENCRYPTED_FILE_UPLOADED":
              const multiaddr = data.multiaddr ;
              //Execute your customized logic here
              break;
            case "PROTECTED_DATA_DEPLOYMENT_REQUEST":
              //Execute your customized logic here
              break;
            case "PROTECTED_DATA_DEPLOYMENT_SUCCESS":
              const dataAddress = data.address;
              //Execute your customized logic here
              break;
            case "PUSH_SECRET_TO_SMS_SIGN_REQUEST":
              //Execute your customized logic here
              break;
            case "PUSH_SECRET_TO_SMS_SUCCESS":
              //Execute your customized logic here
              break;
            default:
          }
      
      },
      error: (e) => {
        //Setup how you handle errors
      },
      complete: () => {
        //Will be executed once the Protected Data creation is completed
      }
})
```

#### Return value example with observable pattern

<table><thead><tr><th width="278.5">Message</th><th>Return value</th></tr></thead><tbody><tr><td>DATA_SCHEMA_EXTRACTED</td><td><pre class="language-javascript"><code class="lang-javascript">schema: {
    "email": "string"
}
</code></pre></td></tr><tr><td>ZIP_FILE_CREATED</td><td><pre class="language-javascript"><code class="lang-javascript">zipFile: {
            "0": 80,
            "1": 75,
            "2": 3,
            "3": 4,
            "4": 10,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 72,
            "11": 117,
            "12": 189,
            "13": 86,
            "14": 170,
            "15": 140,
            "16": 255,
            "17": 118,
            "18": 3,
            "19": 0,
            "20": 0,
            "21": 0,
            "22": 3,
            "23": 0,
            "24": 0,
            "25": 0,
            "26": 5,
            "27": 0,
            "28": 0,
            "29": 0,
            "30": 101,
            "31": 109,
            "32": 97,
            "33": 105,
            "34": 108,
            "35": 98,
            "36": 97,
            "37": 114,
            "38": 80,
            "39": 75,
            "40": 1,
            "41": 2,
            "42": 20,
            "43": 0,
            "44": 10
}
</code></pre></td></tr><tr><td>ENCRYPTION_KEY_CREATED</td><td><pre class="language-javascript"><code class="lang-javascript">encryptionKey: 'Hm/c3TZHr7K7CYhf991OzfL4ROmtbmORPtFsiBK546mI='ja
</code></pre></td></tr><tr><td>FILE_ENCRYPTED</td><td><pre class="language-javascript"><code class="lang-javascript">encryptedFile: uint8array,
checksum: '0xcc2e86e73a429d7c2c38669ea61db2f07e78300f24687143dbf915133fd316c3'
</code></pre></td></tr><tr><td>ENCRYPTED_FILE_UPLOADED</td><td><pre class="language-javascript"><code class="lang-javascript">cid: 'ipfs.io/ipfs/QmVcYV3SCwYrN71QJwJ62L67o8NVKkZZse1r2JmwX5sUJa',
multiaddr: '/ipfs/QmVcYV3SCwYrN71QJwJ62L67o8NVKkZZse1r2JmwX5sUJa'
</code></pre></td></tr><tr><td>PROTECTED_DATA_DEPLOYMENT_REQUEST</td><td><pre class="language-javascript"><code class="lang-javascript">owner: '0xda225B8325A1818A4239a68990349987C4221828',
name: 'My protected data name',
schema: {
        "email": "string"
},
multiaddr: '/ipfs/QmVcYV3SCwYrN71QJwJ62L67o8NVKkZZse1r2JmwX5sUJa',
checksum: '0xcc2e86e73a429d7c2c38669ea61db2f07e78300f24687143dbf915133fd316c3'
</code></pre></td></tr><tr><td>PROTECTED_DATA_DEPLOYMENT_SUCCESS</td><td><pre class="language-javascript"><code class="lang-javascript">address: '0x459FA81e0731e1dd39DD578fa16E31ADe898023e',
owner: '0xda225B8325A1818A4239a68990349987C4221828',
txHash: '0x83c79bcf6e09861aa41d990024a16145dbb384ac19926789810cf59c94bac14f'
</code></pre></td></tr><tr><td>PUSH_SECRET_TO_SMS_SIGN_REQUEST</td><td><em>Empty</em></td></tr><tr><td>PUSH_SECRET_TO_SMS_SUCCESS</td><td><em>Empty</em></td></tr></tbody></table>
