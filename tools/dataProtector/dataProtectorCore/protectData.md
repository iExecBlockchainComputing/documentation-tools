---
description:
  Use the protectData method from iExec DataProtector to encrypt user data
  client-side and ensure full privacy. Easily secure emails, credentials, or
  custom data structures in your iApp.
---

# protectData

The iExec tool suite supports deployment of applications where the user of the
application has complete and total control over access to their data. This
ensures privacy and security when invoking these applications.

Through use of the `protectData` method, a user may encrypt and secure any type
of data. Encryption occurs on the client side, supporting the user's control
over their data.

## Usage

The method accepts a JSON object containing the data to encrypt and an optional
name to identify the data.

An email address, for example, may be submitted as:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'example@gmail.com',
  },
});
```

Your object may contain any number of custom keys. The following example
illustrates protection of multiple categories of data within one object:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'example@gmail.com',
    SMTPserver: {
      port: 5000,
      smtp_server: 'smtp.gmail.com',
    },
  },
});
```

::: info

🧪 While protected data are processed in **TEE** by **intel SGX** technology by
default, `@iexec/dataprotector` can be configured to create and process
protected data in the experimental **intel TDX** environment.

TDX mode is enabled by setting connecting the **TDX SMS** and using the **TDX
workerpool**.

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate dataProtector connected to the TDX SMS
const dataProtectorCore = new IExecDataProtectorCore(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec', // [!code focus]
  },
});
// create a protected data
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'example@gmail.com',
    SMTPserver: {
      port: 5000,
      smtp_server: 'smtp.gmail.com',
    },
  },
});
```

⚠️ Keep in mind: TDX mode is experimental and can be subject to instabilities or
discontinuity.

:::

## Parameters

```ts twoslash
import { type ProtectDataParams } from '@iexec/dataprotector';
```

### data <RequiredBadge />

**Type:** `DataObject`

This is the actual data the user is protecting, provided as a JSON object with
any number of custom keys. The data is encrypted and stored as an NFT.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  data: { // [!code focus]
    email: 'example@gmail.com', // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

::: tip

If you'd like to **protect a file**, you first need to convert it to some kind
of buffer. To do so, you can use `createArrayBufferFromFile`.

```ts twoslash
const file: File = new File([], 'emptyFile.txt');
// ---cut---
import { createArrayBufferFromFile } from '@iexec/dataprotector';

const fileAsArrayBuffer = await createArrayBufferFromFile(file);
```

:::

::: tip

If you want to **protect an `Array`**, you must represent it as a
`Record<string, any>`. To do so, you can use the `reduceArray` method
implemented in this example.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const reduceArray = (array: Array<any>): Record<string, any> =>
  array.reduce((accumulator, current, i) => {
    accumulator[i] = current;
    return accumulator;
  }, {});

const emailsArray = [
  'example@gmail.com',
  'example@my-company.com',
  'example@example.com',
];

const protectedData = await dataProtectorCore.protectData({
  data: {
    emails: reduceArray(emailsArray),
  },
});

/**
 * protectedData.schema:
 * {
 *   emails: {
 *     0: 'string',
 *     1: 'string',
 *     2: 'string'
 *   }
 * }
 */
```

:::

### name <OptionalBadge />

**Type:** `string`  
**Default:** `''`

Allows providing a descriptive name for the protected data. This is considered
public metadata, describing the protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail', // [!code focus]
  data: {
    email: 'example@gmail.com',
  },
});
```

::: tip

The name is public and not encrypted.

:::

### uploadMode <OptionalBadge />

**Type:** `"ipfs" | "arweave"`  
**Default:** `"ipfs"`

Specify the storage solution to use for the protected data encrypted payload
hosting.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
  uploadMode: 'arweave', // [!code focus]
});
```

### allowDebug <OptionalBadge />

**Type:** `boolean`  
**Default:** `false`

Allow using the protected data in TEE debug apps.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
  allowDebug: true, // [!code focus]
});
```

::: tip

This param is for development only.

:::

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<ProtectDataStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
  onStatusUpdate: ({ title, isDone }) => {// [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'EXTRACT_DATA_SCHEMA';
'CREATE_ZIP_FILE';
'CREATE_ENCRYPTION_KEY';
'ENCRYPT_FILE';
'UPLOAD_ENCRYPTED_FILE';
'DEPLOY_PROTECTED_DATA';
'PUSH_SECRET_TO_SMS';
```

Once with `isDone: false`, and then with `isDone: true`

## Return value

```ts twoslash
import type {
  ProtectedDataWithSecretProps,
  ProtectedData,
} from '@iexec/dataprotector';
```

The `protectData` method returns the following fields, as a JSON object.

### name

`string`

The optional name provided during invocation of the method. If no name is
specified this value defaults to `Untitled`.

### address

`Address`

The ETH address of the newly created `protectedData`.

### owner

`Address`

The ETH address of the creator and owner of this `protectedData`.

### schema

`DataSchema`

Metadata describing the fields provided in the `data` parameter. The data types
are automatically detected and listed in the schema.

::: tip

The following data types are automatically detected:

- Scalars
  - `bool`
  - `f64` (JavaScript `number`)
  - `i128` (JavaScript `bigint` up to 128 bits)
  - `string`
- Binary:
  - `application/octet-stream`
  - `application/pdf`
  - `application/xml`
  - `application/zip`
  - `audio/midi`
  - `audio/mpeg`
  - `audio/x-wav`
  - `image/bmp`
  - `image/gif`
  - `image/jpeg`
  - `image/png`
  - `image/webp`
  - `video/mp4`
  - `video/mpeg`
  - `video/x-msvideo`

Any undetected binary data type is categorized as `application/octet-stream`

:::

### creationTimestamp

`number`

A unix-style timestamp indicating the creation time of this `protectedData`.

### transactionHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).

### zipFile

`Uint8Array`

Under the hood, your protected data will be **compressed as a zip file**. In
this zip file, you'll find back all of your protected fields, each field being
serialized with a tool called `borsh`. You can find more details here:
[deserializer](../advanced/iApp/deserializer).

This is mainly returned for debug purpose.

### encryptionKey

`Uint8Array`

The encryption key generated by the client to encrypt the data. This key is for
your own usage. You will not have to share it in the context of the iExec
protocol or developer tools.

Under the hood, it is a symmetric AES-256 key.

::: tip

The zip file generated is a `Uint8Array`, so if you want to handle the binary
data or download it consider adding a zip extension to it.

:::

### multiaddr

`string` | `undefined`

The multiaddr field is the IPFS path of your encrypted data.

::: tip

You can access your encrypted IPFS data with the link:

`https://ipfs-gateway.v8-bellecour.iex.ec/ipfs/abc123...`

`abc123...` is the second part of the returned string `/p2p/abc123...`

:::

## Created protected data

To further check your data was correctly created, you can inspect it on the
[iExec explorer](https://explorer.iex.ec/).

<a href="https://explorer.iex.ec/" target="_blank" rel="noreferrer" style="display: inline-block">
  <img src="/assets/explorer-dataset-example.png" alt="iExec explorer - Dataset example">
</a>
