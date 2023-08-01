# baseImage
```
docker build -t webbase:v.16 . --no-cache
```

```
docker run --name base_web -p 3000:3000 -d -v /Users/wangyiting/Documents/ESB/baseImage/image_16:/app  -v /app/node_modules -v/app/public  webbase:v.16
```


### image
#### nodejs 16 image
```
docker pull 70804/webbase:v16.17.0
```

