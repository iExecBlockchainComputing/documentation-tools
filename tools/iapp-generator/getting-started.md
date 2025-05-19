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

### 📦 Installation via npm

```bash
npm install -g @iexec/iapp
```

Once installed, generate the auto-completion script and add it to your shell by
following the instructions:

```bash
iapp completion
```
