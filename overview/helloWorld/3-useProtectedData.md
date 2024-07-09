# Use protected data

> Reading 🕒 10 mins

That's it! You've protected your data and now you're ready to **build your iExec
App**, an application that will run in a trusted execution environment (TEE) and
process protected data.

This guide will help you set up, test, deploy and run your iExec App using the
[`idapp-cli`](https://github.com/iExecBlockchainComputing/idapp/blob/main/cli/README.md)
tool. Follow the instructions carefully for a smooth development experience.

## Prerequisites

Before getting started, ensure that you have the following installed on your
system:

- [**Node.js**](https://nodejs.org/en/) version 18 or higher
- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)
- [**Docker**](https://hub.docker.com/)

And also:

- A [**DockerHub**](https://docs.docker.com/engine/install/) account
- **A private key** from an Ethereum wallet (e.g., MetaMask, we need it to run
  the `idapp run` command)

## Installation

First, you need to install the `idapp-cli` package. Open your terminal and run
the following command:

```sh
git clone https://github.com/iExecBlockchainComputing/idapp.git
cd idapp/cli
npm install
npm install -g .
```

## Initialize Framework

To initialize the working directory for developing your iDapp, use the
`idapp init` command. This command sets up the necessary project structure and
files.

```sh
mkdrir demo
cd demo
idapp init
```

You will be prompted with the following message:

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
```

::: tip

Answer `no` to the last question
`? Would you like to access protected data inside your iDapp?`. We will cover
integrating protected data into your iDapp later.

:::

A new folder was created, it contains a very simple Node.js application, with
the main code being located in `app.js`.

## Test Your iDapp

To test your iDapp, use the `idapp test` command. This command will invoke your
locally installed Node.js and run the `app.js` file.

### Using Parameters

You can pass input parameters to your iDapp using the `--param` option. This
allows you to provide necessary inputs during runtime.

```sh
idapp test --param <your-input>
```

### Using Docker

In the end, an iDapp will be run by an iExec worker which needs a Docker image
as input. So for a more realistic test, you can run your iDapp using your local
Docker daemon.

```sh
idapp run --docker
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

## 🧩 Key takeaways

- An **iExec App** is an application that can run in a trusted execution
  environment (TEE) and process protected data.
- The **iDapp CLI** is a command-line tool that helps you build, test, and
  deploy your iExec App.
- **Protected Data** can be integrated into your iExec App to process private
  data.
- **iExec Apps** can be deployed on the iExec protocol to run in a trusted
  execution environment.

## 💫 Next steps

We have one **protected data**, and we have an **iExec App**. What's next? We
will need to authorize our **iExec App** and a **user** to access our protected
data. Let's do it in the next chapter.🚀
