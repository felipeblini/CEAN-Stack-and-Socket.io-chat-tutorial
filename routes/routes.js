// importando a classe ChatModel
const ChatModel = require('../models/chatmodel');

module.exports = function (app) {
    app.get('/mensagens', (req, res) => {
        ChatModel.getAll((result, error) => {
            if(error) {
                console.log('error:', error);
                return res.status(400).send(error);
            }
            
            return res.send(result);
        });
    });
};