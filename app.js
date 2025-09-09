// - working code
// - click button to add button
// const container = document.getElementById("container");
const creator = document.getElementById('creator');
// const test = document.getElementById('test');
const destroyer = document.getElementsByClassName('destroyer');

// test.addEventListener("click", () => {
//     console.log("Click");
// });

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}

const makeOppoColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}

creator.addEventListener("click", () => {
    let button = document.createElement("button");
    container.appendChild(button);
    button.innerText = "delete";
    button.className = "destroyer";
    button.style.color = makeRandColor();
    button.style.backgroundColor = makeOppoColor();
    // console.log('it worked!');
});

// destroyer.addEventListener("click", () => {
//     console.log('it worked!');
// });

// container.addEventListener('click', function (e) {
//     e.target.nodeName === 'BUTTON' && e.target.remove();
// });