/* GENERATORS
Sirve para crear una funcion que recuerda el (estado) indice de la ultima vez que la ejecutamos.
Ej: si estamos recorriendo un array recordara el ultimo y procedera a mostrarnos el siguiente como en este caso.

*/
function* iterate(array){
    for (let valores of array){
        yield valores;
    }
}
const it = iterate(["joshi", 'jimen','maria', 'carro']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


// Ejercicio del degenerar codigos para hay un registro de gatos cada vez que se ejecute, si tuvieramos el array creao, lo podriamos hacer de esta manera, pero como el array no lo esta toca modificarlo
function* getId(array) {
    for (let valores of array) {
      yield valores;
    }
  }
const id = getId(["1", "2", "3"]);
console.log( id.next().value);
console.log( id.next().value);
console.log( id.next().value);

//como el array no esta debemos generarlo de la nada, por lo cual hacemos lo siguiente, generamos un ciclo while, el cual nos permite hacer sumar un numero al id (variable idsGenerados) cada vez que se ejecute, ¿porque no un for?: porque no sabemos cuantos veces se va a ejecutar (lo cual aparentemente fueran 3 veces, pero no lo es (no lo dice)). 

export function* getId() {
    let idsGenerados = 1;
    while (true) {
      yield idsGenerados++;
    }
  }
  const gatosId = getId();
  console.log(gatosId.next().value);
