//Forma anterior  de los parametros default

function newUser(name, age, country ){
    var name = name || 'Jimena';
    var age = age || 32;
    var country = country || 'CO';
    console.log(name, age, country);
};
newUser();
newUser('carlos', 34, 'PE');

//Nueva forma

function adminUser (name = 'Ferri', age = 40, country = 'MX'){
    console.log(name, age, country);
};
adminUser();
adminUser('Harry', 39, 'UK');
