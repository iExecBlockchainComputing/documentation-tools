# Apps Whitelist

In order to consume a protected data, an iExec TEE dApp needs to be provided.

::: tip

**TEE** stands for Trusted Execution Environment. Find more details here:
https://protocol.docs.iex.ec/help/glossary#trusted-execution-environment-tee

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

For this `addOnlyAppWhitelist`, you are free to use:

```
0x334dc0bb08fb32a4e9917197e5e626de4b6b9b87
```

that contains apps created for the purpose of
[Content Creator usecase-demo](../../../overview/useCaseDemo/contentCreator.md).
This apps whitelist is managed by iExec.

You can explore this apps whitelist on
[https://blockscout-bellecour.iex.ec/](https://blockscout-bellecour.iex.ec/address/0x334dc0bb08fb32a4e9917197e5e626de4b6b9b87).

For the `consumeProtectedData()` method, you can use the following iExec TEE
dApp:

```
0xF248000F0E99e9203FdBE509019f008F9c169705
```

<br />
<hr />
<br />

In the context of
[Content Creator usecase-demo](/overview/useCaseDemo/contentCreator.html), the
iExec TEE dApp is very simple:

1. Download the protected data from IPFS. It expects to find a property named
   `file` in the protected data.

```json
{
  "file": "<ArrayBuffer>"
}
```

2. Encrypt the protected data with the beneficiary public key.

3. Re-upload the encrypted data to IPFS and return the URL.
