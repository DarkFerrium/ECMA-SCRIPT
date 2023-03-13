/* Set y add
Nos sirven para meter items (u objetos) a una lista de a uno o encadenandolos
*/

const list = new Set();

//añadiendo un item
list.add('item 1');
//añadiendo varios encadenados
list.add('item 2').add('item 3');
//añadiendo numeros y otras cosas
list.add(1991).add({animal: 'vaca', edad: 2})

console.log(list);
console.log(...list); //como un array
console.log(`El tamaño de la lista es: ${list.size}`); 