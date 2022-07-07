//--------------------------------------------------------
//First task
//--------------------------------------------------------
let array1 = [1, 2, 3, 4]
let array2 = [1, 2, 3, 4]
let arrayArrays = [array1, array2];
let finalArray = [];
let result = arrayArrays.reduce((previousValue, currentValue) => previousValue.concat() + currentValue.concat() + ",",
    finalArray);
console.log(result);
//--------------------------------------------------------
//Second task
//--------------------------------------------------------
let a = 0;
for(let i = 0; i<=5; i++){ //Example loop
    a+=i;
}
console.log(a);
let b = 0;
function loop(value = 0,
              condition = () => {return value <= 5;},
              update = () => value++,
              body = () => b+=value
              ){
    if(condition() !== false){
        body(value);
        update(value);
        loop(value, condition, update, body);
    }
}
loop();
console.log(b);