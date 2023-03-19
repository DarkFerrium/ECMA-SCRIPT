/*
march all :
Me sirve para buscar o filtrar una palabra dentro de un texto

EX:
this metod can work as a condition that show me if the email is well written to compare if the email have a dot, an At an a  domain
OJO: tambien funciona metiendo directamente el string
*/

//const regex = /\b(Apple)+\b/g;
const regex = 'Apple';

const frutas = 'Apple, Banana, Kiwi, Apple, Orange, Tangerine, etc, etc, etc';
for (const emparejar of frutas.matchAll(regex)){
    console.log(emparejar);
};
