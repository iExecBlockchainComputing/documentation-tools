# 🔐 DataProtector

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/iExecBlockchainComputing/dataprotector-sdk/develop?filename=packages%2Fsdk%2Fpackage.json&color=green)

DataProtector offers developers methods to create apps that give users unparalleled ownership and privacy over their data.;

Through DataProtector, users may allow iExec apps to use their data without ever revealing the data itself. This revolutionary approach to data management relies on:

- end-to-end encryption backed by a confidential computing technology that prevents iExec apps from accessing users’ unencrypted data
- smart contracts that manage iExec apps’ rights to use users’ encrypted data

DataProtector bundles 6 methods:

- **protectData**—that safeguards any data. It takes responsibility for encrypting the data and recording ownership on a smart contract
- **grantAccess**—that authorizes an app to use users’ data without ever revealing the data itself
- **revokeAllAccessObservable**—that revokes all iExec apps' access to users’ data
- **revokeOneAccess**—that revokes an app's access to users’ data
- **fetchProtectedData**—that retrieves data protected by DataProtector
- **fetchGrantedAccess**—that provides the list of authorization with associated iExec apps and users to use existing protected data
