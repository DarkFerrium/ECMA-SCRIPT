/* PROMISE ALLSETTLE
Me sirve para validar que todas mis promesas se hayan cumplido correctamente
*/

const promesa1 = new Promise((solucion, rechazo) => rechazo('Rechazado'));
const promesa2 = new Promise((solucion, rechazo) => solucion('Aprobado'));
const promesa3 = new Promise((resolve, reject) => resolve('Conexion correcta'));

//nos regresa un array de cada uno de los elementos que estan pasando
const asdad= Promise.allSettled([promesa1, promesa2, promesa3])
    .then(response => (console.log(response)));


