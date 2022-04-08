'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add= function(data){
   var node= new Node(data);
   var current = this.head;
   if(!current){
    //this.head = node;
    //this._length++;
    //return node;
    return this.head= node;
   }
   while(current.next){
      current = current.next;
   }
   current.next = node;
   this._length++;
   return node;
}

LinkedList.prototype.remove= function(){
  if(!this.head)return null;//esta vacio
  if(this.head.next=== null){//si solo hay uno
     var valor = this.head.value;
     this.head = null;
     return valor;
  }var current = this.head;
  while(current.next.next){//si tiene más de un elemento
    current = current.next;
    }
    var valor = current.next.value;
    current.next =null;
    return valor;
}
LinkedList.prototype.search= function(valor){
  var current = this.head;
  if(!current)return null;
  while(current){
    if(typeof valor === 'function'){
      if(valor(current.value))return current.value;
    }else{
      if(current.value === valor)return valor;
    }current = current.next;
  }
    return null;
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets= 35;
  this.buckets = [];
}
HashTable.prototype.hash = function(valor){
  var acum =0;
  for(var i=0; i<valor.length; i++){
    acum += valor.charCodeAt(i);
  }
  return acum % this.numBuckets;
}

HashTable.prototype.set = function(clave, valor){
  if(typeof clave !== 'string') throw new TypeError('Keys must be strings');
  var casillero= this.hash(clave);
  if(!this.buckets[casillero]){
    this.buckets[casillero]= {};
  }
  this.buckets[casillero][clave] = valor;
}
HashTable.prototype.get = function(clave){
  var casillero= this.hash(clave);
  return this.buckets[casillero][clave];
}
HashTable.prototype.hasKey = function(clave){
  var casillero= this.hash(clave);
  return !!this.buckets[casillero][clave];
  // return this.buckets[casillero].hasOwnProperty(clave);
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
