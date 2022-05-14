const Reader = require("../../lib/BotUtils/Reader");

class MessengerSTSea{

    static conversationStart(){

        const message = Reader.readJsonFile("options.json");
        
        return message;
    }
}

module.exports = MessengerSTSea