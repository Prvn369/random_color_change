let cont = document.querySelector(".container");

function randomColor() {
    let firstNum = Math.floor(Math.random() * 255);
    let secondNum = Math.floor(Math.random() * 255);
    let thirdNum = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
    return randomColor;
}

cont.children[1].addEventListener("click", () => {
    cont.style.backgroundColor = randomColor();
    cont.children[0].innerHTML = randomColor().toUpperCase();
})

console.log(randomColor());