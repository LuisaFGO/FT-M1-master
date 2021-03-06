'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  /*var arr = []; 
    while(num > 1) { // 'resultado' irá variando hasta hacerse 1
        for (var i = 2; i<= num; i++) { // vamos realizando pruebas
            if(num % i === 0){
                num = num / i; 
                arr.push(i);
                break;
            }}
        }arr.unshift(1);
        return arr;*/
        let array = [1];
        let i = 2;
        while(num !== 1){
          if(num % i === 0){
          array.push(i);
          num/=i; 
          }else{
           i++;
          }}
        return array;
     }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let flag = true;
  while(flag){
    flag = false;
    for(let i=0; i<array.length-1; i++){
      if(array[i]>array[i+1]){
        let bubble= array[i];
        array[i]= array[i+1];
        array[i+1] = bubble;
        flag= true;
      }
    }
  }return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length;i++){
    let aux = array[i];
    for(let j=0; j<i;j++){
      if(aux<array[j]){
        aux= array[j];
        array[j]=array[i];
        array[i]= aux;
      }
    }
  }return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j = 0; j<array.length-1; j++){
    let min = j;
    for(let i = j+1; i<array.length; i++){
      if(array[i] < array[min]){
        min = i;
      }
    }
    if(j!==min){
      let aux = array[j]; 
      array[j] = array[min];
      array[min] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
