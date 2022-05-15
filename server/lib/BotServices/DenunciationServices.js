

class DenunciationServices{


    static insertLocation(location){

        const arrayForms = location.split("-");

        return arrayForms[1];

    }

}


module.exports = DenunciationServices