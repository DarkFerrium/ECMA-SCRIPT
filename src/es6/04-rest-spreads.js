//desestructuracion de arrays (arrays destructuring)


//Array Destructuring
//Puedes introducir un array dentro de otros con letras para que sea mas entendible
let fruits = ['apple', 'banana'];
let [a,b] = fruits; //los indices los transforma en letras
console.log(a,b);
//otra forma con los indices
console.log(a, fruits[1]);

//otra forma, donde con solo poner la coma omite esos valores
let fruits2 = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = fruits2;
console.log(fruit); 



//Object destructuring

let user = {username: 'oscar', age: 34};
let {username, age} = user; //the keys words aren't transform, we use the same
console.log(username, age);

//Spread operator (operador de propagacion), sirve para ,eter ,mas informacion en un array

let person = {name:'Naru', age: '40'};
let country = 'RU';
let dataComplete = {...person, country};
console.log(dataComplete);
//I can add more information adding for intance "id: 1", it respecs objebt syntax
let dataComplete2 = {id: 1, ...person, country};
console.log(dataComplete2);


//Parametro rest, sirve para sacar la informacion de un array ( osea lo que lo compone) o meterle la informacion restante luego de un parametro, debe siempre ir al final

function suma (num, ...values){
    console.log('num= ' + num);
    console.log('values= ' + values);
    console.log(num + values[0]);
    return num + values[0];
}

suma(1, 6, 7, 8, 9) // los numeros despues del 1 entran a formar parte del ...values osea hacen parte del resto
//Recomendacion tratar siempre de meter solo 3, o persarlo para que el codigo sea entendible

//Ejemplos de res para obtener los elementos de un array
let kissEmoji = [1,..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

// otros ejemplos de spread objetos para poder unirlos 

//el quie me gusto

export function solution(json1, json2) {
    json1 = json1 || { name: "Mr. Michi", food: "Pescado" };
    json2 = json2 || { age: 12, color: "Blanco" };
  
    return { ...json1, ...json2 }
  }


//el que trae por defecto
  export function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado",
    },
    json2 = {
      age: 12,
      color: "Blanco",
    }
  ) {
    return {
      ...json1,
      ...json2,
    };
  }
  