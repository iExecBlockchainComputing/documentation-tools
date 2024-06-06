# Pricing Model

Assets in the [iExec protocol](https://protocol.docs.iex.ec/), which come in the
form of data, applications, or computing power, offer the possibility of
monetization through a pay-per-use model.

This means that for each transaction involving **the use** of these assets, a
fee is required to be paid in
[RLC](https://protocol.docs.iex.ec/help/glossary#rlc-run-on-lots-of-computers/)
tokens to each owner of each asset involved. Not all assets are necessarily
possessed by same owner, and their price may be adjusted to zero.

An example of a transaction involving every asset is as follows:

A data asset created by **Data Protector**'s
[protectData](../../tools/dataProtector/dataProtectorCore/protectData.md)
method, such an email address, is used by the application asset
[Email-Sender](https://github.com/iExecBlockchainComputing/web3mail-sdk/tree/main/dapp#email-sender-dapp)
to send an email. The Computing power asset, also known as
[Workerpool](https://protocol.docs.iex.ec/help/glossary#workers), is the server
where this action takes place.

When **Web3Mail**'s [sendEmail](../../tools/web3mail/methods/sendEmail.md)
method is called, it fetches the price per usage of the Email-Sender DApp, the
protectedData, and the Workerpool. Once processing is complete, the different
asset owners are rewarded for the price they previously set.

For an in-depth explanation of asset pricing, refer to
[manage your oders](https://protocol.docs.iex.ec/for-developers/advanced).

## Pricing in tools

::: tip

Even if the price is not specified, the transaction in the method always
includes the listed assets.

:::

### As an asset provider:

You define the reward you want to receive when a consumer uses your asset.

|     Tool      |                                                      Method                                                      | Assets |   Parameters   |
| :-----------: | :--------------------------------------------------------------------------------------------------------------: | :----: | :------------: |
| DataProtector |                    [grantAccess](../../tools/dataProtector/dataProtectorCore/grantAccess.md)                     |  data  | pricePerAccess |
| DataProtector | [setProtectedDataToRenting](../../tools/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting.md) |  data  |     price      |
| DataProtector |   [setProtectedDataForSale](../../tools/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale.md)   |  data  |     price      |
| DataProtector |  [setSubscriptionParams](../../tools/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams.md)   |  data  |     price      |

### As an asset consumer:

You define the price you are willing to pay for using assets such as data,
applications or computing power.

|     Tool      |                                                 Method                                                 |                  Assets                  |                    Parameters                     |
| :-----------: | :----------------------------------------------------------------------------------------------------: | :--------------------------------------: | :-----------------------------------------------: |
| DataProtector |     [buyProtectedData](../../tools/dataProtector/dataProtectorSharing/selling/buyProtectedData.md)     |                   data                   |                       price                       |
| DataProtector |      [processProtectedData](../../tools/dataProtector/dataProtectorCore/processProtectedData.md)       | data<br> computing power<br> application |                     maxPrice                      |
| DataProtector | [consumeProtectedData](../../tools/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md) |             computing power              |                         -                         |
|   Web3Mail    |                         [sendEmail](../../tools/web3mail/methods/sendEmail.md)                         | data<br> computing power<br> application | dataMaxPrice<br>workerpoolMaxPrice<br>appMaxPrice |
| OracleFactory |                       [updateOracle](../../tools/oracleFactory/updateOracle.md)                        | data<br> computing power<br> application |                         -                         |
