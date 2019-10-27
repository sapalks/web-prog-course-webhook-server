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
## /subscribe -- Работа с подписчиками на webhook 
**Method GET Получение текущего списка подписчиков на webhook**

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
 
**Method POST Создание подписчика для webhook**

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