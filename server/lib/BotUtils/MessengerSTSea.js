const Reader = require("../../lib/BotUtils/Reader");




class MessengerSTSea{

    static conversationStart(){

        const message = Reader.readJsonFile("options.json");
        const jointedMessage = '[https://i.imgur.com/mG0klxc.png] \n'+message[0].message + ' \n\n' + message[1].message;
        
        return jointedMessage;
    }


    static responseType(type,messagesOrder){
        
        if(type == 1){

            const message = 'Por favor acceda al siguiente link para continuar su denuncia en nuestro sitio:\n\nhttps://gaiaandokeanos.netlify.app/';
            return message;

        }else{

            return 'A continuación se le pedirá la información necesaria:\n\n1) Localización del inicidente, agregue también "Municipio, Estado". \n\n2) Describa el incidente de manera breve. \n\n3) ¿Quénes estan involucrados en este atentado al océano? \n\nInicie cada bloque de información con un guión (-)';

        }

        
    }


    static divideContent(userInput){
        
        const arrayForms = userInput.split("-");

        if(arrayForms.lenght < 4 || arrayForms.lenght > 4){
            return 'Has introducido los datos de manera incorrecta, por favor verifíquelos'
        }else{
            return '[https://i.imgur.com/vc083ne.png]\nLa denuncia ya se encuentra en nuestra base de datos con la fecha de hoy! \n\nAtenderemos esta situación a la brevedad. \n\nLos datos que ingresaste fueron:\n\n'+userInput;
        }

    }


}

module.exports = MessengerSTSea