# sendEmail

This method allows an authorized entity to send a telegram message to a User
without needing to know their username or Chat ID.

The recipient Chat ID is stored in a `protectedData` entity. The user
receiving message must explicitly authorize you to send them telegram communications
and permission must be granted for the `Web3Telegram` tool to use the
`protectedData` entity containing their chat ID. This is best done by
granting authorization to the Web3Telegram app whitelist
`0x781482C39CcE25546583EaC4957Fb7Bf04C277D2` as `authorizedApp`. Refer to the
[Data Protector `grantAccess`](../../dataProtector/dataProtectorCore/grantAccess.md)
documentation for more details.

## Usage

TODO