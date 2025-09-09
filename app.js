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

// - reference code


// for (let i = 0; i < 100; i++) {
//     /*First iliteration: button = a new DOM object, second iliteration:
//       button = a new DOM object, etc.*/
//     let button = document.createElement("button");
//     container.appendChild(button);
//     button.innerText = "Button";
// }