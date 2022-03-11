const tipButtons = document.querySelectorAll("li .btn");
const customTip = document.querySelector("li input");
const bill = document.querySelector(".input__bill-wrapper input");
const people = document.querySelector(".input__people-wrapper input");
const peopleValidation = document.querySelector(".validation-text");
const totalPerPerson = document.querySelector(".totalPerPerson p");
const tipPerPerson = document.querySelector(".tipPerPerson p");
const resetButton = document.querySelector(".output button");

let selectedTip = 0;
let initialBill = 0;
let numPeople = 2;

const totalAmount = () => {
  let calc = (initialBill * (selectedTip + 1)) / numPeople;

  if (calc > 0 && !(calc === Infinity)) {
    return `$${calc.toFixed(2)}`;
  } else {
    return "$0.00";
  }
};

const totalTip = () => {
  let calc = (initialBill * selectedTip) / numPeople;

  if (calc > 0 && !(calc === Infinity)) {
    return `$${calc.toFixed(2)}`;
  } else {
    return "$0.00";
  }
};

for (const button of tipButtons) {
  button.addEventListener("click", () => {
    for (let i = 0; i < tipButtons.length; i++) {
      tipButtons[i].classList.remove("selected");
    }

    button.classList.toggle("selected");
    selectedTip = button.value / 100;
    totalPerPerson.innerHTML = totalAmount();
    tipPerPerson.innerHTML = totalTip();
  });
}

customTip.addEventListener("input", () => {
  for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].classList.remove("selected");
  }

  selectedTip = customTip.value / 100;
  totalPerPerson.innerHTML = totalAmount();
  tipPerPerson.innerHTML = totalTip();
});

bill.addEventListener("input", () => {
  initialBill = bill.value;
  totalPerPerson.innerHTML = totalAmount();
  tipPerPerson.innerHTML = totalTip();
});

people.addEventListener("input", () => {
  numPeople = people.value;

  if (numPeople <= 0) {
    peopleValidation.innerHTML = "Can't be zero";
    people.classList.add("empty");
  } else {
    peopleValidation.innerHTML = "";
    people.classList.remove("empty");
  }

  totalPerPerson.innerHTML = totalAmount();
  tipPerPerson.innerHTML = totalTip();
});

resetButton.addEventListener("click", () => {
  selectedTip = 0;
  initialBill = 0;
  numPeople = 2;
  people.value = 0;
  bill.value = 0;
  customTip.value = "Custom";
  totalPerPerson.innerHTML = totalAmount();
  tipPerPerson.innerHTML = totalTip();

  for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].classList.remove("selected");
  }
});
