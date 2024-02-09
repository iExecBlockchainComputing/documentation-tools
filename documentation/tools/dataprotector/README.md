# 🔐 DataProtector

The DataProtector tool helps developers provide users unparalleled ownership and privacy over their data. End users gain the ability to invoke iExec apps using their own data without ever exposing the data. This ensures complete privacy of PII or other sensitive classes of data. 

A developer relying on this tool never gains access to view or manipulate user data directly. This revolutionary approach to data management relies on:

* end-to-end encryption of data controlled exclusively by the user of the application
* confidential computing technology that prevents iExec apps from accessing users’ unencrypted data
* smart contracts to manage an iExec application's rights to manipulate or act on a user's encrypted data

The DataProtector tool encompasses the following suite of API methods:

* **protectData**—safeguards data by encrypting it and recording ownership on a smart contract
* **grantAccess**—authorizes an application to process a user's data without exposing the data to any external system or user review
* **revokeAllAccessObservable**—removes all access granted to any iExec applications for a specified piece of protected data
* **revokeOneAccess**—removes access granted to one iExec application for a specified piece of protected data
* **fetchProtectedData**—retrieve a list of all protected data for one owner and/or data schema
* **fetchGrantedAccess**—retrieve a list of all authorized users and applications for a piece of protected data