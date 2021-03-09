//variables
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");

const guardarNombre = () => {
    let prmNombre = prompt("Ingresa tu nombre");
    let tmp = hNombre.value();
    console.log(tmp);
    hNombre.innerHTML = "Hola: " + prmNombre;
}

btnNombre.onclick = function () {
    guardarNombre();
}