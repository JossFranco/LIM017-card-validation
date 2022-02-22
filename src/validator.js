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
    let addPairs = 0;
    let oddSum = 0;
    for (let i = 1; i < secondArray.length; i+=2) {
      //Multiplicar por 2 los números encontrados del array
      let positionPar = secondArray[i]*2;
      if (positionPar >= 10) {
        addPairs = addPairs + 1 + positionPar % 10;
      }
      else addPairs = addPairs + positionPar;
    }
    for (let i = 0; i < secondArray.length; i+=2) {
      oddSum = oddSum + secondArray[i];
    }
    let addAmount = addPairs + oddSum;
    let answer;
    if (addAmount % 10 == 0) {
      answer = true;
    } else answer = false;
    
    return answer;
    },
  
    maskify: function (x) {
    let lengthCard = x.length;
    let mask = lengthCard -4
    let hidden = x.slice(mask,lengthCard);
    let maskOfCard;
    if(lengthCard > 5){
      maskOfCard = "#".repeat(mask) + hidden;
     } else {
     maskOfCard = x;
    }
    return maskOfCard;
  }
}
export default validator;