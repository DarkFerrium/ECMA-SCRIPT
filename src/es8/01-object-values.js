/* Object.values
Nos permite obtener un array con los valores que existen dentro de un objeto, a diferencia de Object.entries, 
Object.values solo nos trae los valores sin las llaves (osea sin los nombre de los items)
*/

const countries = {CO: 'Colombia', MX: 'Mexico', PA: 'Panama', PE: 'Peru' };
console.log(Object.values(countries));
//[ 'Colombia', 'Mexico', 'Panama', 'Peru' ]