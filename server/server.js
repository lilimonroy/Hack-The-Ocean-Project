const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Inicia configuración e implementación del bot
const bot = require("./lib/botExport");
// const ExplorerController = require("./lib/BotControllers/ExplorerController");

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        // const fizzbuzzTrick = ExplorerController.getValidationScore(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        console.log(responseBot);
        bot.sendMessage(chatId, responseBot);
    } else if(isNaN(numberToApplyFb)){
      const command = msg.text;
      const commandAux = command.toLowerCase();
      console.log(commandAux)
      if(commandAux == "denunciar"){
        const mission =  msg.text;
        // const names = ExplorerController.getExplorersUsernamesByMission(mission);
        const responseBot = `tu comando es: ${commandAux}`;
        console.log(responseBot);
        bot.sendMessage(chatId, responseBot);
      }else{
        const responseBot = `introduzca un comando correcto`;
        console.log(responseBot);
        bot.sendMessage(chatId, responseBot);
      }
       
    }else{
        bot.sendMessage(chatId, "Envía un número válido");
    }

});



//Termina configuración e implementación del bot

// Require para usar Prisma
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();


//CORS

// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:8081"
// }
// app.use(cors(corsOptions));



//Rutas/Endpoints

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});








bot.on("polling_error", (msg) => console.log(msg)); //Debuging (faltava crear la función para validar un número sin el exporer)