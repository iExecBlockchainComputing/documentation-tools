---
description:
  Renting options for distributing protected data allow consumers to access data
  for a set price and duration. The Data Sharing smart contract ensures renter
  protection, guaranteeing access for the agreed term and enforcing rental
  terms, even if modified by the owner.
---

# Data sharing - Renting

Rental agreements are one of the options given for distributing a collection
owner's protected data. A rental agreement has the following attributes:

**Rental Price**

The collection owner allows a consumer to pay a set price to access the data.
This is a one-time up-front cost.

**Rental Duration**

The collection owner allows the renter access to the data for a set period of
time.

## Renter protection

The Data Sharing smart contract ensures the renter maintains access for the
duration of their rental term. Once the rental term is up, the renter loses
access to the protected data. This assurance is critical to the renting paradigm
to ensure trust between the data owner and the renter.

## Modifying rental terms

The collection owner has a few options once they list protected data for rent:

- The owner may remove the rental terms and effectively de-list the protected
  data
- The owner may also modify the rental price or duration

Making either of these chances is effective immediately but only for future
rentals. The Data Sharing smart contract enforces any ongoing rental agreements
until the terms expire.
