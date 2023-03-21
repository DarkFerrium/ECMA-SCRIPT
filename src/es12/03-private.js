/* Metodos privados
son metodos que solo pueden accederse dentro de una clase
*/

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metods
    //al añadirle numeral el metodo speak, modifyAge se vuelve privado, y solo puede ser accedido dentro de la clase
    #speak(){
        return 'Hola:' ;
    }
    greeting(){
        return `${this.speak()} ${this.name} su edad es : ${this.age}`;
    }
    //Añado los getters and setters
    get #modifyAge() {
        return this.age;
    }
    set #modifyAge(n){
        this.age = n;
    }
}

const maria = new user('Maria', 31.6);
console.log(maria.greeting());
//con get lo llamo para ver el valor
console.log(maria.modifyAge);
//con set lo reescribo
console.log(maria.modifyAge = 22);