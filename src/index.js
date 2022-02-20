import validator from "./validator.js";

const enterBtn = document.querySelector("#btn");

    enterBtn.addEventListener("click", () => {
    
    const numberCard = document.getElementById("numberCard").value;
    const message = document.getElementById("message");
    const maskOfCard = document.getElementById("maskOfCard");
    let finalAnswer = validator.isValid(numberCard);
let maskAnswer= validator.maskify(numberCard);

    if (numberCard === "") {
        let frase=document.getElementById('frase');
        frase.innerHTML='Por favor no se olvide de ingresar el número de la tarjeta';
    } 
    else {
        document.getElementById("firstSection").style.display = "none";
        document.getElementById("secondSection").style.display = "block";
        if(finalAnswer == true){
            maskOfCard.innerHTML=maskAnswer;
            message.innerHTML='';
            message.innerHTML= "Tarjeta valida. Gracias por su preferencia";
        }
        else{
            maskOfCard.innerHTML=maskAnswer;
            message.innerHTML='';
            message.innerHTML= "Su tarjeta no es valida, intentelo nuevamente";
        }
    }    
     return finalAnswer; 
})

const enterBtn1 = document.querySelector("#btn1");

    enterBtn1.addEventListener("click", () => {
        document.getElementById("firstSection").style.display = "block";
        document.getElementById("secondSection").style.display = "none";

    })