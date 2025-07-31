# Types

## Contact

### address

`Address`

The address of the `protectedData` holding the contact's details.

### name

`string`

The name of the `protectedData` holding the contact's details (name may be empty
`""`).

### owner

`Address`

The address for the contact who granted permission to send them communications.

### accessGrantTimestamp

`number`

The precise date and time when the user granted authorization to send them
direct communications. This timestamp represents the moment the access was
granted.

### remainingAccess

`number`

The number of remaining accesses the user has for this contact. This value
indicates how many times the user can access the contact's details before the
access limit is reached.

### accessPrice

`number`

The price in nRLC that the user must pay to access the contact's details. This
value is determined by the contact's owner and can vary based on the owner's
preferences.

### isUserStrict

`boolean`

Indicates whether the user has a personal access to the contact's details. If
`true`, the user has a specific, personal access to the contact's details. If
`false`, the contact is shared publicly, which may allow for more general or
anonymous access.
