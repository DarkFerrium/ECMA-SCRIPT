const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Esta funcionando');
        }
        else{
            reject('No funciona');
        }
        })
    }

    anotherFuncion()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Porfin termino'));
    //Finally nos sirve para ejecutar una funcion una ves termine de ejecutar una promesa, recuerda que el punto y coma va al final