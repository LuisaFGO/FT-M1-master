
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {//(8,9,10)
  var x = 10;
  console.log(x); //10
  console.log(a);//8
  var f = function(a, b, c) {//(8,9,10)
    b = a;//8
    console.log(b);//8
    b = c;//10 (8,10,10)
    var x = 5;
  }
  f(a,b,c);//(8,9, 10)
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10 global
console.log(x);//1
```

```javascript
console.log(bar);//undefined
console.log(baz);// error
foo();//hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//franco
   }
})();
console.log(instructor);//tony
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//the flash
    console.log(pm);//reverse flash
}
console.log(instructor);//the flash por el if
console.log(pm);//franco el let no sale
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2
"2" * "3"//esta multiplicando 6
4 + 5 + "px"//suma de left to right 4+5=9 "9px"
"$" + 4 + 5//"$45"
"4" - 2// resta 2
"4px" - 2 //Number("4px")-2= NaN
7 / 0 //infinity
{}[0]//como esta vacio, coge el que tiene algo= [0]
parseInt("09")//9
5 && 2 //2 como no son cero las coge como verdad y devuelve la última
2 && 5//5
5 || 0//5
0 || 5//5 el primero es falso por ser cero
[3]+[3]-[10]//"3"+"3"-[10]="33"-"10"=33-10=23
3>2>1//3>2=true-true>1=1>1=false
[] == ![]//[]===false- ""===false- false===false=true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefined
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//undefined porque al declarar var en el if tiene una propia
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//Aurelio de rosa

var test = obj.prop.getFullname;

console.log(test());//Juan Perez, porque test está declarado en global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();//1,4,3,2
```
