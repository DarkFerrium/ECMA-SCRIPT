//alcance global
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

//alcance bloque
let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

// const no permite reasignar, es constante

//Ejemplo mas complejo del scope

const fruits = () => {
    if (true){
        var fruit1 = 'apple';
        let fruit2 = 'kiwi';
        const fruit3 = 'banana';
    }
    console.log(fruit1);//function scope
    console.log(fruit2);//block scope
    console.log(fruit3);//block scope
}
fruits();
