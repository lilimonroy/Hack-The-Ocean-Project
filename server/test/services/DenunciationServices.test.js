const DenunciationServices = require("../../lib/BotServices/DenunciationServices");

describe('Pruebas de unidad para la clase DenunciationServices',()=>{

    test('1) Obtener la locación del incidente denunciado ', ()=>{

        //Código de la app

        const location = DenunciationServices.insertLocation('-Moroleon, Gto - Derrame de petróleo - Empresa X');

        //Validaciones
        expect(location).toBe('Moroleon, Gto ')
    })

    test('2) Obtener la locación del incidente denunciado ', ()=>{

        //Código de la app

        const description = DenunciationServices.insertDescription('-Moroleon, Gto - Derrame de petróleo - Empresa X');

        //Validaciones
        expect(description).toBe(' Derrame de petróleo ')
    })


    test('2) Obtener al responsable del delito ', ()=>{

        //Código de la app

        const culprit = DenunciationServices.insertCulprit('-Moroleon, Gto - Derrame de petróleo - Empresa X');

        //Validaciones
        expect(culprit).toBe(' Empresa X')
    })

    
})
