# 🛠️ Build your iApp

> Reading time 🕒 10 mins

That's it! You've protected your data and now you're ready to **build your iExec
App**, an application that will run in a trusted execution environment (TEE) and
process protected data.

This guide will help you set up, test, deploy and run your iExec App using the
[`iapp-cli`](https://github.com/iExecBlockchainComputing/iapp/tree/main/cli)
tool. Follow the instructions carefully for a smooth development experience.

## Prerequisites

Before getting started, ensure that you have the following installed on your
system:

::: info

Every password or private key you use in this tutorial is stored locally on your
machine and is not shared with anyone.

:::

- [**Node.js**](https://nodejs.org/en/) version 18 or higher
- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)
- [**Docker**](https://hub.docker.com/)

And also:

- A [**DockerHub**](https://docs.docker.com/engine/install/) account
- **A private key** from an Ethereum wallet (e.g., MetaMask, we need it to run
  the `iapp run` command)

## Installation

First, you need to install the `iapp-cli` package. Open your terminal and run
the following command:

```sh
npm install -g iapp-cli
```

## Initialize Framework

To initialize the working directory for developing your iApp, use the
`iapp init` command. This command sets up the necessary project structure and
files.

```sh
mkdir iexec-test
cd iexec-test
iapp init
```

You will be prompted with the following message:

```sh
  ___    _    ____  ____
 |_ _|  / \  |  _ \|  _ \
  | |  / _ \ | |_) | |_) |
  | | / ___ \|  __/|  __/
 |___/_/   \_\_|   |_|

✔ What's your project name? (A folder with this name will be created) ...
? What kind of project do you want to init?
  > Hello World - iapp quick start
    Advanced
```

::: tip

We recommend selecting "Hello World" to quickly discover how iApp works

:::

A new folder was created, it contains a very simple Node.js application, with
the main code being located in `app.js`.

## Test Your iApp

To test your iApp, use the `iapp test` command. This command will invoke your
locally installed Node.js and run the `app.js` file.

### Using Arguments

You can pass arguments to your iApp using the `--args` option. This allows you
to provide necessary inputs during runtime.

```sh
iapp test --args your-name
```

### Using Protected Data

If your iApp requires protected data, you can use the `--protectedData` option
to specify the data to be used.

```sh
iapp test --protectedData default
```

## Deploy Your iApp

Deploy your iApp on the iExec protocol. You need to have your Docker daemon
running to build the Docker image.

Before deploying, you need to create a personal access token on Docker Hub:

1. Go to your Docker Hub account:
   [Docker Hub Security Settings](https://hub.docker.com/settings/security)
2. Click on "Personal access tokens"
3. Click on "Generate new token"
4. Name it for instance "Test iExec iApp CLI"
5. Select "Read & Write" access permissions
6. Don't forget to save your personal access token

Once you have your token, you can deploy your iApp using the following command:

```sh
iapp deploy
```

::: tip iExec App Address

At the end of this command, you will have the **iExec App address**, don't
forget to save it.

:::

## Run Your iApp

Now you can run your application using:

```sh
iapp run <my-iapp-address>
```

## 🧩 Key takeaways

- An **iExec App** is an application that can run in a trusted execution
  environment (TEE) and process protected data.
- The **iApp CLI** is a command-line tool that helps you build, test, and deploy
  your iExec App.
- **Protected Data** can be integrated into your iExec App to process private
  data.
- **iExec Apps** can be deployed on the iExec protocol to run in a trusted
  execution environment.

## 💫 Next steps

We have one **protected data**, and we have an **iExec App**. What's next? We
will need to authorize our **iExec App** and a **user** to access our protected
data. Let's do it in the next chapter.🚀
