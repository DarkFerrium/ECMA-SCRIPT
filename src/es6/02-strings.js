let hello = 'Hello';
let world = 'World';

//Forma antigua antes de ecmaescript 06
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//Template literals
/* se deben usar comillas francesas son las que estan dobladas*/
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//Multi-line string (para hacer saltos)

//modo antigo
let lorem = 'esto es un string \n ' + 'esto es otra linea'; 
console.log(lorem);

//modo nuevo, template literal
let lorem2 = `Esta es una lina
esta es la otra linea `;
console.log(lorem2);