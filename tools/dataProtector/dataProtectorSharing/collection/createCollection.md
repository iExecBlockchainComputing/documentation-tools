# createCollection

Method to create a new collection in the Data Sharing smart-contract.

Having a collection is a required step before choosing how you would like to distribute your
protected data.

A wallet address may have multiple collections.

## Usage

```js
const createCollectionResult = await dataProtectorSharing.createCollection();
```

## Return value

```js
import { type CreateCollectionResponse } from "@iexec/dataprotector";
```

The collection token ID created and the transaction hash of the function action.


## Error

TODO
