// async function getUsers() {
//     let url = 'data.json';
//     try {
//         let res = await fetch(url);
//         return await res.json();

//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderUsers() {
//     let users = await getUsers();
//     let html = "";
//     users.forEach(user => {
//         let htmlsegment = `<div class="user">
//         <img src="${user.profileURL}">
//         <h2>${user.firstName} ${user.lastName}</h2>
//         <div class = "gender"> ${user.gender}</div>
//         <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//         </div>`;
//         html += htmlsegment;
//     });
//     let container = document.querySelector(".container");
//     container.innerhtml = html;
// }
// renderUsers()
let form = document.getElementById("signup")

var api_url = "https://jsonplaceholder.typicode.com/users";
form.addEventListener("submit", async function(e){
    e.preventDefault();
    var id = form.elements["id"].value;
    var name = form.elements["name"].value;
    var username = form.elements["username"].value;
    var email = form.elements["email"].value;
    var address = form.elements["address"].value;
    var phone = form.elements["phone"].value;
    var website = form.elements["website"].value;
    var company = form.elements["company"].value;

    let formData = {
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company

    }
    const response = await fetch(api_url,{
        method: "POST",
        headers: {
            'content-Type': "application/json"

        },
        body: JSON.stringify(formData)
    })
    console.log(await response.json())
})