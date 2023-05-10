const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");
const passwd = urlParams.get("passwd");

//This only works with the single login for the admin. 

const loggedinas = document.getElementById("loggedinas");
if (email && passwd) {
  loggedinas.innerHTML = `Welcome Admin, your email is: ${email}!`;
} else {
  loggedinas.textContent = "Welcome to the website";
} 