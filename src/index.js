import validator from "./validator.js";

    const enterBtn = document.querySelector("#btn");

    enterBtn.addEventListener("click", () => {
    document.getElementById("pruebas").style.display = "none";
    document.getElementById("prueba").style.display = "block";
    const numberCard = document.getElementById("numberCard").value;
    const message = document.getElementById("mensaje");

    if (numberCard === "") {
        message.innerText = 'por favor ingresa el número de tarjeta';
        message.classList.add("error-text");
       
    } else {

        const finalText = validator.isValid(numberCard);
       
        return finalText;
    }
})

