//alert("Roop Nagar")

//String "Java Script"
//Number 12000.98
//Boolean true/false
//Undefined
//Null

//name -> identifier (all variable names)
/*var name = "Java Script";
var price = 90;
//alert(name);
console.log(name);*/

/*var brand= "Lenovo";
var name = "POCO";
var price = 27999;
var color = "Midnight Black";
var RAM = "8GB";

//category = null;

console.log(brand, name, price, color, RAM);*/

var firstname = "Roop";
var secondname = "Nagar";
//var fullname = firstname + " " + secondname;
//var fullname = `Welcome ${firstname} ${secondname}`;

//Arrays

//var students = ["roop",90, null, fullname, [1,2,4,[34,67]]];

//Objects

//Dog is Object
//proprty  :  value
//color    :  black
//height   ;  2feet

var dog = {
    color: "brown",
    price: 20000,
    activities: ["play","Barks","eats"],
    height: "2feet",
    address:{
        city:"bengaluru"
    },
    runs: function(){
        console.log("Dogs runs")
    },
    eats: function(){
        console.log("Dogs eat's")
    }
}

//objectname.propertyname
console.log(dog.color)
console.log(dog.height)

dog.runs()
console.log(dog.activities[2])


//functions

/*function fn(){
    var lang = "English";
    console.log(lang);
}
fn()*/

function cook(param1, param2, param3){
    var result = `by using ${param1} and ${param2} and ${param3} I Made REcipe,`;
    return result;

}
function sum(a,b){
    return a+b;
}
