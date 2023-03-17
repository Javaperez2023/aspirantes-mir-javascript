//Paso 1
let pedro = {
	nombre : "Pedro Pérez",
	edad : 30,
	activo : true,
	hobbies : ["programar","squash","piano"],
	//Paso 6
	saluda : function() {
		let result = "Hola, me llamo " + pedro.nombre;
		return result;
	}
}
//Paso 2
console.log(pedro.edad);
//Paso 3
pedro.estatura = 1.8;
//Paso 4
delete pedro.activo;
//Paso 5
let va = Object.values(pedro);
let ke = Object.keys(pedro);
let vacia = "";
let espacio = "\n";
for (let i = 0; i < ke.length; i++){
	vacia = vacia + ke[i] + ":" + va[i];
	if (i < ke.length - 1){
		vacia = vacia + espacio;
	}
}
console.log(vacia);
//Paso 7
console.log(pedro.saluda());