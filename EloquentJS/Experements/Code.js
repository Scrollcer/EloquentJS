function min(...args){
    min = args[0]
    for (const i in args) {
        if (args[i] < min){
            min = args[i]
        }
    }
    return min

}
console.log(min(100, 10, 8, 60, 5,))

