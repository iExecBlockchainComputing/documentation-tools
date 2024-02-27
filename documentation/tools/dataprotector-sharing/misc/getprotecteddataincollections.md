# getProtectedDataInCollections

Method to consume a protected data, ie. visualize it or download it.

For this method to be successful, you need to either rent the protected data or have a
subscription to the corresponding collection.

## Usage

```javascript
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionTokenId: 12,
  collectionOwner: '0x123...',
  requiredSchema: { file: 'ArrayBuffer', secretFilename: 'string' },
  creationTimestampGte: 1707237580,
  page: 3,
  pageSize: 25
});
```

{% hint style="info" %}
Input parameters type: `GetProtectedDataInCollectionsParams`
{% endhint %}

## Return value example

```json
[
  {
    "name": "My shared protected data",
    "address": "0x123...",
    "schema": { "file": "ArrayBuffer", "secretFilename": "string" },
    "collectionTokenId": 12,
    "isIncludedInSubscription": true,
    "isRentable": true,
    "isForSale": false,
    "creationTimestamp": 1707237581
  }
]
```

{% hint style="info" %}
Response type: `Promise<ProtectedDataInCollection[]>`
{% endhint %}

## Possible errors

TODO
