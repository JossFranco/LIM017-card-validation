//import validator from "./validator.js";


document.getElementById("btn").addEventListener("click", capture);
function capture() {

    let dato = document.getElementById("numberCard").value;

    if (dato == "") {
        alert("Ingrese el número de tarjeta");
    }
    else {
        let prueba = document.getElementById("prueba");
        prueba.innerHTML = dato;

        document.getElementById("pruebas").style.display = "none";
        document.getElementById("prueba").style.display = "block";
    }
}
