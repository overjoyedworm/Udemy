//var numbers = [1, 2, 3, 4];
//
//function printReverse(){
//    var newArr = numbers.reverse();
//    console.log(newArr);
//}

// printReverse
function printReverse(arr){
    for(var i = arr.length -1; i >=0; i--){
     console.log(arr[i]);   
    }
}

printReverse([5,3,7,6])


//isUniform
function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false
        }
    }
    return true
}

isUniform([1,1,1,1])
isUniform([1,1,3,1])

//sumArray
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    })
    return total;
}

//max()
function max(arr){
    var num = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > num){
            num = arr[i];
        }
    }
    return num;
}

max([3,5,2,9,10,4])