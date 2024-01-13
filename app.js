const button = document.querySelector('.changes');
const container = document.getElementById("container");

for (let i = 0; i < 100; i++) {
    /*First iliteration: button = a new DOM object, second iliteration:
      button = a new DOM object, etc.*/
    let button = document.createElement("button");
    container.appendChild(button);
    button.innerText = "Button";
}

// if (button.clicked == true) {
//     console.log('it worked!');
// };

button.addEventListener("click", () => {
    console.log('it worked!');
});