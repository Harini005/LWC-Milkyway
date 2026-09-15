let div = document.querySelector("div");
div.classList.toggle("random");
console.log(div.classList);

let elem = document.createElement("p");

elem.innerText = "This is a para created from Javascript";
elem.setAttribute("style", "background-color : black ; color : green");

div.append(elem);

console.log(elem.hasAttribute("style"));
console.log(elem.hasAttribute("color"));

let createdPara = document.querySelector("p");
let btn = document.createElement("button");
btn.innerText = "Click Me";

createdPara.append(btn);

div.classList.toggle("random");
console.log(div.classList);
