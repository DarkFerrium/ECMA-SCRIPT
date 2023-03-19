/*El dynamic impor :
nos sirve para cargar elementos no todos al tiempo sino por parte, ej nos ayudaria a que una pagina web fuera mostrando elementos dentro de os primeros 3s antes que el usuario se aburra.
OJO= anonima es cuando o tiene un nombre o uso una arrow
*/

//creo la costante desde el html a JS
const button = document.getElementById('boton');

//creo el addevenlistener to listen the event and can execute a funcion
//la funcion que creo es una funcion async anonima ( es anonima porque no tiene nombre, algo similar a las arrow)
button.addEventListener("click", async function () {
    //en este punto ya puedo traer los metos del archivo de modulos
    const modulo = await import('./module.js');
    //veo que tiene el modulo por dentro
    console.log(modulo);
    //ejecuto un metodo del modulo  traido de modulo.js
    modulo.saludar();

    //me permite agilizar la carga del codigo base de mi pagina web, para hacerla mas rapida
})

