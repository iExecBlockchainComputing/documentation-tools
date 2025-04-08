---
description:
  Web3Telegram enables private, blockchain-based Telegram messaging using
  Ethereum addresses. Users retain full control over who can contact
  them—without sharing their chat ID.
---

<script setup>
import { Icon } from '@iconify/vue';
</script>

# :speech_balloon: Web3Telegram

Web3Telegram offers a secure method to manage telegram communications via the
blockchain. This mechanism helps protect the personal information of the
telegram chat ID recipients through use of Ethereum addresses.

The telegram chat ID address is stored as a `protectedData` entity using
[iExec Data Protector](./dataProtector.md). Through this mechanism, users have
complete control over which applications may use their
[chat ID](./web3telegram/integration-guide.md#_1-get-your-users-to-retrieve-their-chat-id)
for sending communications.

Sending a user a message, therefore, requires knowledge of the Ethereum address
of their `protectedData` as well as an explicit authorization for your account
to contact them. But also requires the receiver to send a telegram message to
the bot first.

Your account may be bound to either an application or an individual. At any time
a user may revoke permissions and this revocation is immediate, giving users
complete control over the privacy and security of their information.

Apps using Web3Telegram can:

- enable an entity (such as an application provider or an end-user) to message
  an Ethereum account holder with telegram without knowing their chat ID or
  username
- grant users complete control over which entities are authorized to use their
  chat ID to send them communications

**Try the demo:**

<a href="https://demo.iex.ec/web3messaging" target="_blank" rel="noreferrer" class="link-as-block">
  <Icon icon="mdi:art" height="25" style="margin-right: -1px" /> Web3Messaging Demo
</a>
