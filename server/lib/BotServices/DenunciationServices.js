

class DenunciationServices{


    static insertLocation(data){

        const arrayForms = data.split("-");

        return arrayForms[1];

    }


    static insertDescription(data){

        const arrayForms = data.split("-");

        return arrayForms[2];

    }


    static insertCulprit(data){
        const arrayForms = data.split("-");

        return arrayForms[3];
    }

}


module.exports = DenunciationServices