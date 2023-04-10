function generatePasswd() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("psw").value = retVal;
}

function customPasswd() {
  length = prompt("How long do you want your password to be?");
  includeNumbers = prompt(
    "Do you want numbers in your password? enter 'false' exactly if not or 'true' exactly if yes."
  );
  includeSymbols = prompt(
    "Do you want symbols in your password? enter 'true' exactly if yes or 'false' exactly if no."
  );
  if (includeSymbols == "true" && includeNumbers == "true") {
    (charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="),
      (retVal = "");
  } else if (includeNumbers == "false" && includeSymbols == "false") {
    (charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      (retVal = "");
  } else if (includeNumbers == "true" && includeSymbols == "false") {
    (charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
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
