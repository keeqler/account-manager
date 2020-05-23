<p align="center"><img src="https://github.com/keeqler/account-manager/blob/master/web/src/assets/logo.png?raw=true" width="100px"></p>
<h1 align="center">Account Manager</h1>
<p align="center">An password managing application where you can store your accounts credentials including usernames, passwords and 2FA secrets.</p>

# Screenshots

<p align="center">
  <img src="https://i.imgur.com/N5Ooacz.png">
  <img src="https://i.imgur.com/81QQdxZ.png">
  <img src="https://i.imgur.com/4dPSah5.png">
  <img src="https://i.imgur.com/DCTowFA.png">
</p>

# What I used

### Back-end

- Express
- Sequelize
- Redis
- Bee Queue
- JSON Web Token

### Front-end

- React
- Redux
- Redux Saga
- Styled Components
- Unform

### DevOps

- Docker Compose

# Running

### Requirements:

- Docker Compose

### Getting started

Open up your terminal and clone this repo with the following command:

```shell
$ git clone http://github.com/keeqler/account-manager
```

In the `api` directory, set the environment variables by creating a `.env` file
based on the existing `.env.example` file.

### Running

In the project's directory root, run:

```shell
$ docker-compose up -d
```

You will be able access the React app at `localhost:3000` and the API at
`localhost:3333`.
