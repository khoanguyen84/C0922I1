// let h1 = document.createElement("h1");
// h1.innerText = "Hello anh em";
// h1.className = "heading_1";
// h1.id = "h_1";

// document.getElementById('root').appendChild(h1);

let h3 = document.createElement('h3');
h3.innerText = "Hướng dẫn"
h3.id = "h_3";

let ul = document.createElement("ul");

let li_1 = document.createElement("li");
li_1.innerText = "Consectetur non in dolor deserunt commodo ad sit eiusmod.";

let li_2 = document.createElement("li");
li_2.innerText = "Nisi minim consectetur dolore commodo consectetur est magna magna occaecat ea et quis esse.";

ul.appendChild(li_1);
ul.appendChild(li_2);

document.getElementById('root').appendChild(h3);
document.getElementById('root').appendChild(ul);