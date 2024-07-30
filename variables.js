/*
    TODO: Existen 3 tipos de variable en JavaScript:

    ? 1-Variable var: esta variable ya no se usa mucho actualmente, ya que fue reemplzada por la palabra reservada let.
    ? siendo estas 2 casi iguales, simplemente por cambios leves, variable que no tocaremos muy a fondo pero que en otro video hablare mas de ella.

    ?? 2-Variable let: esta variable es de ambito local es decir, solo puede ser usada en su ambito de codigo o bloque de codigo.
    ?? al igual que puede ser mutable a lo largo del codigo. y actualmente la usada a diferencia de var.

    ?? 3-Variable const: al igual que la anterior esta variable es de ambito local es decir, solo puede ser usada en su ambito de codigo o bloque de codigo.
    ?? al igual que puede ser immutable a lo largo del codigo o es decir no puede ser modificada dandole otro valor.
*/
/* 
? -Variable var-
*/
/*
TODO: Se pueden guardar cualquier tipo de dato en la varible.s
*/
var nombre = "Angel";
var edad = 20;
var mayorEdad = trues;

if(mayorEdad == true  && edad >= 18){
    console.log("eres mayor de edad")
}
/*
TODO: Imprime el mensaje si la edad es mayor de 18.
*/


/*
? -Variable let-
*/

/* 
TODO:Se puede hacer lo mismo que la anterior en tema de funciones, simplemente que esta se usa mas actualmente.
 */
let nombre = "Mariana";
let altura = 1.60;
let mayorEdad = true;

if(altura <= 1.65)
{
    console.log("Tas chikita xd")
}


/*
? -Variable const-
*/

/*
TODO: Esta variable es parecida a las anteriores, pero con la diferencia de que no se puede reasignar una nueva valor a la variable.s
*/
const nombre2 = "Mariana";
const altura1 = 1.60;

/*
TODO: Al borrar la linea donde se reasigna la variable, se imprime el mensaje con exito.
*/
console.log(nombre);
console.log(altura);