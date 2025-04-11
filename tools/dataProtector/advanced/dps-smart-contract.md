---
description:
  Learn about the DataProtector Sharing smart contract for managing and sharing
  protected data via collections, subscriptions, rentals, and sales. Explore the
  Solidity code and features in iExec’s implementation.
---

# DataProtector Sharing smart contract

A specific smart contract has been developed to support all of the "Sharing"
module features.

It mainly serves as **a storage for collections**, their associated protected
data, and their owners.

## Code

You can find the Solidity code here:
<https://github.com/iExecBlockchainComputing/dataprotector-sdk/tree/main/packages/sharing-smart-contract>

## DataProtectorSharing

This is a contract that provides a mechanism for managing and sharing protected
data through collections, subscriptions, rentals, and sales. This contract
extends several functionalities from OpenZeppelin libraries and incorporates
access control, token handling, and order management.

::: tip FUNCTIONS

---

#### General

- `consumeProtectedData(protectedData, workerpoolOrder, app)`
- `getProtectedDataRenter(protectedData, renterAddress)`
- `getCollectionSubscriber(collectionTokenId, subscriberAddress)`
- `createCollection(to)`
- `addProtectedDataToCollection(collectionTokenId, protectedData, appWhitelist)`
- `removeProtectedDataFromCollection(protectedData)`

#### Subscription

- `subscribeToCollection(collectionTokenId, subscriptionParams)`
- `setProtectedDataToSubscription(protectedData)`
- `removeProtectedDataFromSubscription(protectedData)`
- `setSubscriptionParams(collectionTokenId, subscriptionParams)`

#### Renting

- `rentProtectedData(protectedData, rentingParams)`
- `setProtectedDataToRenting(protectedData, rentingParams)`
- `removeProtectedDataFromRenting(protectedData)`

#### Sale

- `buyProtectedData(protectedData, to, price)`
- `setProtectedDataForSale(protectedData, price)`
- `removeProtectedDataForSale(protectedData)`

:::

:::tip EVENTS

---

#### General

- `OwnershipTransferred(previousOwner, newOwner)`
- `ProtectedDataTransfer(protectedData, fromCollection, toCollection, appWhitelist)`

#### Subscription

- `NewSubscription(collectionTokenId, subscriber, endDate)`
- `ProtectedDataAddedForSubscription(collectionTokenId, protectedData)`
- `ProtectedDataRemovedFromSubscription(collectionTokenId, protectedData)`
- `NewSubscriptionParams(collectionTokenId, subscriptionParams)`

#### Renting

- `NewRental(collectionTokenId, protectedData, renter, endDate)`
- `ProtectedDataAddedForRenting(collectionTokenId, protectedData, rentingParams)`
- `ProtectedDataRemovedFromRenting(collectionTokenId, protectedData)`

#### Sale

- `ProtectedDataSold(collectionTokenId, newOwner, protectedData)`
- `ProtectedDataAddedForSale(collectionTokenId, protectedData, price)`
- `ProtectedDataRemovedFromSale(collectionTokenId, protectedData)`
- `ProtectedDataConsumed(dealid, protectedData, mode)`

:::

:::tip ERRORS

---

#### General

- `OnlyPocoCallerAuthorized(account)`
- `EmptyCallData()`

#### Subscription

- `InvalidSubscriptionParams(collectionTokenId, subscriptionParams)`
- `OnGoingCollectionSubscriptions(collectionTokenId)`
- `ProtectedDataAvailableInSubscription(collectionTokenId, protectedData)`

#### Renting

- `ProtectedDataCurrentlyBeingRented(protectedData)`
- `ProtectedDataNotAvailableForRenting(protectedData)`
- `DurationInvalid(duration)`
- `ProtectedDataAvailableForRenting(collectionTokenId, protectedData)`

#### Sale

- `ProtectedDataNotForSale(protectedData)`
- `InvalidPriceForPurchase(protectedData, price)`
- `WorkerpoolOrderNotFree(workerpoolOrder)`
- `NoValidRentalOrSubscription(collectionTokenId, protectedData)`

:::
