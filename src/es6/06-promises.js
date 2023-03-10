//Promesas las cuales nos ayudan a traer informacion de una API
//una promesa indica cuando va a pasar , si ho mañana o nunca.
//lo que veo es que me sirve para mandar un valor de una funcion , y dependiendo de el resultado , hacer una o otra cosa con el, ademas se utilizan funciones incognitas (arrow function)
//una promesa es una forma de manejar el asincronismo en JavaScript

const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Esta funcionando');
        }
        else{
            reject('No funciona');
        }
        })
    }

    anotherFuncion()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//then and catch are reserved word, I uderstand this like whether I have 2 way to recive the response, if is resolve gi us a result  otherwise is reject

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Valor devuelto después de un segundo");
    }, 2000);
  });
  
  miPromesa
    .then((resultado) => {
      console.log(resultado);
      return "Nuevo valor devueltorsrs";
    })
    .then((nuevoResultado) => {
      console.log(nuevoResultado);
      console.log('2');
    })
    .catch((error) => {
      console.error(error);
    });

