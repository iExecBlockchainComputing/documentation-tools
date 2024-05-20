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

### contentAsObjectURL

`string`

The actual content of the protected file, wrapped in an `ObjectURL`.
