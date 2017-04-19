// importando o módulo express
const express = require('express');

// criando uma instância do express
const app = express();

// criando o servidor http para a nossa app
const server = require("http").Server(app);

// importando o Socket.io e executando-o passando nosso server
// como parâmetro
const io = require("socket.io").listen(server);

// importando o módulo path do node
const path = require('path');

// definindo a pasta public/dist como o local onde o front-end reside
app.use(express.static(path.join(__dirname, "public", "dist")));

// ouvindo o evento 'connection' no servidor que quando executado, cria um novo
// socket para a conexção recém aberta
io.on("connection", socket => {
    // com o novo socket criado é ciado também um novo ouvinte
    // para o nosso evento
    socket.on("mensagem_mano", msg => {
        // e o Socket.io reenvia pra todos que estão conectados
        io.emit("mensagem_mano", msg);
    });
});

// importando nosso arquivo de rotas e executando-o imediatamente 
// depois com a instância do Express sendo passada por parâmetro
const routes = require("./routes/routes.js")(app);

server.listen(3000, () =>
    console.log("Listening on port %s...", server.address().port));