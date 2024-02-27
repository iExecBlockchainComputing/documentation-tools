# setProtectedDataToRenting

Method to allow a protected data to be rented.

## Usage

```javascript
const setForRentingResult = await dataProtectorSharing.setProtectedDataToRenting({
  protectedDataAddress: '0x123abc...',
  priceInNRLC: 1_000_000_000, // 1 RLC
  durationInSeconds: 60 * 60 * 24 * 30, // 30 days
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

The price you ask from someone who wants to rent the protected data.

### durationInSeconds (required)

The duration of the rental in seconds.
