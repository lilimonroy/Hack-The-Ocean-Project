const DenunciationServices = require("../../lib/BotServices/DenunciationServices");

describe('Pruebas de unidad para la clase DenunciationServices',()=>{

    test('1) Obtener la locación del incidente denunciado ', ()=>{

        //Código de la app

        const location = DenunciationServices.insertLocation('-Moroleon, Gto - Derrame de petróleo - Empresa X');

        //Validaciones
        expect(location).toBe('Moroleon, Gto ')
    })

    
})
