const tipButtons = document.querySelectorAll("li .btn");
let selectedTip = 0;

for (const button of tipButtons) {
  button.addEventListener("click", () => {
    for (let i = 0; i < tipButtons.length; i++) {
      tipButtons[i].classList.remove("selected");
    }

    button.classList.toggle("selected");
    selectedTip = button.value / 100;
    console.log(selectedTip);
  });
}
