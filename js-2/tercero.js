function maxIndex (array){
	let cont = array[0];
	let maxin = 0;
	if (array.length === 0){
		return -1;	
	}



	for (let i = 0; i < array.length; i++){
		if (cont < array[i]){
			cont = array[i];
			maxin = i;
		}



	}
return maxin;


}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1