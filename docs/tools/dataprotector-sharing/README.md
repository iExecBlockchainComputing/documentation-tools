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
