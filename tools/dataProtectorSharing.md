# 🔐 DataProtectorSharing

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/dataprotector-sdk/v2?filename=packages%2Fsdk%2Fpackage.json&color=green)

DataProtectorSharing enhances the capabilities of the DataProtector module by introducing additional functionalities. These functionalities streamline the process of monetizing access to data. Specifically, they include subscription methods, enabling users to pay for continuous access to a protected data on a recurring basis. Moreover, the platform offers renting options, allowing users to access data temporarily for a specified duration in exchange for payment. Additionally, DataProtectorSharing provides sales capabilities, making it effortless to directly sell a protected data to interested parties.

DataProtectorSHaring bundles 22 methods:

#### Collections Methods

- **createCollection**— Creates a new collection within the system.
- **addToCollection**— Adds specified items to an existing collection.
- **removeCollection**— Deletes a collection from the system.
- **removeFromCollection**— Removes specified items from a collection.

#### Misc Methods

- **consumeProtectedData**— Allows access to protected data for authorized users.
- **getProtectedDataInCollection**— Retrieves protected data contained within a specified collection.
- **getProtectedDataPricingParams**— Fetches pricing parameters for accessing protected data.

#### Subscription Methods

- **setSubscriptionParams**— Configures parameters for subscription services.
- **setProtectedDataToSubscription**— Assigns protected data to a subscription plan.
- **subscribe**— Initiates a subscription to access protected data.
- **removeProtectedDataFromSubscription**— Removes protected data from an active subscription.

#### Renting Methods

- **setProtectedDataToRenting**— Designates protected data for renting purposes.
- **rentProtectedData**— Facilitates the process of renting protected data.
- **removeProtectedDataFromRenting**— Withdraws protected data from the rental inventory.

#### Selling Methods

- **setProtectedDataForSale**— Sets up protected data for sale.
- **buyProtectedData**— Enables the purchase of protected data.
- **removeProtectedDataForSale**— Takes protected data out of the sales inventory.
