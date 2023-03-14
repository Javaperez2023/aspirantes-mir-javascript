function join (array){
	let res = "";
	let espace = " ";
	for (let i = 0; i < array.length; i++){
		res = res + array[i];
		if (i < array.length -1){
			res = res + espace;
		}

	}
return res;

}

console.log(join([1, 3, 2])) // 1 3 2
console.log(join([10, 9, 8, 7, 6, 5, 4])) // 10 9 8 7 6 5 4