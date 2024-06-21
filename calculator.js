const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => { const tempSliderValue = event.target.value; 

sliderValue.textContent = tempSliderValue;

const bar = (tempSliderValue / sliderEl.max) * 100;

sliderEl.style.background = `linear-gradient(to right, #9383ff ${bar}%, #b4b4b4 ${bar}%)`;
})