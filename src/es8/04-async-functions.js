/*
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee(true));
Expected output: "$2.00"
console.log(getFee(false));
 Expected output: "$10.00"

----------------------------------------------------------
 Este es un ejemplo de una funcion con setTimeout
  setTimeout(function(){
    console.log("estoy retrasado 3 seg (I'm delay / not update)");
  }, 3000);
-------------------------------------------------------------
Manejo de errores con "NEW ERROR"

En JavaScript, la palabra clave new se utiliza para crear una instancia de un objeto. Cuando se usa con la clase Error, se puede crear una instancia de un objeto de tipo Error que se utiliza para representar errores en tiempo de ejecución.
function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

dividir(10, 0); // lanza un objeto Error con el mensaje "No se puede dividir por cero"

*/

  // Empezamos defiiendo nuestra funcion promesa
  const funcionPromesa = ()=> { 
    //le digo que me devuelva lo que ejecute la promesa, ya sea si la resuelve o no
    return new Promise((resolve, reject) => {
      //operador ternario junto con un setTimeout para que me de un delay de 2s. Adicionalmente creo un objeto de error, el cual me ayuda a darle un manejo mejor a los errores porque tiene metodos y utilidades
      (true)
      //tengo que colocar el result como una arrow function para que me tome el setTimeout
      ? setTimeout(()=>resolve('Se resolvio la promesa!'),2000)
      : reject(new Error("Se produjo un error"));
    });
  };

      //aqui defino mi funcion asyncrona
      const ejecutarPromesa = async () => {
        //con el await le digo quie me espere hasta que se se ejecute
        const resolucion = await funcionPromesa();
        console.log('Activo la ejecucion del async, que demorara 2s');
        console.log(resolucion);
        console.log('finalizo la ejecucion del async');
        //el async respeta la ejecucion de lo que este adentro ojo, osea respeta la posicion para ejecutar , este se ejecuta despues
      }
      //Aqui lo que hacemos es validar que efectivamente la funcion asincrona no bloquee la ejecution del codigo
      console.log('Antes de ejecutar el async');
      ejecutarPromesa();
      //recuerda siempre que el setTimeout ejecuta son funciones no codigo, si le pones un console.log da error
      (true) ? setTimeout(()=>console.log('Luego de 2.1s se ejecuto todo el codigo'), 2000) : "No se ejecuto";


