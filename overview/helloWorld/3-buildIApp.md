<<<<<<< HEAD
# 🛠️ Build your IApp
=======
# Build iApp
>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a

> Reading 🕒 10 mins

That's it! You've protected your data and now you're ready to **build your iExec
App**, an application that will run in a trusted execution environment (TEE) and
process protected data.

This guide will help you set up, test, deploy and run your iExec App using the
<<<<<<< HEAD
[`idapp-cli`](https://github.com/iExecBlockchainComputing/idapp/blob/main/cli/README.md)
=======
[`iapp-cli`](https://github.com/iExecBlockchainComputing/iapp/tree/main/cli)
>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a
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
<<<<<<< HEAD
  the `idapp run` command)

## Installation

First, you need to install the `idapp-cli` package. Open your terminal and run
the following command:

```sh
npm install -g idapp-cli
=======
  the `iapp run` command)

## Installation

First, you need to install the `iapp-cli` package. Open your terminal and run
the following command:

```sh
npm install -g iapp-cli
>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a
```

## Initialize Framework

<<<<<<< HEAD
To initialize the working directory for developing your iDapp, use the
`idapp init` command. This command sets up the necessary project structure and
files.

```sh
mkdir demo
cd demo
idapp init
=======
To initialize the working directory for developing your iApp, use the
`iapp init` command. This command sets up the necessary project structure and
files.

```sh
mkdir iexec-test
cd iexec-test
iapp init
>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a
```

You will be prompted with the following message:

<<<<<<< HEAD
```
 ___ ____    _    ____  ____
 |_ _|  _ \  / \  |  _ \|  _ \
  | || | | |/ _ \ | |_) | |_) |
  | || |_| / ___ \|  __/|  __/
 |___|____/_/   \_\_|   |_|

? A new project will be created in the current directory. Do you want to continue? Yes
? What is the name of your project? develop-my-idapp
? Which language do you want to use to build your iDapp? JavaScript
? Would you like to access a protected data inside your iDapp? (Y/n)
=======
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
>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a
```

::: tip

<<<<<<< HEAD
Answer `no` to the last question
`? Would you like to access protected data inside your iDapp?`. We will cover
integrating protected data into your iDapp later.
=======
We recommend selecting "Hello World" to quickly discover how iApp works
>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a

:::

A new folder was created, it contains a very simple Node.js application, with
the main code being located in `app.js`.

<<<<<<< HEAD
## Test Your iDapp

To test your iDapp, use the `idapp test` command. This command will invoke your
locally installed Node.js and run the `app.js` file.

### Using Parameters

You can pass input parameters to your iDapp using the `--params` option. This
allows you to provide necessary inputs during runtime.

```sh
idapp test --params <your-input>
```

### Using Docker

In the end, an iDapp will be run by an iExec worker which needs a Docker image
as input. So for a more realistic test, you can run your iDapp using your local
Docker daemon.

```sh
idapp test --docker
```

## Deploy Your iDapp

Deploy your iDapp on the iExec protocol. You need to have you docker deamon
running to build the docker image.

```sh
idapp deploy
```

Now you can run your application using:

```sh
idapp run <your-idapp-address>
```

If you want, you can integrate protected data into your iDapp to process private
data. To do that, you need to start this tutorial again and answer `y` to the
question `? Would you like to access protected data inside your iDapp?`.

In a few minutes, you will have your iExec App able to run in a trusted
execution environment and process protected data that's amzing right?

::: tip iExec App Address

At the end of this tutorial, you will have the **iExec App address**. don't
forget to save it for the next chapter. ![alt text](/assets/hello-world/app.png)

:::

=======
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

>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a
## 🧩 Key takeaways

- An **iExec App** is an application that can run in a trusted execution
  environment (TEE) and process protected data.
<<<<<<< HEAD
- The **iDapp CLI** is a command-line tool that helps you build, test, and
  deploy your iExec App.
=======
- The **iApp CLI** is a command-line tool that helps you build, test, and deploy
  your iExec App.
>>>>>>> 67e7684e2ead2542813d02c1dd9f0223c9fb519a
- **Protected Data** can be integrated into your iExec App to process private
  data.
- **iExec Apps** can be deployed on the iExec protocol to run in a trusted
  execution environment.

## 💫 Next steps

We have one **protected data**, and we have an **iExec App**. What's next? We
will need to authorize our **iExec App** and a **user** to access our protected
data. Let's do it in the next chapter.🚀
