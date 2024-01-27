const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'blue', 'green', 'yellow', 'white', 'black', 'purple', 'pink', 'Salmon','DeepPink','Gold','Fuchsia','Lime', 'Aqua']

button.addEventListener('click', changeBG)

function changeBG(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
    // console.log(colorIndex);
}

