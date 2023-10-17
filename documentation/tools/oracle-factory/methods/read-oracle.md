---
description: >-
  This method facilitates the reading of the current value of the oracle smart
  contract.
---

# Read Oracle

## Parameters

* **paramSet|ipfsCid|oracleId (Required):** These are different identifiers which can be used to specify the oracle. It can be either paramSet, ipfsCid, or oracleId.
* **dataType (Optional):** This specifies the type of data you are reading from the oracle. It can be string, number, boolean, or raw. By default, raw is used, which returns a hexadecimal string.

## Outputs

This method returns a promise, which when resolved, gives an object with two properties:

* **value:** The current value of the oracle smart contract. It could be of type String, Number, or Boolean.
* **date:** This is a number which represents the timestamp when the value was last updated.

Note that if the oracle is not yet updated, this method will throw a NoValueError.

