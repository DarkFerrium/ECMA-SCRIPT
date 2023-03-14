/*
usamos expresiones regulares que son expresiones que nos sirven para buscar en un string (o texto), la letra o parametro que definamos
--
con table creamos una tabla en la consola
console.table(buscarCoincidencias);

El código que muestras crea una expresión regular que busca una cadena de texto con el formato AAAA-MM-DD, donde A es un dígito para el año, M es un dígito para el mes y D es un dígito para el día.

Luego, se llama al método exec en la expresión regular con la cadena de texto "2022-01-01" como argumento. Esto busca la cadena de texto en busca de una coincidencia con el patrón
--
*/

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const buscarCoincidencias = regex.exec('2023-03-13');
//Luego, se llama al método exec en la expresión regular con la cadena de texto
console.table(buscarCoincidencias);