# getValue

Method to deserialize a value given a provided type. 

## Usage

```ts twoslash [NodeJS]
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
// ---cut---

const value1 = await deserializer.getValue('path.to.value1', 'bool');
const value2 = await deserializer.getValue('path.to.value2', 'string');
```

## Parameters

```ts twoslash
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';
```

### path

`string`

The path of the value inside the protected data that you want to deserialize.

<!-- prettier-ignore-start -->
```ts twoslash [NodeJS]
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
// ---cut---

const value1 = await deserializer.getValue(
    'path.to.value1', // [!code focus]
    'bool'
    );
```
<!-- prettier-ignore-end -->

### type

`string`

Type of the desired data. The supported types are :

- `bool` | `f64` | `i128` | `bigint` | `string` | `Uint8Array` | `boolean`
  (legacy schema) | `number` (legacy schema)

<!-- prettier-ignore-start -->
```ts twoslash [NodeJS]
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
// ---cut---

const value1 = await deserializer.getValue(
    'path.to.value1', 
    'bool' // [!code focus]
    );
```
<!-- prettier-ignore-end -->

## Return value

The deserialize file.

### file

`BooleanSchemaFilter<T>     | NumberSchemaFilter<T>     | BigintSchemaFilter<T>     | StringSchemaFilter<T>     | BinarySchemaFilter<T>`
