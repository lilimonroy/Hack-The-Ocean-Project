// import axios from 'axios';

const buttonPOST = document.getElementById("button");
const buttonGet = document.getElementById("buttonGet");

const getData = () => {
    axios.get('http://localhost:3001/denuncias').then(response =>{
        console.log(response);
    })
}

const sendData = () => {
    axios.post('http://localhost:3001/denuncias',{
        name: "Federico",
        email: "fede@gmail.com",
        telefono: "445134789",
        domicilio: "Pípila #40",
        location: "Costa, playa del sol, Yelapa, Jalisco",
        description: "Tira de desechos",
        culprit: "Empresa 2X",
        detalles: "A las 3 am se desecharon grandes cantidades de plástico enla costa"
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

buttonGet.addEventListener('click', getData);
