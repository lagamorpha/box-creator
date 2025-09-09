// - working code
// - click button to add button
const creator = document.querySelector('button[id="creator"]');

// color functions
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

// add boxes
creator.addEventListener("click", () => {
    let button = document.createElement("button");
    container.appendChild(button);
    button.innerText = "delete";
    button.className = "destroyer";
    button.style.color = makeRandColor();
    button.style.backgroundColor = makeOppoColor();
    // console.log('it worked!');
});

// remove boxes
container.addEventListener('click', function (e) {
    e.target.nodeName === 'BUTTON' && e.target.remove();
    console.log("poof");
});