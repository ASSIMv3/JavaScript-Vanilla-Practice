const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let hexColor = '#'
    for (let i = 0; i<6; i++){
        hexColor += hex[getRandomHexValue()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomHexValue() {
    const randomIndex = Math.floor(Math.random() * hex.length);
    return randomIndex;
  }