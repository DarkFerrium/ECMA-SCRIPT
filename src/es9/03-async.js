/*
Le metemos un async a un generador con el cual tambien usamos promises
*/
async function* generador (){
    //con los generadores necesito mi palabra reservada yield
    yield await Promise.resolve('Resultado 1');
    yield await Promise.resolve('Resultado 2');
    yield await Promise.resolve('Resultado 3');
};

const resultadoGenerador = generador();
//si cambio el response.values a response.values(), puedo invocar funciones
//el .then es para obtener el response y no el reject de una promesa
resultadoGenerador.next().then(response => console.log(response.value));
resultadoGenerador.next().then(response => console.log(response.value));
resultadoGenerador.next().then(response => console.log(response.value));


//en este ejemplo la funcion automaticamente empieza a funcionar como es async espera un momento, por eso el Before, aparece primero
async function arrayDeNombres(array){
    for await(let valores of array){
        console.log(valores);
    }
    //despues de que termina el for continua con esta linea
    console.log('Termino');
}
const nombres = arrayDeNombres(['carlos', 'martin', 'roberto', 'carlos']);
console.log('Before');
console.log(nombres);

