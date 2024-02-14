# Data sharing methods

Part of DataProtector, "Sharing" is a special module that includes a set of methods for you
to **distribute and monetise your protected data**.

That includes:
 - Free sharing
 - Renting
 - Include in a subscription bundle
 - Selling

One of the key aspects is that your protected data will be managed by a special Data Sharing
smart-contract.

Let's try to make it more visual:

![Data Sharing smart-contract](data-sharing-sc.png)

This special smart-contract will be responsible for **enforcing governance** over your protected data,
based on your distribution choices. (renting, selling, etc.)

-----

## Why is it different from DataProtector?

With `DataProtector`, you can **grant access** to your protected data to a specific user.
 - You need to know the user's Ethereum address.
 - You'll have to sign a transaction at the moment you grant the access.
 - You define a number of times the user can access the data.

With `DataProtector Sharing`, you can **distribute** your protected data to a wider audience.
 - You don't need to know the user's Ethereum address.
 - You don't need to sign a transaction at the moment of distribution (but the user who wants to
access your content will).
 - Any user can access your content as long as they comply with your distribution and monetization
choices.

-----

## Installation

{% tabs %}
{% tab title="npm" %}
```
npm install @iexec/dataprotector
```
{% endtab %}

{% tab title="yarn" %}
```
yarn add @iexec/dataprotector
```
{% endtab %}

{% tab title="pnpm" %}
```
pnpm add @iexec/dataprotector
```
{% endtab %}

{% tab title="bun" %}
```
bun add @iexec/dataprotector
```
{% endtab %}
{% endtabs %}

Find more details in the [Quick start](../dataprotector/quick-start.md) section.

-----

Here is the list of methods of DataProtector Sharing module:

<table data-card-size="large" data-view="cards">
  <thead>
  <tr>
    <th align="center"></th>
    <th align="center"></th>
    <th></th>
    <th data-hidden data-card-target data-type="content-ref"></th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td align="center"></td>
    <td align="center"><strong>createCollection</strong></td>
    <td></td>
    <td><a href="createcollection.md">createcollection.md</a></td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center"><strong>addToCollection</strong></td>
    <td></td>
    <td><a href="addtocollection.md">addtocollection.md</a></td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center"><strong>setSubscriptionParams</strong></td>
    <td></td>
    <td><a href="setsubscriptionparams.md">setsubscriptionparams.md</a></td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center"><strong>setProtectedDataToSubscription</strong></td>
    <td></td>
    <td><a href="setprotecteddatatosubscription.md">setprotecteddatatosubscription.md</a></td>
  </tr>
  <tr>
    <td align="center"></td>
    <td align="center"><strong>getProtectedDataPricingParams</strong></td>
    <td></td>
    <td><a href="getprotecteddatapricingparams.md">getprotecteddatapricingparams.md</a></td>
  </tr>
  </tbody>
</table>
