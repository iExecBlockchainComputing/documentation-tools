# getResultFromCompletedTask

Method to get the result of a completed task.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const completedTaskResult =
  await dataProtectorSharing.getResultFromCompletedTask({
    taskId: '0x7ac398...',
  });
```

## Parameters

```ts twoslash
import { type GetResultFromCompletedTaskParams } from '@iexec/dataprotector';
```

### path

`string | undefined`

Under the hood, a protected data is a zip file. With this `path` parameter, you
can specify the file you're interested in. The zip file will be uncompressed for
you, and only the desired file will be given as the `result`.

### taskId

`AddressOrEN`

Address of the task ID data you'd like to get the result from.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const completedTaskResult =
  await dataProtectorSharing.getResultFromCompletedTask({
    taskId: '0x7ac398...', // [!code focus]
  });
```

### onStatusUpdate

`OnStatusUpdateFn<ConsumeProtectedDataStatuses> | undefined`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---

const completedTaskResult =
  await dataProtectorSharing.getResultFromCompletedTask({
    taskId: '0x7ac398...',
    onStatusUpdate: ({ title, isDone }) => { // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```
<!-- prettier-ignore-end -->

## Return value

```ts twoslash
import { type GetResultFromCompletedTaskResponse } from '@iexec/dataprotector';
```

### result

`ArrayBuffer`

The actual content of the protected file.
