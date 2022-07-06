//--------------------------------------------------------------
//First task
//--------------------------------------------------------------
function range(start, end, step = 1){
    let array = [];
    let i = 0;
    if (step < 0){
        for (start; start >= end; start += step) {
            array[i] = start;
            i++;
        }
    }
    else {
        for (start; start <= end; start += step) {
            array[i] = start;
            i++;
        }
    }
    return array;
}
function sum(array){
    let sum = 0;
    for(let element of array){
        sum += element;
    }
    return sum;
}
console.log(range(5,2, -1));
console.log(sum(range(1, 10)));
//--------------------------------------------------------------
//Second task
//--------------------------------------------------------------
function reverseArray(array){
    let j = array.length - 1;
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray[i] = array[j];
        j--;
    }
    return newArray;
}
function reverseArrayInPlace(array){
    array.reverse();
    return array;
}
let array = [5, 4, 3, 2, 1];
console.log(reverseArray(array));
console.log(reverseArrayInPlace(array));
//--------------------------------------------------------------
//Third task
//--------------------------------------------------------------
function arrayToList(array){
    let list = { };
    let copy = null;
for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: copy}
        copy = list;
}
return list;
}
function listToArray(list){
    let array = [];
    let a = 0;
    for(let i = list; i != null; i = i.rest){
        array[a] = i.value;
        a++;
    }
    return array;
}
function prepend(number, list){
    let newList = {value: number, rest: list};
    return newList;
}
function nth(list, number){
    let back = 0;
    let a = 0;
    for(let i = list; a != number; i = i.rest){
        back = i.value;
        a++;
    }
    return back;
}
let arrayList = [1, 2, 3];
let list = arrayToList(arrayList);
console.log(list);
console.log(listToArray(list));
console.log(prepend(54, list));
console.log(nth(list, 2))
//--------------------------------------------------------------
//Fourth task
//--------------------------------------------------------------
function deepEqual(firstObject, secondObject){
    if (typeof firstObject === "object" && typeof secondObject === "object"){
        let firstArray = Object.keys(firstObject), secondArray = Object.keys(secondObject);
        if(firstArray.length === secondArray.length){
            for(let i = 0; i <= firstArray.length - 1; i++){
                if(firstArray[i] !== secondArray[i]){return false;}
            }
            for(let i = 0; i <= firstArray.length - 1; i++){
                if(firstObject[firstArray[i]] !== secondObject[secondArray[i]]){return false;}
            }
            return true;
        }
        else{ return false;}
    }
    else if(firstObject === secondObject){return true;}
    return false;
}
let firstObject = {value: 1, rate: 2};
let secondObject = {value: 1, rate: 2};
console.log(deepEqual(firstObject, secondObject));