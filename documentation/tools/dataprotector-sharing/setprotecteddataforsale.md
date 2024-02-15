# setProtectedDataForSale

Method to set a protected data for sale.

During a successful sale, the ownership of the protected data is transferred to the buyer.
The buyer will then be able to set their own pricing parameters, or simply keep the
protected data for their own use.

## Usage

```javascript
const setForSaleResult = await dataProtector.setProtectedDataForSale({
  protectedDataAddress: '0x123abc...',
  priceInNRLC: 2,
});
```

## Return value example

```json
{
  "success": true,
  "txHash": "0x33e58a89631e6b4271528a1a65eaa9717bf5d2e098602f164e30fe56585895e6"
}
```

## Parameters

### protectedDataAddress (required)

Address of the protected data.

### priceInNRLC (required)

The price you ask from someone who wants to buy the protected data.
