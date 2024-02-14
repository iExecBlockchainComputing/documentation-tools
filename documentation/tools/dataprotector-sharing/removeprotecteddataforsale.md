# removeProtectedDataForSale

Method to remove a protected data for sale.

## Usage

```javascript
const { success, txHash } = await dataProtector.removeProtectedDataForSale({
  protectedDataAddress: '0x123abc...',
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
