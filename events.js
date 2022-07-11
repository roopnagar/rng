// function welcome(){
//     alert("I am an event");
// }

// var btn = document.getElementById("btn");

// // btn.onclick=welcome;

// btn.addEventListener("click", welcome);

function taskone(e) {
    console.log("task one")
    e.preventDefault()
    // if(false){
    //     e.stopImmediatePropagation()
    // }
}
function tasktwo(e) {
    console.log("task two")
}


function parentHandler(ev) {
    console.log("This is parent")
    console.log(ev.currentTarget)
}
function childHandler(ev) {
    console.log("This is child")
    ev.stopPropagation()
}

var p1 = document.getElementById("parent");
var p2 = document.getElementById("parent1");
var c1 = document.getElementById("child");
var c2 = document.getElementById("child1");
p1.addEventListener("click", parentHandler)
// c1.addEventListener("click",childHandler)
// p2.addEventListener("click",parentHandler, true)
// c2.addEventListener("click",childHandler, true)
// c1.addEventListener("click",taskone)
// c1.addEventListener("click",tasktwo)