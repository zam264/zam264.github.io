# Docker

To build, execute 

```
docker build -t zam264.github.io .
```

To run, execute

```
docker run -d -p 80:80 zam264.github.io
```
|Flag|Description|
|---|---|
|`-d`|Run container in background and print container ID|
|`-p`|Publish a container’s port(s) to the host|