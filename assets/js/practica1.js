//dom - Document Object Model
let btnAlerta = document.getElementById("btnAlerta");

const ventanaAlerta = () =>{
    alert("prueba");
}

//onclicks
btnAlerta.onclick = function () {
    ventanaAlerta();
}