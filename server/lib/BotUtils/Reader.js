const fs = require("fs");

class Reader{
    static readJsonFile(path_file_to_read){ 
        const rawdata = fs.readFileSync(path_file_to_read);
        const result = JSON.parse(rawdata);

        return result
    }//Static nos permite usar la función de la clase sin instanciar un objeto de la clase
}

module.exports = Reader