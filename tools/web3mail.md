---
description:
  Web3Mail enables secure, private email communication on the blockchain using
  Ethereum addresses. Manage contact permissions and send emails without
  revealing personal information.
---

<script setup>
import { Icon } from '@iconify/vue';
</script>

# ✉ Web3Mail

The Web3Mail tool offers a secure method to manage email-based communications
via the blockchain. This mechanism helps protect the personal information of the
email recipients through use of Ethereum addresses.

The email address is stored as a `protectedData` entity using the
[iExec Data Protector tool](./dataProtector.md). Through this mechanism, users
have complete control over which applications may use their email address for
sending communications. Sending a user a message, therefore, requires knowledge
of the Ethereum address of their `protectedData` as well positive authorization
for your account to contact them. Your account may be bound to either an
application or an individual. At any time a user may revoke permissions and this
revocation is immediate, giving users complete control over the privacy and
security of their information.

Apps using the Web3Mail tool can:

- enable an entity (such as an application provider or an end-user) to email an
  Ethereum account holder without knowing their email address
- grant users complete control over which entities are authorized to use their
  email address to send them communications

The Web3Mail tool currently supports the following methods:

- **fetchMyContacts** — retrieve a list of Ethereum addresses whose owners have
  authorized you to email them
- **fetchUserContacts** — retrieve a list of Ethereum addresses whose owners
  have authorized a given entity to email them
- **sendEmail** — send an email message to a user knowing only the Ethereum
  address for the `protectedData` containing their email address

**Try the demo:**

<a href="https://demo.iex.ec/web3messaging" target="_blank" rel="noreferrer" class="link-as-block">
  <Icon icon="mdi:art" height="25" style="margin-right: -1px" /> Web3Messaging Demo
</a>
