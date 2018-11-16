# Steven Zamborsky's personal site

This is the source code for my personal website.

## Build and run

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

To see if site is running, execute

```
curl localhost
```

In a browser, browse to `localhost`