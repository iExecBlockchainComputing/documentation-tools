# setProtectedDataForSale

Method to set a protected data for sale.

## Usage

```javascript
const { success, txHash } = await dataProtector.setProtectedDataForSale({
  protectedDataAddress: '0x123abc...',
  priceInNRLC: 2,
});
```

## Return value example

```json
{
  "success": true,
  "txHash": ""
}
```

## Parameters

### protectedDataAddress (required)

Address of the protected data.
