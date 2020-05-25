<p align="center"><img src="https://github.com/keeqler/account-manager/blob/master/web/src/assets/logo.png?raw=true" width="100px"></p>
<h1 align="center">Account Manager</h1>
<p align="center">An password managing application where you can store your accounts credentials including usernames, passwords and 2FA secrets.</p>

# 📸 Screenshots

<p align="center">
  <img src="https://i.imgur.com/N5Ooacz.png">
  <img src="https://i.imgur.com/81QQdxZ.png">
  <img src="https://i.imgur.com/4dPSah5.png">
  <img src="https://i.imgur.com/DCTowFA.png">
</p>

# 🔥 Technologies/libraries

### 🌐 Back-end

- Javascript
- [NodeJS](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Redis](https://redis.io/)
- [Bee Queue](https://github.com/bee-queue/bee-queue)
- [JWT](https://jwt.io/)

### 💻 Front-end

- [NodeJS](https://nodejs.org)
- [ReactJS](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Redux Saga](https://redux-saga.js.org)
- [Styled Components](https://styled-components.com)
- [Unform](https://unform.dev/)

### 🛠 DevOps

- [Docker Compose](https://www.docker.com/)

# 🎉 Running

### ⚠️ Requirements:

- Docker Compose

### ⚙️ Setup

Open up your terminal and clone this repository, then, in the `api` directory, set the environment variables by creating a `.env` file
based on the existing `.env.example` file.

### 🚀 Running

In the project's directory root, run:

```shell
$ docker-compose up -d
```

You will be able access the React app at `localhost:3000` and the API at
`localhost:3333`.
