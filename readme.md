# Сервер имитации работы с webhook

## Запуск сервера
```
git clone https://github.com/sapalks/web-prog-course-webhook-server.git
cd web-prog-course-webhook-server
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
    "data": [
        "http://somebody1.url/",
        "http://somebody2.url/"
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