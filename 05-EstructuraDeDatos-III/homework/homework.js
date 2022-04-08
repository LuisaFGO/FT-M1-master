'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinarySearchTree.prototype.insert= function(valor){
   if(valor < this.value){
     if(!this.left){
       this.left = new BinarySearchTree(valor);
     }else{this.left.insert(valor)}
   }if(valor > this.value){
     if(!this.right){
       this.right = new BinarySearchTree(valor);
     }else{this.right.insert(valor)}
   }
}
BinarySearchTree.prototype.contains= function(valor){
  if(valor === this.value)return true;
  if(valor<this.value){
    return !!this.left&&this.left.contains(valor);
  }else if(valor>this.value){
    return !!this.right&&this.right.contains(valor);
  }
}
BinarySearchTree.prototype.depthFirstForEach= function(cb, order){
   //order = in order
   //order = pre order
   //order = post order
    if(order === 'pre-order'){
    //root- izq - der
    cb(this.value);
    if(this.left)this.left.depthFirstForEach(cb, order);
    if(this.right)this.right.depthFirstForEach(cb,order);
  }else if(order === 'post-order'){
    //iz-der-root
    if(this.left)this.left.depthFirstForEach(cb, order);
    if(this.right)this.right.depthFirstForEach(cb,order);
    cb(this.value);
  }else{
    //in order iz-root-der
    if(this.left)this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right)this.right.depthFirstForEach(cb,order);
  }
}
BinarySearchTree.prototype.breadthFirstForEach= function(cb, array=[]){//no pido el arrayy porque ya le asigne un valor vacío
  if(this.left)array.push(this.left);
  if(this.right)array.push(this.right);
  cb(this.value);
  if(array.length>0)array.shift().breadthFirstForEach(cb, array);// array solo porque es donde he estado agregando
}
BinarySearchTree.prototype.size= function(){
  if(!this.left && !this.right)return 1;
  if(this.left && !this.right)return 1 + this.left.size();
  if(this.right && !this.left)return 1 + this.right.size();
  return 1 + this.left.size() + this.right.size();
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
