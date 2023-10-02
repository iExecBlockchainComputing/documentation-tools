# iExec Tools documentation

This is the source repository of the [iExec tools documentation](https://tools.docs.iex.ec) rendered by gitbook.

- [`production`](https://github.com/iExecBlockchainComputing/documentation-tools/tree/production) branch is rendered at <https://tools.docs.iex.ec>
- [`staging`](https://github.com/iExecBlockchainComputing/documentation-tools/tree/staging) branch is rendered at <https://documentations.iex.ec/iexec-tools-staging>

## Contributing

To keep the contribution process smooth, please read this small guide.

### Fork

Fork the `staging` branch

[![fork-button](./hidden-assets/fork-button.png)](https://github.com/iExecBlockchainComputing/documentation-tools/fork)

### Contribution

Apply your changes on your forked branch, stage them and commit.

> _**Tips:**_  
> The space root is [`./documentation/`](./documentation/)  
> The first page is [`./documentation/README.md`](./documentation/README.md)  
> The summary is [`./documentation/SUMMARY.md`](./documentation/SUMMARY.md)

### PR time

Open a Pull-Request from your branch to the `develop` branch.

A preview of your changes will be rendered on the staging environment.

![PR-preview](./hidden-assets/PR-preview.png)

Click on the "Details" link to access the preview.

> _**Tips:**_  
> You can open a draft Pull-Request and set it "Ready for review" when you are happy with the preview.

Open Pull-Request will be reviewed by the team and merged once approved.

### Going live

After a short while the team will merge the `staging` branch into the `production` branch and your changes will be live on [tools.docs.iex.ec](https://tools.docs.iex.ec).

## Gitbook space configuration

This section is for the gitbook administrator.

### Customize

#### General

##### Basic

- Title: iExec Tools
- Custom logo: [`Logo-RLC-Yellow-Simple.png`](./hidden-assets/Logo-RLC-Yellow-Simple.png)

##### Themes

- Theme: `Contrast`
- Ligth Mode
  - Primary Colour: `#F1C400`
- Dark Mode
  - Primary Colour: `#F1C400`

##### Mode

- Show mode toggle: `true`
- Default mode: `Light`

##### Styling

- Font family: `Open Sans`
- Corner style: `Rounded`

#### Configure

- Page Rating: `true`
- Privacy Policy: `https://iex.ec/privacy/`

### Integrations

##### Analytics

- Google Analytics: `G-10RGBF003J`
- Hotjar: `3518387`
