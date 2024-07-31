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
var mayorEdad = true;

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
let altura = 1.60;

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


var nanme = "Angel";
var edad = 20;
/*
? Son para lo mismo xd 
*/
let name = "Mariana";
let height = 1.60;


/*
TODO: las 3 tipos de variables pueden almacenar cualquier tipo de dato.s
*/
var texto = "Zi"
var numero = 1
var booleano = true
var array = [1,2,3,4,5]
var objeto = {name: "Angel", age: 20}
var funcion = function(){
    console.log("hola")
}


/*
TODO: Var es global, let es local, const es de ambito local.
*/

function ejemploVar() {
    console.log(x); // undefined, porque 'x' es elevada pero no inicializada
    var x = 5;
    console.log(x); // 5, porque ahora 'x' está inicializada
}

ejemploVar();

function ejemploLet() {
    // console.log(y); // Esto causará un error: Cannot access 'y' before initialization
    let y = 10;
    console.log(y); // 10, porque 'y' está inicializada
}

ejemploLet();


/*
TODO: La variable const es igual a las anteriores, 
TODO: pero con la diferencia de que no se puede reasignar una nueva valor a la variable
*/

const namee = "Mariana";
console.log(namee);
namee = "Angel";
console.log(namee);

/*
TODO: Al borrar la linea donde se reasigna la variable, 
todo: se imprime el mensaje con exito, de lo contrario se mostrara el error.
 */