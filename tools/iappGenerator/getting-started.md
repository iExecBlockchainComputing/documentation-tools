# Getting Started

[![npm](https://img.shields.io/npm/v/@iexec/iapp?color=green)](https://www.npmjs.com/package/@iexec/iapp)

## 🔗 Debug Mode

The **iApp Generator** runs in **Debug Mode** by default, allowing you to iterate and refine your iApp **before moving to full confidentiality**.

### Why Debug Mode?

✅ **Rapid iteration** – Quickly test and refine your iApp code.  
✅ **Access to logs and output files** – Debug and troubleshoot issues.  
✅ **Ensure proper functionality** before deploying in full privacy mode.  

### Debug Mode vs. Production Mode

| Mode                  | What It Does |
|-----------------------|-------------|
| **Debug Mode**        | Logs & output files are accessible. Great for testing & debugging. |
| **Production (Full Privacy)** | Fully confidential execution, no access to logs or intermediate results. |

> 📌 **In Production Mode, even you as a developer will not be able to access the processed data.**

::: tip

 ⚠️ Want to go Full Privacy?
Contact the iExec team to validate and transition your iApp to production securely.

:::

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 20 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

\- A working directory (if not available, iapp init will guide you to create one)

\- [Docker Buildx](https://formulae.brew.sh/formula/docker-buildx) (for macOS users, check AMD64 compatibility)

### Verify Docker Compatibility

```sh
docker buildx inspect --bootstrap | grep -i platforms
```

If linux/amd64 is not listed, update your Docker installation.

### Installation

::: code-group

```sh [npm]
npm install -g @iexec/iapp
```

:::

Once installed, generate the auto-completion script and add it to your shell by following the instructions:

```sh
iapp completion
```
