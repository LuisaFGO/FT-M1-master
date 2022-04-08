'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // cada uno multiplicarlo por base 2 y eleverlo a su posición
  // sumar cada uno
  var suma=0;
  for(let i=0; i<num.length; i++){
    suma += num[i]*Math.pow(2, num.length-1-i);
  }
  return suma;
  /*var str=num.split("");
  return arr.reduce(fuction(acu, value, i, array){
    return acu + value *2**(array.length -1-i);
  }, 0);
  */
}

function DecimalABinario(num) {
  // tu codigo aca
  // Dividir el numero con 2 hasta llegar a 0
  // Guardarlo en una variable al contrario
  var binario=[];
  while(num>0){
    binario.unshift(num%2);
    num = Math.floor(num/2);
  }
  return binario.join('');
  /*otra forma
  var binario="";
  while{
    binario= num %2 + binario; lo pone en el orden que es
    num= Math.floor(num/2);
  }
  return binario;*/
  }


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}