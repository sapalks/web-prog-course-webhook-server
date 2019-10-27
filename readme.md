# Сервер имитации работы с webhook

## Запуск сервера
```
git clone
cd ../
npm install
node index.js
```
Сервер развернется на [http://localhost:3200/](http://localhost:3200/)

## Описание API
## /subscribe
### Получение текущего списка подписчиков на webhook
**Method GET**
response
```
{
    "status": true,
    "": [
        "http://somebody.url/",
        "http://somebody.url/"
    ]
}
```

### Создание подписчика для webhook 
**Method POST**
request
```
{
    "url": "http://somebody.url/"
}
```
response
```
{
    "status": true
}
```
error
```
{
    "error": "error text"
}
```