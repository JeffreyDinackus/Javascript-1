const TEXTCONTENT = document.querySelector("#test").textContent;
const ELEMENTINNERNODE = document.querySelector("#test").innerHTML;
const ELEMENTOUTERNODE = document.querySelector("#test").outerHTML;
const TEXTELEM = document.querySelector("#test").innerText;

console.log(`this is the text content ${TEXTCONTENT}`);
console.log(`this is the inner html ${ELEMENTINNERNODE}`);
console.log(`This is the outer html ${ELEMENTOUTERNODE}`);
console.log(`This is the inner text ${TEXTELEM}`);
