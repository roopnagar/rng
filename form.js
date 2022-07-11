var loginform = document.getElementById("loginform");

loginform.addEventListener("submit", function(e){
    e.preventDefault();
    var username = loginform.elements["username"].value;
    if(username.length < 6){
        console.log("username must be 6 characters")
        return null;
    }
    var password = loginform.elements["password"].value;
    var loginData = {
        username,
        password
    }
    console.log(loginData)
    
})
