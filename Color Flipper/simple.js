const colors = ["green", "red", "yellow", "blue", "magenta", "cyan", "silver", "gray", "maroon", "purple", "fuchsia", "lime", "olive", "orange", "brown", "pink"]
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