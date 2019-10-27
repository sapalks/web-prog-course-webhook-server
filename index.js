const express = require('express');
const app = express();

const path = require('path');
const port = 3200;

const subscribe = require('./subscribe');
const sendWebhook = require('./sendWebhook');

const bodyParser = require('body-parser');

app.use(bodyParser.json());       // Учимся парсить JSON из тела запроса
app.use(bodyParser.urlencoded({     // И из строки тоже (чисто на всякий пожарный)
    extended: true
}));
// Добавляем обработчики для события /subscribe
subscribe(app);
// Добавляем обработчики для события /sendWebhook
sendWebhook(app);

app.get('/', (_, res) => {
    // Отображаем стартовую страницу
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Запускаем сервер
app.listen(port, () => console.log(`Example app listening on port ${port}!`))