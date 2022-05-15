const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
const cors = require("cors"); // Resolviendo problema de cors



// Inicia configuración e implementación del bot
const bot = require("./lib/botExport");
const MessengerSTSea = require('./lib/BotUtils/MessengerSTSea');
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

      
        if(numberToApplyFb == 1 || numberToApplyFb == 2){

          const responseBot = MessengerSTSea.responseType(numberToApplyFb);
          console.log(responseBot);
          bot.sendMessage(chatId, responseBot);
          
        }else{
          const responseBot = `Introduzca una opción correcta`;
          console.log(responseBot);
          bot.sendMessage(chatId, responseBot);
        }
        

    } else if(isNaN(numberToApplyFb)){

        const command = msg.text;
        const commandAux = command.toLowerCase();
        console.log(commandAux)

        if(commandAux == "denunciar"){

          const message1st = MessengerSTSea.conversationStart();
          const responseBot = message1st;
          console.log(responseBot);
          bot.sendMessage(chatId, responseBot);

        }else if(commandAux.startsWith("-")){

          const forms = MessengerSTSea.divideContent(commandAux);
          const responseBot = forms;
          console.log(responseBot);
          bot.sendMessage(chatId, responseBot);

        }else if(commandAux == "/start"){

          const responseBot = "[https://i.imgur.com/4asoRF3.png]\nBeinvenido a STOcean Denunciation!\n\nPara realizar tu denuncia ingresa el comando 'Denunciar'";
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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//CORS

// const cors = require("cors");
// const corsOptions = {
//   origin: "https://sparkling-rugelach-a85390.netlify.app/"
// }
app.use(cors());



//Rutas/Endpoints

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});


app.get('/denuncias', async (req, res) => {
  const allDenunciations =  await prisma.Denunciations.findMany({});
  res.json(allDenunciations);
});


app.post('/denuncias', async (req, res) => {
  const Denunciations = {
    name: req.body.name,
    email: req.body.email,
    telefono: req.body.telefono,
    domicilio: req.body.domicilio,
    location: req.body.location,
    description: req.body.description,
    culprit: req.body.culprit,
    detalles: req.body.detalles,
   };
  const message = 'Denuncia creada.';
  await prisma.denunciations.create({data: Denunciations});
  return res.json({message});
});






bot.on("polling_error", (msg) => console.log(msg)); //Debuging (faltava crear la función para validar un número sin el exporer)