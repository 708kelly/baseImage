# baseImage
```
docker build -t webbase:v.16 . --no-cache
```

```
docker run --name base_web -p 3000:3000 -d -v /Users/wangyiting/Documents/ESB/baseImage/example/src:/app/src  example:lastest
```
```
docker run --entrypoint /bin/sh -it   webbase:16.17.0
```
### image
#### nodejs 16 image
```
docker pull 70804/webbase:v16.17.0
```

trivy 驗證
![](/doc/trivy_16.png)


