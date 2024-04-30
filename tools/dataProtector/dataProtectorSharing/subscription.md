# Data sharing - Subscription

Subscription agreements are one of the options for distributing
a collection owner's protected data. A subscription agreement has the
following attributes:

**Subscription Price**

The collection owner allows a subscriber to pay a set price to access
the data. The subscription is not auto-renewing.

**Subscription Duration**

The collection owner allows the subscriber access to the data for a
set period of time.

## Subscriber protection

The Data Sharing smart contract ensures the subscriber maintains 
access for the duration of their subscription term. 
Once the subscription expires, the consumer loses access to all 
protected data. The subscriber has the option to pay a renewal
fee to maintain access. The data owner may update the subscription
fee and duration, but any data included in the subscription
remains available. This assurance is critical to the subscription 
paradigm to ensure trust between the data owner and the subscriber.

## Modifying rental terms

The collection owner has a few options to manage their subscription
bundles:

* The owner may remove the subscription terms and effectively de-list
  the subscription bundle
* The owner may modify the subscription price or duration
* The owner may add additional protected data to the subscription
* The owner may remove protected data from the subscription only
if there are no active subscribers

Making any of these changes is effective immediately. For any existing
subscribers, updates to the subscription terms take effect upon
renewal of the subscription.