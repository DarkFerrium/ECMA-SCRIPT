 /*Flat
 Me sirve para alanar un array que tenga otros arrays por dentro, osea me entrega un array plano en el cual la posicion donde iba el array anidado ahora van todos los valores del array 
    Flatmap
Me permite crear una operacion que opere los valores de un array
 */ 

 //Flat
const arrayAnidado = [1, 2, 3, 4, 5, [1, 2, 3, 4, 5, 6, [1, 2, 3, 4, 5, 6, 7]]];
//invoco la funcion flat, de los 3 subnivees que tiene mi array anidado
console.log(arrayAnidado.flat(3));

 //flatmap
const array = [1, 2, 3, 4, 5,];
//me deja el mismo valor y luego lo multiplica por 2
console.log(array.flatMap(valor => [valor, valor*2]));
//multiplicar mi array o matrix por 2
console.log(array.flatMap(valor => [valor*2]));