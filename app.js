const body = document.querySelector("body")
const container = document.querySelector(".container")
const colorText = document.querySelector(".color-text");
let values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
     "d",
     "c",
     "e",
     "f"
]

const letfunction = () => {
   let  color = '#'
    for ( let i = 0; i < 6;i++) {
       const randomNumber = Math.trunc(Math.random() * values.length);
       color += values[randomNumber]
    }
    return color
}
const constFunction = () => {
    let color1 = letfunction();
    let color2 = letfunction();
    let randomNum = Math.trunc(Math.random()*360)
    let bgColor = `linear-gradient( 
        ${randomNum}deg,
        ${color1},
        ${color2})`;
        body.style.background = bgColor
        colorText.textContent =bgColor
}
constFunction()
container.addEventListener("click",constFunction)

