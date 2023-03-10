//Hablaremos de los objetos, clases, metodos e instancias (para dudas o terminologia ve a one note)
/*
This= hace referencia al elemento padre que lo contiene
intancia = crear un nuevo objeto
metodo= funcion dentro del objeto
contructor= funcion qe se realiza inmediatamente al instanciar ( crear objeto)
clase= es el elemento padre
get= me trae el valor de un objeto, y set me reescribe el valor del objeto
*/


//Declarando una clase (osea el padre el molde de los objetos)
class User0 {};
// para instanciar una clase se usa:
const newUser01 = new User0();

//Ejemplo con 2 instancias y un metodo
class user {
    greetings(){
        return 'Metodo Saludar';
    }
};
const newUser = new user();
console.log(newUser.greetings());
const newUser1 = new user();
console.log(newUser1.greetings());


//
class user {
    //El constructor, costruye o ejecuta una funcion cuando estoy creando una instancia
    constructor(){
        console.log('Creando nuevo usuario');
    }
    greetings(){
        return 'Metodo saludar';
    }
}
const david = new user();
console.log(david.greetings());

//En este ejemplo con this, inicializamos una variable de una clase (de creacion), ademas usamos template literals


    class user {
        constructor(name){
            this.name = name;
        }
        //Añado metodos
        speak (){
            return 'Hoy saludamos a: ' ;
        }
        greeting(){
            //uso template literals
            return `${this.speak()} ${this.name}`;
        }
    }

    const jimena = new user('jimena');
    console.log(jimena.greeting());

    //Ejemplo con setter and getters, nos sive para llamar el valor de una variable dentro de un ubjeto creado

    class user {
        //constructor
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        //metods
        speak(){
            return 'Hola:' ;
        }
        greeting(){
            return `${this.speak()} ${this.name} su edad es : ${this.age}`;
        }
        //Añado los getters and setters
        get modifyAge() {
            return this.age;
        }
        set modifyAge(n){
            this.age = n;
        }
    }

    const maria = new user('Maria', 31.6);
    console.log(maria.greeting());
    //con get lo llamo para ver el valor
    console.log(maria.modifyAge);
    //con set lo reescribo
    console.log(maria.modifyAge = 22);


