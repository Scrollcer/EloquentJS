//First task
//------------------------------------
let string = "#";
for(let i = 0; i < 7; i++)
{
    console.log(a);
    a += "#";
}
//------------------------------------
//Second task
//------------------------------------
for(let i = 0; i <= 100; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 === 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}
//------------------------------------
//Third task
//------------------------------------
let result = "";
const size = 8;
for (let i =0; i < size / 2; i++) {
for(let j = 0; j < size / 2; j++) {
 result += " ";
 result += "#";
}
result += '\n';
for(let x = 0; x < size / 2; x++) {
 result += "#";
 result += " ";
}
result += '\n';
}
console.log(result);
