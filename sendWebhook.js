const _db = require('./db-imitation');
const db = new _db();

module.exports = function sendWebhook (app) {
    // Обработчик формы
    app.post('/sendWebhook', (req, res) => {
        // Получаем всех подписчиков
        var subscribers = db.read().subscribers;
        // Отправляем каждому подписчику событие
        subscribers.forEach(subscriber => {
            var request = require('sync-request');

            var res = request('POST', subscriber, {
                json: {
                    'webhook': req.body
                },
            });
            console.log(`send ${subscriber}`);
            console.log(res);
        });
        // Сообщаем, что все ок
        res.send({
            'status': true
        })
    });
}