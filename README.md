# Post CRUD Client

## [Live Site](https://post-crud-c2d70.web.app/)

### [Client-side Repo](https://github.com/StepAsideLiL/post-crud-client) | [Server-side Repo](https://github.com/StepAsideLiL/post-crud-server)

<br>
<br>

## Run the project on local machine.

- create a folder

```bash
mkdir post-crud
cd post-crud
```

- clone both client-side and server-side code from github into `post-crud` folder
- install the dependencies

```bash
npm install
```

### For client-side

- create `.env.local` file for environment variables
- set the firebase project and get the api keys.
- put the api keys in `.env.local` for authentication.
- set up `VITE_API` environment variable for server api url

```.env
VITE_APIKEY=[apiKey]
VITE_AUTHDOMAIN=[authDomain]
VITE_PROJECTID=[projectId]
VITE_STORAGEBUCKET=[storageBucket]
VITE_MESSAGINGSENDERID=[messagingSenderId]
VITE_APPID=[appId]

# VITE_API=http://localhost:5000/api/v1
```

- then run the following `npm` command

```bash
npm run dev
```

### For server-side

- create `.env` file for environment variables
- MongoDB Compass has to be installed on the local machine
- paste these environment variable in `.env`

```.env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/postCRUD
```

- [important] make sure you change the mongodb uri on MongoDB Compass url from `localhost` to `127.0.0.1`
- then run the following `npm` command

```bash
npm run dev
```
