function max (array){
	let cont = array[0];

	if (array.length === 0){
		return undefined;	
	}
	for (let i = 0; i < array.length; i++){
		if (cont < array[i]){
			cont = array[i];
		}
	}
return cont;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined