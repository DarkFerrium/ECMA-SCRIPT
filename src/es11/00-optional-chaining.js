 const objetoAnidado = { 
    derecho: {
        name: ' Nadya'
    },
    industrial: {
        name: ' Jimena'
    }
 };
/*
 console.log(objetoAnidado);
 //puedo acceder a las a cada variable del ojeto
 console.log(objetoAnidado.industrial.name);
 //si trato de aceder a un objeto que no existe se romperia mi codigo
 console.log(objetoAnidado.bebeloper.name);
 //para que no se rompa uso optional chaining, su syntax es
*/

 //Para usar este ultimo no debo tener los anteriores porque rompe el codigo, me ejecutara sin errores y la respuesta sera undefined, muy utilizado para validar datos de un API
 console.log(objetoAnidado?.bebeloper?.name);
