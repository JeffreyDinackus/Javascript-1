const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");
const passwd = urlParams.get("passwd");

const loggedinas = document.getElementById("loggedinas");
if (email && passwd) {
  loggedinas.innerHTML = `Weklcome Admin, your email is: ${email}!`;
} else {
  loggedinas.textContent = "Welcome to the website";
}