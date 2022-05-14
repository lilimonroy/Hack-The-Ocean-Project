const MessengerSTSea = require("../../lib/BotUtils/MessengerSTSea");

describe('Pruebas de unidad de la clase MessengerSTSea',()=>{

    test('1) Enumerar las opciones en mensaje',()=>{
        //Código que irá en la app

        const message = MessengerSTSea.conversationStart();
        // const jointedMessage = message[0].message + ' | ' + message[1].message;

        // //Validaciones


        // expect(message[0].option).toBe("1");
        // expect(message[1].option).toBe("2");
        // expect(message[0].message).toBe("1) Inserte 1 para continuar su denuncia desde nuetro sitio oficial.");
        // expect(message[1].message).toBe("2) Inserte 2 para continuar su denuncia aquí mismo en Telegram.");
        expect(message).toBe("1) Inserte 1 para continuar su denuncia desde nuetro sitio oficial. | 2) Inserte 2 para continuar su denuncia aquí mismo en Telegram.")
    })

})