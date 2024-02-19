# removeProtectedDataFromRenting

Method to remove a protected data from renting.

If there are still active rentals to the protected data, these rentals will be honored until the
end of their rental period.

## Usage

```javascript
const notForRentingAymoreResult = await dataProtector.removeProtectedDataFromRenting({
  protectedDataAddress: '0x123abc...',
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
