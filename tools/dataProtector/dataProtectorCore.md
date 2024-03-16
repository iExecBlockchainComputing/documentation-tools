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

- **protectData** — safeguards data by encrypting it and recording ownership as
  an NFT
- **grantAccess** — authorizes an application to process a user's data without
  exposing the data to any external system or user review
- **revokeAllAccessObservable** — removes all access granted to any iExec
  applications or user for a `protectedData` object
- **revokeOneAccess** — removes a specific access previously granted on a
  `protectedData`
- **fetchProtectedData** — retrieve a list of all protected data for one owner
  and/or data schema
- **fetchGrantedAccess** — retrieve a list of all authorized users and
  applications for a `protectedData` object containing a user's data
- **processProtectedData** — process a `protectedData` object containing a
  user's data with a specified iExec application
- **transferOwnership** — transfer a protectedData object to a new owner

## Sandbox

<a href="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true" target="_blank" rel="noreferrer" class="link-as-block">
  ⚡ &nbsp;Code Sandbox
</a>

Corresponding GitHub repository:

<a href="https://github.com/iExecBlockchainComputing/dataprotector-sandbox" target="_blank" rel="noreferrer" class="link-as-block">
  🔎 &nbsp;GitHub repository sandbox
</a>
