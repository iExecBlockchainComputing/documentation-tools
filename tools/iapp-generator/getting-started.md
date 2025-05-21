# 🛠 Getting Started

## 🕕 Prerequisites

Before using the iApp Generator, make sure you have:

\- [**Node.js**](https://nodejs.org/en/) version 20 or higher

\- **Docker**

\- **Docker Buildx** _(for macOS users, check AMD64 compatibility)_

::: tip 🔍 Verify Docker Compatibility

```bash
docker buildx inspect --bootstrap | grep -i platforms
```

If `linux/amd64` is not listed, **update your Docker installation.**

:::

### 📦 Installation

::: code-group

```sh [npm]
npm install -g @iexec/iapp
```

```sh [yarn]
yarn global add @iexec/iapp
```

```sh [pnpm]
pnpm add -g @iexec/iapp
```

```sh [bun]
bun add -g @iexec/iapp
```

:::

Once installed, generate the auto-completion script and add it to your shell by
following the instructions:

```bash
iapp completion
```
