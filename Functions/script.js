// Problem 1 
function isEven(num1){
	if (num % 2 === 0){
		return true
	}
	return false
}

// Problem 1 Alternate
function isEven(num){
	return num % 2 === 0;



// Problem 2
function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result = result * i;
	}
	//return the result variable
	return result;
}

// Problem 3
function kebabToSnake(str){
	//replace all "-" with "_"
	var result = str.replace(/-/g , "_")
	//return str
	return result
}