/*
Modulos Js

./= me muestra los archivos de la carpeta donde estoy trabajando
../me muestra la carpeta superior a la que estoy trabajando

OJO: Se debe editar el archivo .json añadiendo al final:( "type": "module" )
sino aparece el ste error:
Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
there are many ways to import modules, this is one of them. in this one after editing file .json, I created some variables and
set the file where is located the module file which can be .js or .mjs
My example is a little bit diferent from the class one, but is more complete
*/

import {variable, variable2, saludar} from './module.js';

console.log(variable);
console.log(variable2);
saludar();

/*Console
42
43
Hello guys!
*/


