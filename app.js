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

// move boxes using absolute position
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
        default:
            console.log("IGNORED!")
    }
})