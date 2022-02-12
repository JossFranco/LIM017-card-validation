/* const validator = {
  isValid: function (captureCard) {
    let array =array

  }
}



const validator = {
  isValid: function (cardNumber){
let array =Array.from(cardNumber);
let array2 =[];
let sumNum=0;
for(let i=0;i<array.length;i++){
  array2.push(parseInt(array[i]));
}
array2.reverse();
for(let i=0;i<array2.length; i++){
  if((i+1)%2==0){
array2[i]*2;
if(array2[i]>=10){
array2[i]-9;
}
sumNum+=array2[i];
}
else {
  sumNum+=array2[i]
}
}
const pruebas = document.getElementById("prueba");

console.log(pruebas.id);

var numero = 0;
numberCard = prompt('Ingresa un número de tarjeta');

if (tarjeta === null || (isNaN(tarjeta) === true)) {
  alert('Ingrese un número de tarjeta válido');
  //return isValidCard(tarjeta);
}
//Se van a iterar caracter numerico por caracter
for (var j = 0; j < tarjeta.length; j++) {
  if (isNaN(tarjeta.charAt(j)) === true)
    numero++
}
if (numero > 0) {
  alert("El número de tarjeta contiene letras o carácteres especiales, ingrese un número de tarjeta válido.");
  return isValidCard(tarjeta);
}
//Despues de validar si los digitos con correcto
/*Se estara iterando numero a numero, con un array inverso, se estaran sumando y invirtiendo el array
con los numeros pares*/
/* ar sum = 0,
  alt = false,
  i = tarjeta.length - 1,
  num;
// //Si el numero de caracteres de la tarjeta proporcionada son menores a 13 o mayores a 19
// //la tarjeta se regresa al prompt
if (tarjeta.length < 13 || tarjeta.length > 19) {
  alert('El número de tarjeta tiene que ser mayor a 13 y menor a 19 dígitos.');
  //       //return isValidCard(tarjeta);
  //     }
  // //Mientras los numeros sea mayor o igual a 0 se estara tomando cada caracter
  while (i >= 0) {
    //Se estaran tomando cada caracter numerico enteros ingresado en tarjeta
    num = parseInt(tarjeta.charAt(i), 10);
    //Valida que el número sea válido
    if (isNaN(num)) {
      return false;
    }
    //Válida el cambio true o false de imparidad
    if (alt) {
      num *= 2;
      if (num > 9) {
        num = (num % 10) + 1;
      }
    }
    //Voltea el bit de paridad
    alt = !alt;
    //Agrega el número
    sum += num;
    //Continúa con el siguiente dígito
    i--;
    //Determina si la tarjeta es válida
    if (sum % 10 === 0 && sum !== 0) {
      return alert('Tarjeta válida');
    }
    else {
      return alert('Tarjeta inválida');
    }
    isValidCard();
  }
} */
