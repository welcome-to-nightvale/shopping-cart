// console.log("test");
//let box = document.querySelector(".box");
//console.log(x.parentElement);
//x.style.backgroundColor = "red";

// let header = document.getElementById("#color");
//b.style.backgroundColor = "rgb(0,255,0)";
//b.textContent = "Hello world";

/* function getRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r,g,b);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    header.textContent = `rgb(${r}, ${g}, ${b})`;
}

function inject(){
    let box = document.querySelector(".box");
    box.insertAdjacentHTML(
        "afterbegin", 
        `<h2 class="test">inserted</h2>`,
    )
};

const header = document.getElementById("color");
let x= 0;
document.getElementById("btn").addEventListener("click", function() {
    console.log("clicked");
    x++;
    // header.textContent = `clicked ${x} times`;
    getRGB();
    inject();
}); */

//todo:
//select container
//create inject function to accept item
//inject 1 html card into container


const header = document.getElementById("header");
function inject() {
    let space = document.getElementById("space");
    // let card = document.getElementByClass("box")
    space.
}

document.getElementById("btn").addEventListener("click", function(){
    inject();
});