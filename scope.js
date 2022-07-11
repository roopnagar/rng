var a = 10;//global variables

function sumTen(){
    var b = 20;//private variables
    // b=20; without var it becomes global
    return a+10;
}
sumTen()
console.log(b)
