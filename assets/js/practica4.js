//variables
let hNombre = document.getElementById("hNombre");
let hEdad = document.getElementById("hEdad");
let hDocumento = document.getElementById("hDocumento");
let hTelefono = document.getElementById("hTelefono");
let btnIngresarDatos = document.getElementById("btnIngresarDatos");

const IngresarDatos = () => {
    let prmNombre = prompt("Ingrese su nombre.");

    if (prmNombre ==="") {
        muestraAlerta();
    } else {
        hNombre.innerHTML = "Nombre: " + prmNombre;

        let prmEdad = prompt("Ingrese su edad.");
        if (prmEdad === "") {
            muestraAlerta();
        } else {
            hEdad.innerHTML ="Edad: " + prmEdad;

            let prmDocumento = prompt("Ingrese su documento");
            if (prmDocumento === "") {
                muestraAlerta();
            } else {
                hDocumento.innerHTML = "Documento: " + prmDocumento;

                let prmTelefono = prompt("Ingrese su telefono");
                if (prmTelefono === "") {
                    muestraAlerta();
                } else {
                    hTelefono.innerHTML = "Telefono: " + prmTelefono;
                }
            }
        }
    }
}

//funcion mensaje
const muestraAlerta = () => {
    alert("Debe ingresar los datos completos");
    hNombre.innerHTML = "Nombre: ";
    hEdad.innerHTML = "Edad: ";
    hDocumento.innerHTML = "Documento: ";
    hTelefono.innerHTML ="Telefono: ";
    return;
}

//eventos click
btnIngresarDatos.onclick = function() {
    IngresarDatos();
}

