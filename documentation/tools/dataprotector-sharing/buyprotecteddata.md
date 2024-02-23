# buyProtectedData

Method to buy a protected data that is for sale.

"Buying" here means to get ownership of the protected data.

After buying a protected data, you'll be free to distribute it again at your own terms, or
to keep it for yourself.

## Usage

Input parameters type: `BuyProtectedDataParams`

```javascript
const { success } = await dataProtectorSharing.buyProtectedData({
  protectedDataAddress: '0x123abc...',
});
```

## Return value example

Response type: `SuccessWithTransactionHash`

```json
{
  "success": true,
  "txHash": "0x33e58a89631e6b4271528a1a65eaa9717bf5d2e098602f164e30fe56585895e6"
}
```

## Parameters

### protectedDataAddress (required)

Address of the protected data you'd like to buy.

### collectionTokenIdTo (optional)

Collection token id to which you'd like to transfer the ownership of the protected data.  
The Data Sharing smart-contract will still be the technical owner of the protected data, but you'll
still fully own it as you own the collection to which it'll transferred.

### appAddress (optional)

TODO
