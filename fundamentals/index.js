// var person = {
//     name: "roop",
//     email: "abc@gmail.com",
//     number: "9999999999",
//     getName: function () {
//         return this.name

//     },
//     getEmail: function () {
//         return this.email
//     },
//     getNumber: function () {
//         return this.nunmber
//     },
//     setName: function (name) {
//         this.name = name

//     },
//     setEmail: function (email) {
//         this.email = email
//     }
// }
// person.prof = "Training";
// person.setProfession = function (prof) {
//     this.prof = prof
// }
// function Mobile(brand,memory){
//     this.brand = brand;
//     this.memory = memory;

//     this.getBrand = function(){
//         return this.brand
//     }
// }
// Mobile.prototype.os = "android";
// let mobile1 = new Mobile("Iphone","256gb");

// let mobile2 = new Mobile("ONEplus","128gb");
// function welcome(){
//     console.log("this is a welcome function")
// }
// console.log("start");

// setTimeout(welcome, 10000)
// console.log("end")
// var users = [{name:"roop", email:"nagar"},
// {name:"tinku",email:"bhati" } ]
// var promise = new Promise(function(resolve, reject){
//     try{
//         resolve(users)
//     }catch (error){
//         reject(error)
//     }
// });

// promise
//     .then( (res) => {
//         displayUsersGrid(res)
//     })
//     .catch( (err) => console.log(err))
// function displayUsersGrid(users){
//     let usersE1 = document.getElementById("users");
//     let output = "";
//     for (user of users){
//         output += `<div>
//         <div>${user.name}</div>
//         <div>${user.email}</div>
//         </div>`

//     }
//     usersE1.innerHTML=output;
    
// }
let url = 'data.json';

fetch(url)
    .then(res => res.json())
    .then((data) => {
        displayUsersGrid(data)
    })
    .catch((err) => console.log(err))

    function displayUsersGrid(url){
        let usersE1 = document.getElementById("url");
        let output = "";
        for (user of url){
        output += `<div class="user">
        <div>"name":${user.name}</div>
        <div>"brand":${user.brand}</div>
        <div>"price":${user.price}</div>
        <div>"category":${user.category}</div>
        <div>"rating":${user.rating}</div>
        </div>`
    
        }
        usersE1.innerHTML=output;
        
    
    }
    
   