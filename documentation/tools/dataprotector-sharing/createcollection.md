# createCollection

Method to create a new collection in the Data Sharing smart-contract.

Having a collection is a required step before choosing how you would like to distribute your
protected data.

A wallet address may have multiple collections.

## Usage

```javascript
const createCollectionResult = await dataProtector.createCollection();
```

## Return value example

```json
{
  "collectionId": 12,
  "txHash": "0x33e58a89631e6b4271528a1a65eaa9717bf5d2e098602f164e30fe56585895e6"
}
```
