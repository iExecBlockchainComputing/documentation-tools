# Build Your iExec App

> Reading 🕒 10 mins

That's it! You've protected your data and now you're ready to build your iExec
App, application that can run in a trusted execution environment (TEE) and
process protected data.

This guide will help you set up, test, run, and deploy your iExec App using the
`idapp-cli` tool. Follow the instructions carefully for a smooth development
experience.

## Prerequisites

Before getting started, ensure that you have the following installed on your
system:

- [**Node.js**](https://nodejs.org/en/) version 18 or higher
- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)
- [**Docker**](https://hub.docker.com/) have docker on your computer
- [**DockerHub**](https://docs.docker.com/engine/install/) have a dockerhub
  account

## Installation

First, you need to install the `idapp-cli` package. Open your terminal and run
the following command:

```sh
git clone https://github.com/iExecBlockchainComputing/idapp.git
cd idapp/cli
npm ci
npm i -g .
```

## Initialize Framework

To initialize the working directory for developing your iDapp, use the
`idapp init` command. This command sets up the necessary project structure and
files.

```sh
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

:::tip

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

Deploy your iDapp on the iExec protocol.

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

## 🧩 Keys takeway

- **iExec App** is an application that can run in a trusted execution
  environment (TEE) and process protected data.
- **idapp-cli** is a command-line tool that helps you build, test, and deploy
  your iExec App.
- **Docker** is a tool that allows you to run your iExec App in a containerized
  environment.
- **Protected Data** can be integrated into your iExec App to process private
  data.
- **iExec App** can be deployed on the iExec protocol to run in a trusted
  execution environment.

## 💫 Next steps

We have **protected data**, and we have an **iExec App**. What's next? Now we
need to authorize our **iExec App** and a **user** to access our protected data.
Let's do it in the next chapter.🚀
