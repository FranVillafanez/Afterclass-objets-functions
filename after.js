function nombre (nombre,contraseña){
let objeto = {
    name: nombre,
    contraseña:contraseña
}
return objeto
}

let carrito = {
//LLAVE- VALOR
efectivo: 5000, //<- Esta separado por comas
productos:{
    nombre:'limpieza',
    productos:['detergente','lavandina']
},
saldo: 3000,
tarjeta:true,
resta: function (a,b){
    return a - b 
}, // <- se puede declarar cualquier tipo de dato
}



class Persona {
    constructor(nombre, edad, dni){
        this.nombre = nombre,
            this.edad = edad,
            this.dni = dni
    }
}



 let array = [
{
    nombre:'lucas',
edad:20,
dni:3323},
{
    nombre:'lucas',
edad:22,
dni:33231231
},
{
nombre:'lucas',
edad:22,
dni:3321312323
},
]

let allUsers = array.map((asdas) => {
    return new Persona(asdas.nombre, asdas.edad, asdas.dni)
})

console.log(allUsers)