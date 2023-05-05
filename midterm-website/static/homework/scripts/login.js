loginattempts = 0;

function login(){
  document.getElementById("output-for-login").innerHTML = "";


  //there is nothing stopping the user from refreshing the page and resetting the login attempts. I think I would need a database to fix that as far as I know.
  email = document.getElementsByName("email")[0].value;
  passwd = document.getElementsByName("passwd")[0].value;
  loginattempts += 1;
  if (email == "admin@admin.com" && passwd == "panicatthedisco" && loginattempts < 3){
    // window.location.href = "";
  }
  if (email != "admin@admin.com " || passwd != "panicatthedisco"){
    document.getElementById("output-for-login").innerHTML = "Incorrect email or password!";
  }
  if (loginattempts > 3){
    document.getElementById("output-for-login").innerHTML = "Too many login attempts! Try again in 15 minutes";
  }}


//this code prevents the page from refreshing when the submit button is pressed. 
var form = document.getElementById("myForm"); function handleForm(event) {     event.preventDefault(); }  form.addEventListener('submit', handleForm);