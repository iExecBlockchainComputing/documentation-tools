# createCollection

Method to create a new collection in the Data Sharing smart-contract.

Having a collection is a required step before choosing how to distribute your
protected data.

A wallet address may own multiple collections.

## Usage

```js
const createCollectionResult = await dataProtectorSharing.createCollection();
```

## Return value

```ts twoslash
import { type CreateCollectionResponse } from '@iexec/dataprotector';
```

### collectionTokenId

`number`

The collection token ID.

### txHash

`string`

The transaction hash corresponding to the execution of the function.
