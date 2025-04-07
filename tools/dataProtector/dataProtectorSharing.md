---
description:
  Distribute and monetize your protected data effortlessly with DataProtector
  Sharing. Use smart contracts to manage access, rent, or sell data while
  maintaining control and privacy.
---

# DataProtector Sharing

The DataProtector Sharing module includes a set of methods for distributing and
monetizing your protected data. These work seamlessly in your own applications
in a way that's transparent to end users. The Sharing module supports the
following options for distributing a user's protected data:

- Sharing freely with other users
- Renting data for a pre-determined period of time
- Providing access for a recurring subscription fee
- Selling ownership of the data

Once access is obtained through one of these distribution methods, the `consume`
methods allow interaction with the protected data. The application designer uses
these methods to securely retrieve data from IPFS and decrypt it on the client
side. This ensures only the consumer gains access to the data.

## How does it work?

The user's protected data is managed by a special Data Sharing smart contract.
This smart contract enforces the user's desired sharing paradigm. Protected data
is bundled by the user into one or more collections. Within the collection, the
user may specify different sharing options for different pieces of data. This
illustration shows the hierarchy of a Data Sharing smart contract:

![Data Sharing smart contract](./dataProtectorSharing/data-sharing-sc.png)

The Data Sharing smart contract enforces governance over the user's protected
data based on their desired distribution choices. The user has complete control
over the mode of sharing for each Collection and each Protected Data contained
in their collections.

The smart contract also protects the consumer of a user's data. If a consumer
rents access to a video clip, for example, even if the owner of the video clip
removes the rental option, the renter maintains their access for the duration of
the rental period.

## How does this differ from `DataProtector Core`?

With `DataProtector Core` you must grant each consumer individual access to your
protected data. This has several prerequisites:

- The data owner must know the consumer's Ethereum address
- The data owner must sign a transaction at the moment you grant the access
- The data owner must define the number of times the consumer can access the
  data up front

With `DataProtector Sharing` a user can easily distribute their protected data
to a wider audience. The user authorizes distribution channels up front and
consumers of the data trigger smart contracts on their own, requiring no
additional activity from the data owner. This has several key benefits

- The data owner doesn't need to know the consumer's Ethereum address
- The data owner doesn't need to sign a transaction at the moment of
  distribution, only the consumer of the data signs their transaction
- The data owner doesn't manage access, the Data Sharing smart contract
  automatically enforces the distribution and monetization choices
