function ChatModel() {}

ChatModel.getAll = function(callback) {
    let error = null;
    let result = {message: 'oi'};
    callback(result, error);
};

module.exports = ChatModel;