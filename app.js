// - working code
// - click button to add button
const container = document.getElementById("container");
const changes = document.querySelector('.changes');
const remover = document.querySelectorAll('#remover');

changes.addEventListener("click", () => {
    let button = document.createElement("button");
    container.appendChild(button);
    button.innerText = "delete";
    button.className = "remover";
    console.log('it worked!');
});

remover.addEventListener("click", () => {
    console.log('it worked!');
});

spawner.addEventListener('click', function spawn() {
    let btn = document.createElement('button');
    container.appendChild(btn);
    btn.innerText = 'delete';
    btn.style.color = makeRandColor();
    btn.style.backgroundColor = makeOppoColor();
});

container.addEventListener('click', function (e) {
    e.target.nodeName === 'BUTTON' && e.target.remove();
});