---
description:
  Learn how to manage subscription agreements for protected data on the iExec
  platform. Understand subscription pricing and duration, along with options for
  modifying terms and protecting subscribers' access.
---

# Data sharing - Subscription

Subscription agreements are one of the options for distributing a collection
owner's protected data. Similar to the rental distribution terms, a subscription
agreement has the following attributes:

**Subscription Price**

The collection owner allows a subscriber to pay a set price to access the data.
The subscription fee is a one-time payment, not a recurring one. Subscriptions
do not auto-renew.

**Subscription Duration**

The collection owner allows the subscriber access to the data for a set period
of time.

## The subscription bundle

Where subscriptions differ from rental distribution terms is that a subscription
may cover more than one protected data. We use the term `subscription bundle`
for this grouping of data. The Data Sharing smart contract supports various
different methods for altering the contents of a subscription bundle. Once a
user purchases a subscription to the bundle, they retain access to all protected
data in the bundle until their subscription term expires. The owner may add new
data to the bundle but may not remove protected data from the bundle as long as
there remains at least one subscriber to it.

## Subscriber protection

The Data Sharing smart contract ensures the subscriber maintains access for the
duration of their subscription term. Once the subscription expires, the consumer
loses access to all protected data. The subscriber has the option to pay the
subscription fee again to retain access. The data owner may update the
subscription fee and duration, but any data included in the subscription remains
available. This assurance is critical to the subscription paradigm to ensure
trust between the data owner and the subscriber.

## Modifying subscription terms

The collection owner has a few options to manage their subscription bundles:

- The owner may remove the subscription terms and effectively de-list the
  subscription bundle
- The owner may modify the subscription price or duration
- The owner may add additional protected data to the subscription
- The owner may remove protected data from the subscription only if there are no
  active subscribers

Making any of these changes is effective immediately. For any existing
subscribers, updates to the subscription terms take effect upon renewal of the
subscription.
