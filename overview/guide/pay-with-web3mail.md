# How to pay with web3mail

**Web3Mail** offers secure, blockchain-based communication by encrypting emails
and protecting user privacy. The `sendEmail` function uses confidential
computing power to encrypt and send messages, ensuring secure and decentralized
email exchanges.

This section provides a detailed guide on using **Web3Mail**, highlighting steps
involved in accessing and paying for its computing power using both vouchers and
xRLC.

## Prepare Your Development Environment

### Prerequisites

- Install the iExec SDK in your JS/TS project:

  ```sh
  npm install iexec
  ```

- Instantiate the iExec SDK (see documentation at
  [iexec-sdk/docs/README.md](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md)):

  ```javascript
  import { IExec } from 'iexec';
  // connect injected provider
  const iexec = new IExec({ ethProvider: window.ethereum });
  ```

## Choose Your Payment Method

Web3Mail offers two payment options for covering computational costs:
**Vouchers** and **xRLC**.

### Using Vouchers for Web3Mail

#### Obtain a Voucher

- Acquire vouchers through the **iExec Builder Dashboard** or the dedicated
  **Discord channel**.
- **Voucher in Build**: Allows the execution of the Web3Mail iExec-app up to 200
  times, ideal for testing and development.
- **Voucher in Earn**: Supports up to 1000 executions of the Web3Mail iExec-app,
  suited for applications ready for deployment.

> **Note**: You may need assistance in obtaining and using vouchers. Please
> contact the iExec support team for guidance.

#### Check Your Voucher Balance

Use the command below to check your balance:

```javascript
iexec.account.show();
```

#### Grant Allowance (If Necessary)

If the voucher balance is insufficient, authorize the voucher smart contract to
deduct the remaining amount from your account.

#### Execute Web3Mail's `sendEmail` Function

Set the `useVoucher` parameter to `true` when using Web3Mail’s `sendEmail`
function to pay with a voucher:

```javascript
const sendEmail = await web3mail.sendEmail({
  useVoucher: true,
});
```

**Important**: While vouchers can cover computational costs for these
applications, they do **not** cover data access costs, which must be handled
using xRLC.

### Using xRLC with Web3Mail

If you choose to use xRLC to cover the computational cost of Web3Mail (or if you
need to cover data access costs such as retrieving the recipient's email
address), follow these steps:

1. **Purchase RLC**: Obtain RLC tokens from a supported cryptocurrency exchange.
2. **Convert to xRLC**: Use the iExec Bridge to convert your RLC into xRLC for
   use on iExec's sidechain. The conversion uses the lock & mint/burn & unlock
   mechanism.
3. **Deposit xRLC**: Deposit the xRLC into your iExec account using the command:

   ```javascript
   iexec.account.deposit(xRLC_amount);
   ```

   This converts xRLC into sRLC, used as proof of funds for task execution.

4. **Check sRLC Balance**: Use the command below to check your balance:

   ```javascript
   iexec.account.show();
   ```

5. **Execute `sendEmail`**: Set the `useVoucher` parameter to `false` when using
   Web3Mail’s `sendEmail` function to pay with xRLC:

   ```javascript
   const sendEmail = await web3mail.sendEmail({
     ...,
     useVoucher: false,
   });
   ```

6. **Withdraw sRLC (If Desired)**: Convert sRLC back to xRLC and withdraw to
   your wallet using:

   ```javascript
   iexec.account.withdraw(RLC_amount);
   ```

## Specify the Workerpool with `workerpoolAddressOrEns`

A **Workerpool** in the iExec Platform provides the computing power needed to
run iExec apps, such as Web3Mail, and execute tasks.

The `workerpoolAddressOrEns` parameter allows you to choose a specific
Workerpool for running your Web3Mail application. By default, the system uses
the production Workerpool at the ENS address
`prod-v8-bellecour.main.pools.iexec.eth`.

Each workerpool has its own unique address, ensuring that applications are
executed in the most suitable environment for the developer's needs. **Contact
Support** if you have any questions.

## Support

A detailed guide focused on **Web3Mail** is available for builders, explaining
how to utilize iExec's computing power with concrete examples. This guide walks
through the process of paying with vouchers or xRLC, covering all essential
steps.

For other devtools like **DataProtector** and **OracleFactory**, builders are
encouraged to contact iExec's support team for personalized assistance and
detailed guidance on using computing resources effectively with these tools.
