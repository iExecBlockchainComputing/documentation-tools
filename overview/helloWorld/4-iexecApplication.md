# Build Your iDapp

This guide will help you set up, test, run, and deploy your iDapp using the
`idapp-cli` tool. Follow the instructions carefully for a smooth development
experience.

## Prerequisites

Before getting started, ensure that you have the following installed on your
system:

- [**Node.js**](https://nodejs.org/en/) version 18 or higher
- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)
- [**DockerHub**](https://hub.docker.com/) account

## Installation

First, you need to install the `idapp-cli` package. Open your terminal and run
the following command:

```sh
npm install @iexec/idapp-cli
```

## Initialize Framework

To initialize the working directory for developing your iDapp, use the
`idapp init` command. This command sets up the necessary project structure and
files.

```sh
idapp init
```

You will be prompted with the following message:

```sh
 ___ ____    _    ____  ____
 |_ _|  _ \  / \  |  _ \|  _ \
  | || | | |/ _ \ | |_) | |_) |
  | || |_| / ___ \|  __/|  __/
 |___|____/_/   \_\_|   |_|

? A new project will be created in the current directory. Do you want to continue? Yes
? What is the name of your project? develop-my-idapp
? Which language do you want to use to build your iDapp? JavaScript
? Would you like to access a protected data inside your iDapp? (Y/n)
```

:::tip

Answer `n` to the question
`? Would you like to access protected data inside your iDapp?`. We will cover
integrating protected data into your iDapp later.

:::

## Test Your iDapp

To test your iDapp, use the `idapp test` command. This command runs your iDapp
to ensure that your application is functioning correctly.

### Using Parameters

You can pass input parameters to your iDapp using the `--param` option. This
allows you to provide necessary inputs during runtime.

```sh
idapp test --param <your-input>
```

### Using Docker

For a more realistic environment, you can run your iDapp using Docker. This
helps in creating an environment that closely mimics production settings.

```sh
idapp run --docker
```

## Deploy Your iDapp

Deploy your iDapp on the iExec protocol.

```sh
idapp deploy
```

Now you can run your application using:

```sh
idapp run <your-idapp-address>
```

If you want, you can integrate protected data into your iDapp to process private
data. To do that, you need to start this tutorial again and answer `y` to the
question `? Would you like to access protected data inside your iDapp?`.

<!-- ## 🧩 Let's Create Protected Data

To create protected data, you need to connect your wallet and create the
protected data using the provided buttons. -->

<script setup>
import { ref } from 'vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import MetamaskButton from '../../components/MetamaskButton.vue';

const web3Provider = ref(null);
const isWalletConnected = ref(false);
const protectedData = ref(null);
const authorizedApp = ref('');
const contentToProtect = ref('');
const isLoadingProtect = ref(false);
const isLoadingGrant = ref(false);
const protectError = ref(null);
const grantError = ref(null);

const onWalletConnected = (provider) => {
  web3Provider.value = provider;
  isWalletConnected.value = true;
};

// const protectData = async () => {
//   try {
//     if (!web3Provider.value) throw new Error('Wallet not connected');
//     if (!contentToProtect.value) throw new Error('Content is empty');
//     isLoadingProtect.value = true;
//     protectError.value = null;
//     const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value);
//     protectedData.value = await dataProtectorCore.protectData({
//       data: {
//         content: contentToProtect.value,
//       },
//     });
//   } catch (error) {
//     protectError.value = error.message;
//     console.error('Error protecting data:', error);
//   } finally {
//     isLoadingProtect.value = false;
//   }
// };

const grantAccess = async () => {
  try {
    if (!web3Provider.value || !protectedData.value) throw new Error('Missing data');
    isLoadingGrant.value = true;
    grantError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value);
    const grantedAccess = await dataProtectorCore.grantAccess({
      protectedData: protectedData.value.address,
      authorizedApp: authorizedApp.value,
      authorizedUser: '0x0000000000000000000000000000000000000000',
    });
    console.log('Access granted:', grantedAccess);
  } catch (error) {
    grantError.value = error.message;
    console.error('Error granting access:', error);
  } finally {
    isLoadingGrant.value = false;
  }
};
</script>

<!-- <div class="form-container">
  <input v-model="contentToProtect" placeholder="Enter content to protect" />
  <button @click="protectData" :disabled="!isWalletConnected || isLoadingProtect">
    {{ isLoadingProtect ? 'Processing...' : 'Protect Data' }}
  </button>
  <div v-if="protectError" class="error">{{ protectError }}</div>
</div>

<div v-if="protectedData">
  <h2>Protected Data Address:</h2>
  <p>{{ protectedData.address }}</p>
</div> -->

## 🧩 Grant Access to Your iDapp

What do you mean by "grant access"?, you may ask. Well, it's simple. When you
protect your data, you can authorize users and specific applications to access
it. This is where you grant access to your iDapp. Like that an authorized user
will be able to use an authorized app to access your protected data and compute
it.

Authorize your iExec Application to access your protected data using the button
below.here is a simple diagram to explain the process:

![alt text](/assets/hello-world/process.png)

Connect Your Wallet: <MetamaskButton @connected="onWalletConnected" />

<div class="form-container">
  <input v-model="authorizedApp" placeholder="Enter authorized app address" />
  <button @click="grantAccess" :disabled="isLoadingGrant">
    {{ isLoadingGrant ? 'Processing...' : 'Grant Access' }}
  </button>
  <div v-if="grantError" class="error">{{ grantError }}</div>
</div>

<style scoped>
button {
  background-color: #fcd15a;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #e3b94d;
}

button:disabled {
  background-color: #888;
  cursor: not-allowed;
}

.form-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border-color: #fcd15a;
}

.error {
  color: white;
  background-color: red;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
