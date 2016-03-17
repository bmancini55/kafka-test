# Simple test

Start Kakfa
```
docker run -d -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST=`docker-machine ip` --env ADVERTISED_PORT=9092 spotify/kafka
```