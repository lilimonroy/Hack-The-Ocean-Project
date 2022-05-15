// import axios from 'axios';

const buttonPOST = document.getElementById("button");
// const buttonGet = document.getElementById("buttonGet");

const getData = () => {
    axios.get('http://localhost:3001/denuncias').then(response =>{
        console.log(response);
    })
}

const sendData = () => {
    axios.post('http://localhost:3001/denuncias',{
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("tel").value,
        domicilio: document.getElementById("domicilio").value,
        location: "from_Site",
        description: "from_Site",
        culprit: "from_Site",
        detalles: document.getElementById("comments").value,
    }).then(response => {
        console.log(response);
    });
}

// buttonGet.addEventListener('click', getData);
buttonPOST.addEventListener('click', sendData);
