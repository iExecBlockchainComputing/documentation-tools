# 🛡️Protect and manage data

Okay, we talked about confidential computing, data protection, and privacy. Now
it's time to put all of this into practice. In this chapter, we'll show you how
to protect and manage your data with our developer tool, **DataProtector**.

## 🧩 DataProtector

DataProtector is one of the most important of our tools, it enable the creation
to create of protected data, protected data that can be used by a user in an
iExec application.

- **Data Privacy and Security** : Utilizes end-to-end encryption to ensure the
  protection and confidentiality of your data, leveraging advanced confidential
  computing technology.

- **Dynamic Access and Monetization Management** : Allow users to manage access,
  enabling flexible control and monetization of data assets.

- **Seamless dApp Integration** : Features an SDK for easy integration into a
  DApp, enhancing functionality and user experience.

## 🧩 Let's create a protected Data

<script setup>
import { ref, watch } from 'vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import MetamaskButton from '../../components/MetamaskButton.vue';

const web3Provider = ref(null);
const isWalletConnected = ref(false);
const protectedData = ref(localStorage.getItem('protectedDataAddress') ? { address: localStorage.getItem('protectedDataAddress') } : null);
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

const protectData = async () => {
  try {
    if (!web3Provider.value) throw new Error('Wallet not connected');
    if (!contentToProtect.value) throw new Error('Content is empty');
    isLoadingProtect.value = true;
    protectError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value);
    protectedData.value = await dataProtectorCore.protectData({
      data: {
        content: contentToProtect.value,
      },
    });
  } catch (error) {
    protectError.value = error.message;
    console.error('Error protecting data:', error);
  } finally {
    isLoadingProtect.value = false;
  }
};

// Watch the protectedData and save the address to local storage
watch(protectedData, (newValue) => {
  if (newValue) {
    localStorage.setItem('protectedDataAddress', newValue.address);
  }
});


</script>

Connect Your Wallet: <MetamaskButton @connected="onWalletConnected" />

<div class="form-container">
  <input v-model="contentToProtect" placeholder="Enter content to protect" />
  <button @click="protectData" :disabled="!isWalletConnected || isLoadingProtect">
    {{ isLoadingProtect ? 'Processing...' : 'Protect Data' }}
  </button>
  <div v-if="protectError" class="error">{{ protectError }}</div>
</div>

<div v-if="protectedData">
  <h2>Cool you've got your first protected Data</h2>
  <p>Please copy paste the address for the next chapter..psss the address is stored in local storage if you want to delete it</p>
  <p>{{ protectedData.address }}</p>
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

## 🧩 Under the hood

We will provide everything you need to know in this "Hello World" to get started
with DataProtector, but if you jump straight to the code and integrate it into
you Dapp, you can find the full documentation
[here](https://beta.tools.docs.iex.ec/tools/dataProtector.html) or follow this
reallllly complex set up below 😁 please pick some code snippets in our
[CodeSandbox](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7&preventWorkspaceRedirect=true)

For instance protect a data is as simple as :

```typescript
const provider = await connector.getProvider();
const dataProtector = new IExecDataProtector(provider);
const { address: protectedDataAddress } = await dataProtector.protectData({
  data,
  name,
});
```

Tadaada that's it!

It's always better to understand the car engine before driving it, right? So
let's take a look under the hood and see what happened when you clicked on the
button **Protect Data**.

![alt text](/assets/hello-world/dataprotector.png)

Ok let's explain step by step

1. The DataProtector SDK was called.
2. The data was encrypted with a symmetric key.
3. The encrypted data was stored on public decentralized storage (IPFS).
4. The symmetric key was stored in a secure enclave (TEE).
5. The DataProtector smart contract was called to create the protected data
   ownership on the blockchain.
6. The protected data address was returned to you, linking it to your wallet
   address.

## 🧩 The Dapp integration

Decentralized confidential computing might sound complex, but we've worked hard
to make it simple and accessible through our developer tools. Our tools capture
the essence and power of confidential computing and blockchain technology,
abstracting away the complexity. With just a quick **npm/yarn/pnpm install**,
our scientist can integrate these powerful features in his Dapp and then be able
to protect, manage and monetize sensitive data (and you don’t need to be a
full-stack Web3 developer, that’s amzing).

Here’s an easy-to-follow recipe:

1. **Start with Your App**: Use an existing app or scaffold a new one.
2. **Install the Developer Tool**: Run the installation command.
3. **Import and Create an Instance**: Import the tool into your file and create
   a new instance.
4. **Call the Methods You Need**: Use the methods provided by the tool.
5. **That's It!**: You’re done!

Don't just take my word for it—check out our code sandbox! We have ready-to-use
code snippets that you can try out. With these steps, you’ll be able to offer
your **users** Dapps with privacy-focused features in no time. Happy coding!

## 🧩 OK Great i have a protected Data..Let's go back on our iExec Apllication console

Now that you have a protected data, you can use it in an iExec application.
