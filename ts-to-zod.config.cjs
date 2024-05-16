/**
 * ts-to-zod configuration.
 *
 * @type {import('ts-to-zod').TsToZodConfig}
 */
module.exports = [
  // Can't work as there are generics...
  // {
  //   name: 'common',
  //   input: 'node_modules/@iexec/dataprotector/src/lib/types/commonTypes.ts',
  //   output: './generated-zod-common-schemas.ts',
  // },
  {
    name: 'sharing',
    input: 'node_modules/@iexec/dataprotector/src/lib/types/sharingTypes.ts',
    output: './generated-zod-sharing-schemas.ts',
  }
];
