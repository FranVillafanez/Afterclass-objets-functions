const number = prompt('ingrese cantidad de usuarios que desea cargar' )


function Consola(name,surname,dni){
    this.name = name
    this.surname=surname
    this.dni = dni
   }

for(i = 1 ; i <= number ; i++){
    let nombre = prompt('ingrese nombre')
    let apellido = prompt('ingrese apellido')
    let dni = prompt('ingrese dni')
if(nombre && apellido && dni && number){

    let users = new Consola(nombre,apellido,dni,number)
   console.log(users)
     
}else{
    alert('falta un dato')
}

}
alert('usuario agregado a la consola')
