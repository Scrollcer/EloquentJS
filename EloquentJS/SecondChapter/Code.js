//First task
//------------------------------------
let a = "#";
for(let i = 0; i<7; i++)
{
    console.log(a);
    a+="#";
}
//------------------------------------
//Second task
//------------------------------------
for(let i = 0; i<=100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 == 0)
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
let size = 8;
let c = "";
let b = "";
let check = false;
for (let i = 0; i < size; i++){
    if (check == false){
        c += "#";
        b += " ";
        check = true;
    }
    else{
        c += " ";
        b += "#";
        check = false;
    }
}
for (let i = 0; i < (size/2); i++){
    console.log(c);
    console.log(b);
}