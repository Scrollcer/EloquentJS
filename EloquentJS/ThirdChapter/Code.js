//--------------------------------------------------------------------
//First task
//--------------------------------------------------------------------
function Min(firstNumber = 0, secondNumber = 0){
    if(firstNumber === secondNumber || firstNumber < secondNumber){
        return firstNumber;
    }
    else{
        return secondNumber;
    }
}
console.log(Min(2));
//--------------------------------------------------------------------
//Second task
//--------------------------------------------------------------------
function isEven(Number){
    if(Number < 0){
        Number *= -1;
    }
    if(Number === 0){
        console.log("Even");
        return true;
    }
    else if(Number === 1){
        console.log("Not even");
        return false;
    }
    else{
        Number %= 2;
        isEven(Number)
    }
}
isEven(-1);
//--------------------------------------------------------------------
//Third task
//--------------------------------------------------------------------
function countBs(string){
    let count = countChar(string, "B")
    return count;
}
function countChar(string, letter){
    let count = 0;
    for(let i = 0; i<string.length; i++){
        if(string[i] == letter){
            count++;
        }
    }
    return count;
}
console.log(countBs("BBBsssB"));