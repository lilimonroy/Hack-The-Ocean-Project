const Reader = require("../../lib/BotUtils/Reader");


describe("Pruebas de unidad para la clase Reader",()=>{

    test("1) Return the ",()=>{

        //Code to be used in the app
        const Messages = Reader.readJsonFile("Messages.json"); 
        const options = Reader.readJsonFile("options.json");

        //Validations of the code behaviour
        expect(Messages).not.toBeUndefined()
        expect(options).not.toBeUndefined()
    })


})