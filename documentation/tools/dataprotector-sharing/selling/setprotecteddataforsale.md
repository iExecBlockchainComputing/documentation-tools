# setProtectedDataForSale

Method to set a protected data for sale.

During a successful sale, **the ownership** of the protected data **is transferred** to the buyer.
The buyer will then be able to set their own pricing parameters, or simply keep the
protected data for their own use.

## Usage

```javascript
const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedDataAddress: '0x123abc...', // required
  priceInNRLC: 2, // required
});
```

{% hint style="info" %}
Input parameters type: `SetProtectedDataForSaleParams`
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

### priceInNRLC (required)

`number`

The price you ask from someone who wants to buy the protected data.
