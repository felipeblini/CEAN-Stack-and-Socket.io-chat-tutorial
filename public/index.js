// Selecionando os elementos do HTML
var $messages = document.querySelector('.messages'); // área de mensagens
var $inputMessage = document.querySelector('.chatBox'); // caixa de texto

// Instanciando o Socket.io
var socket = io();

// sempre que o usuário apertar qualquer tecla do teclado em
// qualquer lugar da tela
window.addEventListener('keydown', function (event) {
    // Se caso a tecla for enter chama a função que envia
    // a mensagem digitada no input e limpa o input
    if (event.which === 13) {
        sendMessage();
        cleanInput();
    }
});

function cleanInput() {
    $inputMessage.value = '';
}

function sendMessage() {
    var message = $inputMessage.value;
    console.log('enviando mensagem', message);

    // Se a mensagem não for vazia
    if (message) {
        // pede ao servidor para executar o evento 'mensagem_mano'
        // e transmitir 1 parâmetro que vai para todos os usuários
        // conectados, inclusive para quem enviou
        socket.emit('mensagem_mano', message);
    }
}

// Sempre que o servidor emitir o evento 'mensagem_mano', o socket do
// usuário conectado vai capturar esse evento e chamar a função de callback
// que atualiza a área de mensagem com a nova mensagem recebida
socket.on('mensagem_mano', function (msg) {
    console.log('recebendo a mensagem', msg);
    var node = document.createElement("li");
    var textNode = document.createTextNode(msg);
    node.appendChild(textNode);
    $messages.appendChild(node);
});