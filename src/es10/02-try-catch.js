try { 
    hola();
}catch {console.log(Hubo-un-error)};

//De esta forma puedo personalizar un Error (ojo que no me deja ver que hay dentro del error, ni la explicacion, que en este caso es que no esta una funcion hola declarada)
try { 
    hola();
}catch {console.log('Hubo un error')};