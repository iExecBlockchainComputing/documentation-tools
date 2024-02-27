# removeProtectedDataForSale

Method to remove a protected data for sale.

## Usage

```javascript
const notForSaleAymoreResult = await dataProtectorSharing.removeProtectedDataForSale({
  protectedDataAddress: '0x123abc...', // required
});
```

{% hint style="info" %}
Input parameters type: `RemoveProtectedDataForSaleParams`
{% endhint %}

## Return value example

```json
{
  "success": true,
  "txHash": "0x33e58a89631e6b4271528a1a65eaa9717bf5d2e098602f164e30fe56585895e6"
}
```

{% hint style="info" %}
Response type: `SuccessWithTransactionHash`
{% endhint %}

## Parameters

### protectedDataAddress (required)

`AddressOrENS`

Address of the protected data.
