# consumeProtectedData

Method to consume a protected data, ie. visualize it or download it.

For this method to be successful, you need to either rent the protected data or have a
subscription to the corresponding collection.

## Usage

Input parameters type: `ConsumeProtectedDataParams`

```javascript
const consumeProtectedDataResult = await dataProtectorSharing.consumeProtectedData();
```

or

```javascript
const consumeProtectedDataResult = await dataProtector.dataProtectorSharing.consumeProtectedData();
```

## Return value example

Response type: `ConsumeProtectedDataResponse`

TODO: To be completed.

```json
{
  "success": true,
  "txHash": "",
  "dealId":  "",
  "ipfsLink": "",
  "privateKey": ""
}
```

## Possible errors

```
This protected data does not exist in the subgraph.
```

```
This protected data is not owned by the sharing contract, hence a sharing-related method cannot be called.
```

```
You are not allowed to consume this protected data. You need to rent it first, or to subscribe to the user's collection.
```

```
The app related to the protected data is not owned by the DataProtector Sharing contract
```

TODO: Details needed.  
Explain that an `appAddress` can be given to `addToCollection()`, etc.

```
Could not find a free workerpool order, maybe too many requests? You might want to try again later.
```

Generic error:
```
Sharing smart contract: Failed to consume a ProtectedData
```
