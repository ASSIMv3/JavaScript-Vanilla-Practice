const colors = ["Green", "Red", "Yellow", "Blue", "Magenta", "Cyan", "Silver", "Gray", "Maroon", "Purple", "Fuchsia", "Lime", "Olive", "Orange", "Brown", "Pink"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const RandomNumbr = getRandomNumber()
    document.body.style.backgroundColor = colors[RandomNumbr]
    color.textContent = colors[RandomNumbr]
})

function getRandomNumber(){
    const randomDecimal = Math.random();

    const scaledNumber = randomDecimal * 15;

    const randomNaturalNumber = Math.floor(scaledNumber);
    console.log(randomNaturalNumber)
  
    return randomNaturalNumber;
}