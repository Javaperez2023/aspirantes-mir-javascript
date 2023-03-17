//Paso 1 
let receta ={};
//Paso 2
receta.nombre = "Sandwich";
//Paso 3
receta.ingredientes = [];
//Paso 4
let primero = {
	nombre : "Pan",
	cantidad : 2,
}
receta.ingredientes.push(primero);
//Paso 5
let segundo = {
	nombre : "Queso",
	cantidad : 1,
}
receta.ingredientes.push(segundo);
//Paso 6
console.log (primero.nombre);
//Paso 7
let suma = primero.cantidad + segundo.cantidad;
console.log (suma);