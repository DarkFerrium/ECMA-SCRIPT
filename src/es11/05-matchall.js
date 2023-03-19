/*
march all :
Me sirve para buscar o filtrar una palabra dentro de un texto

EX:
this metod can work as a condition that show me if the email is well written to compare if the email have a dot, an At an a  domain
OJO: tambien funciona metiendo directamente el string
OJO: nos genera el indice tambien, tambien podrias filtrar y reemplazar textos.

Explicacion regex:

const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const str = "johndoe@example.com";
const result = pattern.test(str); // returns true

This pattern matches any string that starts with one or more alphanumeric characters, followed by an "@" symbol, followed by one or more alphanumeric characters or hyphens, followed by a dot, and ending with two or more alphabetic characters.
*/

//const regex = /\b(Apple)+\b/g;
const regex = 'Apple';

const frutas = 'Apple, Banana, Kiwi, Apple, Orange, Tangerine, etc, etc, etc';
for (const emparejar of frutas.matchAll(regex)){
    console.log(emparejar);
};
