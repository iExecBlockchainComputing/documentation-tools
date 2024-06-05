# Means of Payment

iExec tools described in the [pricing model](pricingModel.md) page use an
Ethereum ERC20 utility token called RLC as means of payment.

To access payment functions , you must install the
[iExec SDK](https://www.npmjs.com/package/iexec) and interact with the following
modules.

## Wallet module

The
[wallet module](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/classes/IExecWalletModule.md)
mainly exposes methods to transferring and managing token balances.

In the context of iExec tools, the essential methods are:

- bridgeToSidechain : as well as bridgeToMainchain,these methods allow to
  transfer funds between Ethereum mainnet and the iExec Sidechain.

- checkBalances : displays the native chain balance and RLC tokens of a
  specified wallet.

::: tip

The token balances displayed the wallet module allow for the payment of these
methods:

DataProtector Sharing: buyProtectedData(), rentProtectedData() and subscribe().

:::

## Account module

The
[account module](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/classes/IExecAccountModule.md)
focuses on methods to manage the approval and spending of RLC tokens by smart
contracts.

Your iExec account is managed by smart contracts (and not owned by iExec).

The account module is used to stake RLC tokens and pay for computing assets
(workerpool). In the context of iExec tools, the essential methods are:

- deposit / withdraw : used to stake tokens from the wallet to the account for
  spending

- checkBalances : displays the staked and locked RLC tokens of a specified
  wallet.

- approve / revokeApproval : allows a spender to use funds in the account, use
  checkAllowance to consult the approved value.

When you request an execution the price for the task is locked from your
account's stake then transferred to accounts of the workers contributing to the
computing of a task.

::: tip

The token balances displayed the account module allow for the payment of these
methods:

DataProtector : processProtectedData()

DataProtector Sharing : consumeContent()

Web3Mail : sendEemail()

Oracle Factory : updateOracle()

:::

## Voucher module

The
[voucher module](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/classes/IExecVoucherModule.md)
describes methods to manage sponsored computations in the account module.

In the context of iExec tools, the essential methods are:

- showUserVoucher : displays information about the balance, expiration and
  sponsored assets in a voucher.

::: tip

The token balances displayed the voucher module allow for the payment of methods
described in the account module, as long as whitelisting and authorizations are
met.

:::

In order for a user to use a voucher, the following conditions must be met :

- The user has a voucher
- The user's voucher is approved to complete payment on behalf of the user
  (approve method in the account module)
- The user's voucher authorizes the user to ----
