const validator = {
  isValid: function (x) {
    //Convertir el número de tarjeta en array
    let arrayCard = Array.from(x);
    //Convertir los strings del array a números enteros
    let secondArray = []; //Cree un array vacío
    for (let i = 0; i < arrayCard.length; i++) {
      //Cree un bucle para almacenar los strings del anterior array convertidos en números
      secondArray.push(parseInt(arrayCard[i]));
    }
    //Invertir los números del array
    secondArray.reverse();
    //Ubicar los números de posiciones "pares"
    let sumaPares = 0;
    let sumaImpares = 0;
    for (let i = 1; i < secondArray.length; i+=2) {
      //Multiplicar por 2 los números encontrados del array
      let positionPar = secondArray[i]*2;
      if (positionPar >= 10) {
        sumaPares = sumaPares + 1 + positionPar % 10;
      }
      else sumaPares = sumaPares + positionPar;
    }
    for (let i = 0; i < secondArray.length; i+=2) {
      sumaImpares = sumaImpares + secondArray[i];
    }
    let sumaTotal = sumaPares + sumaImpares;
    let respuesta;
    if (sumaTotal % 10 == 0) {
      respuesta = true;
    } else respuesta = false;
    
    return respuesta;
    },
  
    maskify: function (x) {
    let lengthCard = x.length;
    let mask = lengthCard -4
    let hidden = x.slice(mask,lengthCard);
    let maskCard;
    if(lengthCard > 5){
      maskCard = "#".repeat(mask) + hidden;
     } else {
     maskCard = x;
    }
    return maskCard;
  }
}
export default validator;