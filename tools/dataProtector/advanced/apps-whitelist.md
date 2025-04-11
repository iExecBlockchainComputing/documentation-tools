---
description:
  Understand the Apps Whitelist mechanism for consuming protected data in the
  iExec DataProtector Sharing module. Learn about the Trusted Execution
  Environment (TEE) dApp and whitelist usage for secure data delivery.
---

# Apps Whitelist

In order to consume a protected data, an iExec TEE dApp needs to be provided.

::: tip

**TEE** stands for Trusted Execution Environment. Find more details here:
<https://protocol.docs.iex.ec/help/glossary#trusted-execution-environment-tee>

:::

The story goes as follow:

1. The collection owner adds a protected data to a collection. When doing so,
   they need to set an `addOnlyAppWhitelist` parameter (see
   [here](../dataProtectorSharing/collection/addToCollection.md#addonlyappwhitelist)).
   This parameter is the address of a whitelist smart contract that contains
   applications allowed to consume the protected data.

2. When a user wants to consume the protected data, they need to provide the
   address of the application they want to use to consume the data (See
   [consumeProtectedData](../dataProtectorSharing/consume/consumeProtectedData.md#app-param)
   &nbsp;`app` parameter). This chosen application must be in the whitelist
   defined by the collection owner.

## Protected data delivery dApp

Built for the needs of
[Content Creator usecase-demo](/overview/use-case-demo/content-creator.html),
this iExec TEE dApp is simple:

1. Download the protected data from IPFS. It expects to find a property named
   `file` in the protected data.

```json
{
  "file": "<ArrayBuffer>"
}
```

2. Encrypt the protected data with the beneficiary public key.

3. Re-upload the encrypted data to IPFS and return the URL.

::: warning

Please note: This application and its whitelist can only be used **within the
dataProtectorSharing module**, as it is owned by the DataProtector Sharing smart
contract.

:::

### Whitelist

**Whitelist address:** `0x256bcd881c33bdf9df952f2a0148f27d439f2e64`

This whitelist contains current and past versions of the "Protected data
delivery dApp"

See it in
[https://blockscout-bellecour.iex.ec/](https://blockscout-bellecour.iex.ec/address/0x256bcd881c33bdf9df952f2a0148f27d439f2e64).

### dApp

**Most recent dApp from this whitelist:**
`0x1cb7D4F3FFa203F211e57357D759321C6CE49921`

See it in
[https://explorer.iex.ec/bellecour](https://explorer.iex.ec/bellecour/app/0x1cb7d4f3ffa203f211e57357d759321c6ce49921)

See it in
[https://blockscout-bellecour.iex.ec/](https://blockscout-bellecour.iex.ec/address/0x1cb7D4F3FFa203F211e57357D759321C6CE49921)
