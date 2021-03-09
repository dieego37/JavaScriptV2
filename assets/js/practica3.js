//variables
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");

const guardarNombre = () => {
    let prmNombre = prompt("Ingresa tu nombre");
    if (prmNombre === "") {
        alert("por favor escribir su nombre o le dejamos care chimba?");
        hNombre.innerHTML = "Hola: don care chimba, ahi tiene por no poner nada jajajaj"
    } else {
        hNombre.innerHTML = "Hola: " + prmNombre;
    }
}

btnNombre.onclick = function () {
    guardarNombre();
}