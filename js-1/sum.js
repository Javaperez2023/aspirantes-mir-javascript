function suma (numero){
	let resultado=0;
	for (let incremento=1; incremento <= numero; incremento++){
		resultado= resultado + incremento;
		
	}
	return resultado;
}

console.log(suma(5));