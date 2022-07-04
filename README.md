## Install Application
1. ```npm install```
2. Rename ```.env.example``` to ```.env```
3. Pass variables
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
4. run command ```docker-compose up -d``` if you do not have ```docker-compose``` please run this command ```npm install docker-compose``` and after run ```docker-compose up -d```
5. change this variable ```MONGO_URL``` in ```.env``` in ```node-graphql-service``` repo to this one ```mongodb://root:example@localhost:27888/?authSource=admin.```

## Run Application
1. ```npm run start:dev```
2. open browser and pass ```http://localhost:4000/``` for work with GraphQl
3. open browser and pass ```http://localhost:8081/``` for check and work with MongoDB instance on docker