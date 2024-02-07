# createCollection

Method to create a new collection in the Data Sharing smart-contract.

Having a collection is a required step before choosing how you would like to distribute your
protected data.

A wallet address may have multiple collections.

## Usage

```javascript
const { collectionId } = await dataProtector.createCollection();
```

## Return value example

```javascript
{
  collectionId: '12'
}
```
