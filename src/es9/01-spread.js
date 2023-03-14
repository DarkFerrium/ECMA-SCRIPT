/*
Mas operaciones con spread
*/
const usuarios = {id: 1, name: "Mr. Michi", food: "Pescado" };
//el id del primero que coloco tiene que conincidir con la llave del objeto padre
const {id, ...valores} = usuarios;
console.log(id);
console.log(valores);
