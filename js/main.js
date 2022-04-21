document.addEventListener("DOMContentLoaded", function () {
  const selected = document.querySelector(".order__selected");
  const optionsContainer = document.querySelector(".order__options-container");
  const rangeInputs = document.querySelectorAll('input[type="range"]')

  const optionsList = document.querySelectorAll(".order__option");
  const burger = document.querySelector(".header__burger-btn");
  const menu = document.querySelector(".header__hidden-menu");
  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("order__options-container--active");
    selected.classList.toggle("order__selected--active")
  });
  document.addEventListener("click", (e) => {
    if (e.target != selected) {
      optionsContainer.classList.remove("order__options-container--active");
      selected.classList.remove("order__selected--active")
    }
  });
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("order__selected--active");
    });
  });


  function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })



  burger.addEventListener("click", function (evt) {
    burger.classList.toggle("header__burger-change");
    menu.classList.toggle("header__open-menu");

  });

});
