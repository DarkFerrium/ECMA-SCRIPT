/*
Pasamos de un array de arrays a un objeto
*/

const arrayObjetos = new Map([['name', 'jimena'], ['age', 31] , ['lastname', 'caicedo']]);
console.log(arrayObjetos);
//Pasamos de un array a un objetos
console.log(Object.fromEntries(arrayObjetos));



//cuando ejecuto map me crea un objeto dandole pares de arrays, uno para la llave y para lapropiedad o valor.
const miMapa = new Map([
    [1, "uno"],
    [2, "dos"],
    [3, "tres"]
]);
console.log(miMapa);