function sum (array){
	let res = 0;
	for (let i = 0; i < array.length; i++){
		res = res + array[i];
	}
return res;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0