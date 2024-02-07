# addToCollection

Method to transfer one of your protected data to a collection of yours in the Data Sharing
smart-contract.

Under the hood, this method performs two actions:
 - Approve the Data Sharing smart-contract to transfer the protected data.
 - Add the protected data to your collection.

## Usage

```javascript
const { collectionId } = await dataProtector.addToCollection({
  protectedDataAddress: '0x123abc...',
  collectionId: 12,
  onStatusUpdate: ({ title, isDone }) => {
    console.log(title, isDone);
  },
});
```

## Return value example

```javascript
{
  success: true
}
```

## Parameters

### protectedDataAddress (required)

Address of the protected data you'd like to add to your collection.

Before any smart-contract interaction, the existence of the protected data will be checked,
as well as the ownership: it should be the wallet address you used to instantiate
DataProtector SDK.

### collectionId (required)

Collection ID to which you'd like to add the protected data.

### onStatusUpdate (optional)

Callback function to be notified at intermediate steps.

You can expect this callback function to be called four times:

1️⃣
```javascript
{
  title: 'Give ownership to the collection smart-contract',
  isDone: false
}
```

2️⃣
```javascript
{
  title: 'Give ownership to the collection smart-contract',
  isDone: true
}
```

3️⃣
```javascript
{
  title: 'Add protected data to your collection',
  isDone: false
}
```

4️⃣
```javascript
{
  title: 'Add protected data to your collection',
  isDone: true
}
```
