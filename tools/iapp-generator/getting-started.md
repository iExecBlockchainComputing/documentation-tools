# 🛠 Getting Started

## 🕕 Prerequisites

Before using the iApp Generator, make sure you have:

\- [**Node.js**](https://nodejs.org/en/) version 20 or higher

\- **Docker**

\- **A working directory** _(if not available, `iapp init` will guide you to
create one)_

\- **Docker Buildx** _(for macOS users, check AMD64 compatibility)_

### 🔍 Verify Docker Compatibility

```bash
docker buildx inspect --bootstrap | grep -i platforms
```

If `linux/amd64` is not listed, **update your Docker installation.**

### 📦 Installation via npm

```bash
npm install -g @iexec/iapp
```

Once installed, generate the auto-completion script and add it to your shell by
following the instructions:

```bash
iapp completion
```
