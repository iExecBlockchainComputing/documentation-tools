# iExec Tools documentation

This is the source repository of the
[iExec tools documentation](https://beta.tools.docs.iex.ec)

## Run app

```
npm install
npm run tailwind:watch  (keep it running)
npm run dev
```

## Contributing

To keep the contribution process smooth, please read this small guide.

### Fork

Fork the `v2` branch

[![fork-button](/fork-button.png)](https://github.com/iExecBlockchainComputing/documentation-tools/fork)

### Contribute

Apply your changes on your forked branch, stage them and commit them with a
descriptive commit message.

Push your changes to your forked branch.

### PR time

Open a pull request from your forked branch to the `v2` branch.

A preview of your changes will be rendered on a preview environment.

![PR-preview](/PR-preview.png)

Click on the "Details" link to access the preview.

> _**Tips:**_  
> You can open a draft pull request and set it to "Ready for review" once you
> are happy with the preview. Opened pull requests will be reviewed by the team
> and merged once approved.

### Some conventions

In order to keep the documentation consistent, we have some naming conventions
for input parameters:

- `protectedData`: '0x123abc...',
- `protectedDataAddress`: '0x123abc...',
- `authorizedApp`: '0x456def...',
- `authorizedUser`: '0x789cba...',
- `appWhitelist`: '0xba46d6...',
- `owner`: '0xa0c15e...',
- `newOwner`: '0xc5e9f4...',
- `renterAddress`: '0x246bdf...'
- `subscriberAddress`: '0x246bdf...'
- `taskId`: '0x7ac398...'
