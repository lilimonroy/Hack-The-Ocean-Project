const Reader = require("../../lib/BotUtils/Reader");

class MessengerSTSea{

    static conversationStart(){

        const message = Reader.readJsonFile("options.json");
        const jointedMessage = message[0].message + ' | ' + message[1].message;
        
        return jointedMessage;
    }
}

module.exports = MessengerSTSea