let hello = document.getElementById("hello");
hello.textContent = "Howdy";
let para = document.getElementById("para");
para.textContent = "none";

let ul = document.querySelector('.foot ul');
let lis = ul.children;
let fir = ul.firstChild;

let n = document.createElement("li");
n.textContent = "pppppp";
ul.appendChild(n);

console.log(ul);
console.log(lis);
console.log(fir.textContent);

let main = document.querySelector('#maint');
main.classList.add("Howdy");