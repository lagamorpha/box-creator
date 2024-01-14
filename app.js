// - working code
// - click button to add button
const container = document.querySelector("#container");
const spawner = document.querySelector('#spawner');
// const remover = document.querySelector('.remover');

spawner.addEventListener('click', function spawn() {
    let btn = document.createElement('button');
    container.appendChild(btn);
    btn.innerText = 'delete';
    btn.className = 'remover';
    console.log('it worked!');
});

// remover.addEventListener('click', function () {
//     console.log('it worked!');
// });