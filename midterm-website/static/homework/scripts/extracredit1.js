function generatePasswd() {
  var length = 8,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
    retVal = "";
  //this makes a random the length set above using Math.random and the charset provided.
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("psw").value = retVal;
}

function customPasswd() {
  length = prompt(
    "How long do you want your password to be? type in number form, the length in characters of the password."
  );
  includeNumbers = prompt(
    "Do you want numbers in your password? enter 'true' exactly if yes or 'false' exactly if not."
  );
  includeSymbols = prompt(
    "Do you want symbols in your password? enter 'true' exactly if yes or 'false' exactly if no."
  );
  if (includeSymbols == "true" && includeNumbers == "true") {
    //this is the chacter set used to make the password
    (charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="),
      //this is the value that will store the password
      (retVal = "");
  } else if (includeNumbers == "false" && includeSymbols == "false") {
    (charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      (retVal = "");
  } else if (includeNumbers == "true" && includeSymbols == "false") {
    (charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      (retVal = "");
  } else if (includeNumbers == "false" && includeSymbols == "true") {
    (charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-="),
      (retVal = "");
  } else {
    (charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      (retVal = "");
  }
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("psw").value = retVal;
}
