# Means of Payment

iExec tools described in the [pricing model](pricingModel.md) use an Ethereum
ERC20 utility token called RLC as means of payment.

To access funds management functions, you must install and instantiate the
[iExec SDK](https://www.npmjs.com/package/iexec) and interact with the following
modules.

## Wallet module

The
[wallet module](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/classes/IExecWalletModule.md)
mainly exposes methods to transferring and managing token balances.

In the context of iExec tools, the essential methods are:

**bridgeToSidechain** : as well as bridgeToMainchain,these methods allow to
transfer funds between Ethereum mainnet and the iExec Sidechain.

**checkBalances** : displays the native chain balance and RLC tokens of a
specified wallet.

## Account module

The
[account module](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/classes/IExecAccountModule.md)
focuses on methods to manage the approval and spending of RLC tokens by smart
contracts.

Since your iExec account is managed by smart contracts (and not owned by iExec)
The account module is used to stake RLC tokens and pay for computing assets
(workerpool).

In the context of iExec tools, the essential methods are:

**deposit / withdraw** : used to stake tokens from the wallet to the account for
spending

**checkBalances** : displays the staked and locked RLC tokens of a specified
wallet.

**approve / revokeApproval**: allows a spender to use funds in the account, use
checkAllowance to consult the approved value.

When you request an execution the price for the task is locked from your
account's stake then transferred to accounts of the workers contributing to the
computing of a task.

The token balances displayed the account module allow for the payment of these
methods:

|         Tool          |                                                 Method                                                 |
| :-------------------: | :----------------------------------------------------------------------------------------------------: |
|     DataProtector     |      [processProtectedData](../../tools/dataProtector/dataProtectorCore/processProtectedData.md)       |
| DataProtector Sharing | [consumeProtectedData](../../tools/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md) |
| DataProtector Sharing |     [buyProtectedData](../../tools/dataProtector/dataProtectorSharing/selling/buyProtectedData.md)     |
| DataProtector Sharing |    [rentProtectedData](../../tools/dataProtector/dataProtectorSharing/renting/rentProtectedData.md)    |
| DataProtector Sharing |         [subscribe](../../tools/dataProtector/dataProtectorSharing/subscription/subscribe.md)          |
|       Web3Mail        |                         [sendEmail](../../tools/web3mail/methods/sendEmail.md)                         |
|    Oracle Factory     |                       [updateOracle](../../tools/oracleFactory/updateOracle.md)                        |

## Voucher module

The
[voucher module](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/classes/IExecVoucherModule.md)
contains methods to manage sponsored payments of methods in the account module.

In the context of iExec tools, the essential methods are:

**showUserVoucher** : displays information about the balance, expiration and
sponsored assets in a voucher.

The token balances displayed the voucher module allow for the payment of the
same methods in the account module, as long as the following conditions are be
met :

- The user has a voucher
- The user's voucher is approved to spend the user's account balance to complete
  payment on their behalf (approve method in the account module)
