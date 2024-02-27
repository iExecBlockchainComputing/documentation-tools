# ✉ Web3Mail

The Web3Mail tool offers a secure and scalable way to manage email-based communications via the blockchain. This mechanism helps protect the personal information of the email recipients through use of Ethereum addresses. 

The email address is stored as a piece of `protectedData` using the iExec data protector tool. Through this mechanism, users have complete control over which applications may use their email address for sending communications. Sending a user a message, therefore, requires knowledge of the Ethereum address of their `protectedData` as well positive authentication for your application to contact them. At any time the user may revoke permissions and this revocation is immediate, giving users complete control over their privacy.

Apps using the Web3Mail tool can:

- enable an entity (such as a (d)app provider or an end-user) to email an Ethereum account holder without knowing their email address
- eliminate the need for end-users to share their email address with third parties, reducing risk of spam communications and reducing exposure from data breaches.

Web3Mail currently supports the following methods:

- **fetchMyContacts**—that enables an entity to retrieve a list of Ethereum accounts whose owners have authorized the entity to email them
- **fetchUserContacts**—that enables anyone to retrieve a list of Ethereum accounts whose owners have authorized a given entity to email them
- **sendEmail**—that allows an entity to email a user knowing only her Ethereum account.
