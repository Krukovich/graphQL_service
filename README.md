## Install Application

1. `npm install`
2. rename `.env.example` to `.env`
3. pass variables

```
PORT=4000
API_URL=http://localhost
PORT_ALBUM=3005
PORT_ARTIST=3002
PORT_BAND=3003
PORT_GENRE=3001
PORT_TRACK=3006
PORT_USER=3004
PORT_FAVOURITES=3007
```

4. run command `docker-compose up -d` if you do not have `docker-compose` please run this command `npm install docker-compose` and after run `docker-compose up -d`
5. change this variable `MONGO_URL` in `.env` in `node-graphql-service` repo to this one `mongodb://root:example@localhost:27888/?authSource=admin.`

## Run Application

1. `npm run start:dev`
2. open browser and pass `http://localhost:4000/` for work with GraphQL
3. open browser and pass `http://localhost:8081/` for check and work with MongoDB instance on docker

## Use Application

1. open browser and pass `http://localhost:4000/` for work with GraphQL
2. use mutation `register` and pass variables, below will be the steps and examples
   ```
   {
     "firstName": "Example",
     "lastName": "Example",
     "password": "pawwrod123",
     "email": "Example@Example.com"
    }
   ```
3. use mutation `login` for get jwt token
   ```
    {
      "password": "pawwrod123",
      "email": "Example@Example.com"
    }
   ```
   Response
   ```
   {
      "data": {
        "login": {
          "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0MDdhMTEzNWNiMWRmNzNjODAxZWIiLCJmaXJzdE5hbWUiOiJFeGFtcGxlIiwibGFzdE5hbWUiOiJFeGFtcGxlIiwiZW1haWwiOiJFeGFtcGxlQEV4YW1wbGUuY29tIiwiaWF0IjoxNjU3MDE0NDg4fQ.ZjioMp2OiCbc_MYNInzpE_fbFmnEkgNkl0meubebFKc"
        }
      }
    }
   ```
4. copy this jwt token and prepare Headers like the picture below
   ![](assets/img/headers.png)
5. use mutation `createGenre`
   ```
   {
     "name": "Example",
     "description": "Example",
     "country": "Example",
     "year": 2002
    }
   ```
6. use mutation `createBands` and use `genresIds` which you got in the first step
   ```
   {
     "name": "Example",
     "origin": "Example",
     "website": "Example.com",
     "genresIds": ["62c3f386b674c8a552f4890e"]
   }
   ```
7. use mutation
