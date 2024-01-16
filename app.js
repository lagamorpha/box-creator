// - working code
// - click button to add button
const container = document.querySelector("#container");
const spawner = document.querySelector('#spawner');
const testButotn = document.querySelector('#test');
const buttons = document.querySelectorAll('button');

spawner.addEventListener('click', function spawn() {
    let btn = document.createElement('button');
    container.appendChild(btn);
    btn.innerText = 'delete';
    // btn.className = 'remover';
    console.log('it worked!');
});

for (let button of buttons) {
    button.addEventListener('dblclick', function remove() {
        console.log('it worked!');
    });
}

// move boxes using absolute position, change color if non-functional button
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

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        case 'Space':
            console.log("SPACE!");
            break
        default:
            const newColor = makeRandColor();
            const oppoColor = makeOppoColor();
            for (let button of buttons) {
                button.style.backgroundColor = newColor;
                button.style.color = oppoColor;
            }
            console.log("IGNORED!")
    }
})