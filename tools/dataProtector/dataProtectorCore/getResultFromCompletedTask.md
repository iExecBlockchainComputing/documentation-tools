---
description:
  Retrieve the result of a completed task with iExec’s
  getResultFromCompletedTask method. Easily access task outcomes by providing
  the task ID.
---

# getResultFromCompletedTask

Method to get the result of a completed task.

## Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...',
});
```

## Parameters

```ts twoslash
import { type GetResultFromCompletedTaskParams } from '@iexec/dataprotector';
```

### taskId <RequiredBadge />

**Type:** `Address`

Address of the task ID data you'd like to get the result from.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...', // [!code focus]
});
```

### path <OptionalBadge />

**Type:** `string`

Under the hood, a protected data is a zip file. With this `path` parameter, you
can specify the file you're interested in. The zip file will be uncompressed for
you, and only the desired file will be given as the `result`.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...',
  path: 'content', // [!code focus]
});
```

### pemPrivateKey <OptionalBadge />

**Type:** `string`

If you have previously saved or generated a RSA keypair, you can reuse it in
further calls.

It needs to be the private key corresponding to the public key initially used to
encrypt the protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...',
  pemPrivateKey: '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----', // [!code focus]
});
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<ConsumeProtectedDataStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import {
  IExecDataProtectorCore,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult =
  await dataProtectorCore.getResultFromCompletedTask({
    taskId: '0x7ac398...',
    onStatusUpdate: ({ title, isDone }) => { // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'CONSUME_RESULT_DOWNLOAD';
'CONSUME_RESULT_DECRYPT';
```

Once with `isDone: false`, and then with `isDone: true`

## Return value

```ts twoslash
import { type GetResultFromCompletedTaskResponse } from '@iexec/dataprotector';
```

### result

`ArrayBuffer`

The actual content of the protected file.
