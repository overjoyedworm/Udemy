var p1 = -10
var p2 = 10
var p2a = 10
var p3 = 300
var p4 = 5

console.log("Problem 1")
while (p1 < 20){
	console.log(p1);
	p1++;
}

console.log("Problem 2")
while (p2 <= 40){
	console.log(p2);
	p2+=2;
}

console.log("Problem 2 Alternate")
while (p2a <= 40){
	if (p2a % 2 === 0){
		console.log(p2a);
	}
	p2a++;
}

console.log("Problem 3")
while (p3 <= 333){
	if (p3 % 2 !== 0){
		console.log(p3);
	}
	p3++;
}

console.log("Problem 4")
while (p4 <= 50){
	if (p4 % 5 === 0 && p4 % 3 === 0){
		console.log(p4);
	}
	p4++;
}
