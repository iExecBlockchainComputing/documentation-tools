# Quick Start

## 1. Setup Environment

Ensure you have the necessary environment for running the Oracle Factory SDK.

### **1.1. Prerequisites**

Before starting, make sure you have the following installed:

- [**Node.js**](https://nodejs.org/en/) version 18 or higher
- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

## 2. Initialize Your Project

### **2.1. Clone the Project**

Start by cloning the Oracle Factory project repository. You can find the repository [here](https://github.com/iExecBlockchainComputing/iexec-oracle-factory-wrapper).

```bash
git clone https://github.com/iExecBlockchainComputing/iexec-oracle-factory-wrapper
cd iexec-oracle-factory-wrapper
```

### **2.2. Install Dependencies**

Install the necessary dependencies using NPM:

```bash
npm ci
```

### **2.3. Configuration**

Open the `index.js` file in your project and replace `your-private-key` with your actual private key. This key is essential for authenticating and executing transactions.

```javascript
// In index.js
const signer = utils.getSignerFromPrivateKey("bellecour", "your-private-key");
```

### **2.4. Run the Project**

Once the setup is complete, you can start the project using:

```bash
npm run start
```

## 3. Using the SDK

### **3.1. Instantiate the SDK**

Import and initialize the Oracle Factory SDK in your application.

#### **3.1.1. Example of index.js File**

```javascript
import { IExecOracleFactory, utils } from "@iexec/iexec-oracle-factory-wrapper";
import createOracle from "./createOracle.js";
import updateOracle from "./updateOracle.js";

const signer = utils.getSignerFromPrivateKey("bellecour", "your-private-key");
const factory = new IExecOracleFactory(signer);

const params = {
  url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
  method: "GET",
  headers: {
    authorization: "%API_KEY%",
  },
  dataType: "number",
  JSONPath: "$.ethereum.usd",
  apiKey: "MY_TEST_API_KEY",
};

const result = await utils.testRawParams(params);
console.log(`call test returned: ${result} (${typeof result})`);

const createOracleRes = await createOracle(factory, params);
console.log("createOracleRes: ", createOracleRes);

const updateOracleRes = await updateOracle(factory, createOracleRes.cid);
console.log("updateOracleRes: ", updateOracleRes);

const readOracleRes = await factory.readOracle(createOracleRes.cid); // content ID C id
console.log("readOracleRes: ", readOracleRes);
```

### **3.2. Create, Update, and Read Oracle**

Utilize the SDK's methods to create, update, and read from the oracle.

#### **3.2.1. Creating an Oracle**

```javascript
// createOracle.js
const createOracle = async (factory, params) => {
  try {
    const observable = new Promise((resolve, reject) => {
      let paramSet;
      let cid;

      factory.createOracle(params).subscribe({
        error: (e) => reject(e),
        next: (value) => {
          const { message, ...additionalEntries } = value;
          if (message === "PARAM_SET_CREATED") {
            paramSet = additionalEntries.paramSet;
          }
          if (message === "PARAM_SET_UPLOADED") {
            cid = additionalEntries.cid;
          }
          console.log(message);
          console.info(JSON.stringify(additionalEntries));
        },
        complete: () => {
          console.log(`Oracle created, paramSet CID is ${cid}!`);
          console.log(`paramSet: "${paramSet}"`);
          resolve({ paramSet, cid });
        },
      });
    });
    return await observable;
  } catch (error) {
    throw error;
  }
};

export default createOracle;

```

#### **3.2.2. Updating an Oracle**

```javascript
// updateOracle.js
const updateOraclePromise = async (factory, params) => {
  let resolveValue;
  try {
    const observable = new Promise((resolve, reject) => {
      factory
        .updateOracle(params, {
          workerpool: "0x0e7bc972c99187c191a17f3cae4a2711a4188c3f", // TODO: specifier un WP par defaut (required)
          targetBlockchains: ["134", "137"], // TODO add this to documentation + BC supporté par OF (ross - chain) (optional - default 134 = bellecour)
        })
        .subscribe({
          error: (e) => reject(e),
          next: (value) => {
            const { message, ...rest } = value;
            console.log(message);
            if (message === "TASK_UPDATED") {
              resolveValue = rest;
            }
          },
          complete: () => {
            resolve(resolveValue);
          },
        });
    });
    return await observable;
  } catch (error) {
    throw error;
  }
};

export default updateOraclePromise;
```

#### **3.2.3. Reading from an Oracle**

```javascript
const readOracleRes = await factory.readOracle(createOracleRes.cid);
```
