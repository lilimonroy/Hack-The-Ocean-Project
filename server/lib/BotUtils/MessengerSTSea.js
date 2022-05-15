const Reader = require("../../lib/BotUtils/Reader");




class MessengerSTSea{

    static conversationStart(){

        const message = Reader.readJsonFile("options.json");
        const jointedMessage = '[https://i.imgur.com/mG0klxc.png] \n'+message[0].message + ' \n ' + message[1].message;
        
        return jointedMessage;
    }


    static responseType(type,messagesOrder){
        
        if(type == 1){

            const message = 'Por favor acceda al siguiente link para continuar su denuncia en nuestro sitio: https://drive.google.com/file/d/14BYxCOTqDQmRpQXstt2v0BRDUjA9VDdJ/view';
            return message;

        }else{

            return 'A continuación se le pedirá la información necesaria:\n 1) Localización del inicidente, agregue también "Municipio, Estado". \n 2) Describa el incidente de manera breve. \n3) ¿Quénes estan involucrados en este atentado al océano? \n Inicie cada bloque de información con un guión (-)';

        }

        
    }


    static divideContent(userInput){
        
        const arrayForms = userInput.split("-");

        if(arrayForms.lenght < 4 || arrayForms.lenght > 4){
            return 'Has introducido los datos de manera incorrecta, por favor verifíquelos'
        }else{
            return 'La denuncia ya se encuentra en nuestra base de datos con la fecha de hoy! \n\nAtenderemos esta situación a la brevedad. Los datos que ingresaste fueron:\n'+userInput;
        }

    }


}

module.exports = MessengerSTSea