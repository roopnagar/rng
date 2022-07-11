// var name = "abc";
// var name = "dfsf";
// let lang = "javascript";
// const data = "english";
// const menu = ["home","about"]
// menu.push("services")
// let welcome = () => "welcome to arrow function"
// let sum = (a,b) => a+b;
// // let greet = (name) => `welcome to ${name}`
// function sum(...data){
//     var total = 0;
//     for(price of data){
//         total += price;
//     }
// }
var nums = [12,45,38,923]

let [a, ...b] = nums;
var person = {
    name: "abc",
    mail: "r@gm.com"
}
var {name : fname, mail} = person
console.log(fname);
console.log(mail)