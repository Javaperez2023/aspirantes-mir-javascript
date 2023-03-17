//Paso 1
let persona = {
	nombre : "Juana",
	edad : 21,
	ciudad : "Bogotá",
	profesion : "Contable"
}
//Paso 2
console.log(persona);
//Paso 3
function presentacion (persona){
	let propiedad = 0;
	let cuenta = "";
	let puntos = ":";
	let espacio = " ";
	let llaves = Object.keys(persona);
	for(let i = 0; i < llaves.length-1; i++){
		propiedad = llaves[i]
		cuenta = cuenta + llaves[i] +":"+ persona[propiedad];
	
	if (i < llaves.length-1){
		cuenta = cuenta + espacio;
				
	}
}
return cuenta;
}
//Paso 4
let mensaje = presentacion(persona);
//Paso 5
console.log(mensaje);
//Paso 6
persona.hobbies = ["Futbol","Musica","Escritura"] ;
//Paso 7
console.log (persona.hobbies);
//Paso 8
let hob = persona.hobbies;
let cont = "";
let espacio = "\n";
for (let i = 0; i < hob.length; i++){	
		cont = cont + hob[i];
		if (i < hob.length-1){
		cont = cont + espacio;
				
	}

}
console.log (cont);