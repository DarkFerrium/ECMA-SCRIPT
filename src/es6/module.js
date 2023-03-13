/*
Siempre debe haber un "export default"
OJO: Se debe editar el archivo .json añadiendo al final:( "type": "module" )
sino aparece el ste error:
Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
*/
export const variable = 42;
export const variable2 = 43;
export const saludar = () => {
    console.log('Hello guys!');
}

//Definimos nuestro elemento default ya sea una funcion or a varible
export default variable;



