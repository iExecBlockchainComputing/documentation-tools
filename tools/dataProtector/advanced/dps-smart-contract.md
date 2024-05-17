# DataProtector Sharing smart contract

A specific smart contract has been developed to support all of the "Sharing"
module features.

It mainly serves as **a storage for collections**, their associated protected
data, and their owners.

## Code

You can find the Solidity code here:
<https://github.com/iExecBlockchainComputing/dataprotector-sdk/tree/v2/packages/sharing-smart-contract>

## DataProtectorSharing

Contract module which provides a mechanism for managing and sharing protected
data through collections, subscriptions, rentals, and sales. This contract
extends several functionalities from OpenZeppelin libraries and incorporates
access control, token handling, and order management.

::: tip FUNCTIONS

---

- consumeProtectedData(protectedData,workerpoolOrder, app)

- getProtectedDataRenter(protectedData, renterAddress)

- getCollectionSubscriber(collectionTokenId, subscriberAddress)

- createCollection(to)

- addProtectedDataToCollection(collectionTokenId, protectedData, appWhitelist)

- removeProtectedDataFromCollection(protectedData)

- subscribeToCollection(collectionTokenId,subscriptionParams)

- setProtectedDataToSubscription(protectedData)

- removeProtectedDataFromSubscription(protectedData)

- setSubscriptionParams(collectionTokenId,subscriptionParams)

- rentProtectedData(protectedData, rentingParams)

- setProtectedDataToRenting(protectedData, rentingParams)

- removeProtectedDataFromRenting(protectedData)

- buyProtectedData(protectedData, to, price)

- setProtectedDataForSale(protectedData, price)

- removeProtectedDataForSale(protectedData)

:::

:::tip EVENTS

---

- OwnershipTransferred(previousOwner, newOwner)

- ProtectedDataTransfer(protectedData, fromCollection, toCollection,
  appWhitelist)

- NewSubscription(collectionTokenId, subscriber, endDate)

- ProtectedDataAddedForSubscription(collectionTokenId, protectedData)

- ProtectedDataRemovedFromSubscription(collectionTokenId, protectedData)

- NewSubscriptionParams(collectionTokenId, subscriptionParams)

- NewRental(collectionTokenId, protectedData, renter, endDate)

- ProtectedDataAddedForRenting(collectionTokenId, protectedData, rentingParams)

- ProtectedDataRemovedFromRenting(collectionTokenId, protectedData)

- ProtectedDataSold(collectionTokenId, newOwner, protectedData)

- ProtectedDataAddedForSale(collectionTokenId, protectedData, price)

- ProtectedDataRemovedFromSale(collectionTokenId, protectedData)

- ProtectedDataConsumed(dealid, protectedData, mode)

:::

:::tip ERRORS

---

- OnlyPocoCallerAuthorized(account)

- EmptyCallData()

- InvalidSubscriptionParams(collectionTokenId, subscriptionParams)

- ProtectedDataNotForSale(protectedData)

- ProtectedDataCurrentlyBeingRented(protectedData)

- ProtectedDataNotAvailableForRenting(protectedData)

- ProtectedDataNotForSale(protectedData)

- InvalidPriceForPurchase(protectedData, price)

- WorkerpoolOrderNotFree(workerpoolOrder)

- NoValidRentalOrSubscription(collectionTokenId, protectedData)

- DurationInvalid(duration)

- OnGoingCollectionSubscriptions(collectionTokenId)

- ProtectedDataAvailableInSubscription(collectionTokenId, protectedData)

- ProtectedDataAvailableForRenting(collectionTokenId, protectedData)

:::
