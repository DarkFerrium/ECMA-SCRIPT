const promesa1 = new Promise((solucion, rechazo) => rechazo('Rechazado'));
const promesa2 = new Promise((solucion, rechazo) => solucion('Aprobado'));
const promesa3 = new Promise((resolve, reject) => resolve('Conexion correcta'));

//esta caracteristica me trae el resutado de la primer promesa satisfactoria

//Coloco mi array de promesas
Promise.any([promesa1, promesa2, promesa3])
    .then(resultado => console.log(resultado));
    // como respuesta me trae la segunda promesa, ya que la primera esta en "rechazo"