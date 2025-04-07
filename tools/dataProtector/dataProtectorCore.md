---
description:
  Learn how DataProtector Core gives developers powerful tools to encrypt data,
  manage ownership with NFTs, and control access using smart contracts and
  confidential computing.
---

# DataProtector Core

The DataProtector tool allows application developers to provide users with
unparalleled ownership over their data. End users gain the ability to invoke
iExec apps without ever exposing their data to any other party. They gain
complete privacy of personally identifiable information (PII) or other sensitive
classes of data.

This approach to data management relies on:

- end-to-end encryption of data with access controlled entirely by the owner of
  the data
- confidential computing technology that ensures only authorized apps are
  permitted access to a user's data
- smart contracts to manage an iExec application's permissions for a user's
  encrypted data

DataProtector Core module contains the following set of methods:

- **protectData** — safeguard data by encrypting it and recording ownership as
  an NFT
- **getProtectedData** — retrieve a list of all protected data for one owner
  and/or data schema
- **transferOwnership** — transfer a protected data to a new owner
- **grantAccess** — authorize an application to process a user's data without
  exposing the data to any external system or user review
- **getGrantedAccess** — retrieve a list of all authorized users and
  applications for a protected data
- **revokeOneAccess** — remove a specific access previously granted on a
  protected data
- **revokeAllAccess** — remove all access granted to any iExec applications or
  user for a protected data
- **processProtectedData** — process a protected data with a specified iExec
  application
