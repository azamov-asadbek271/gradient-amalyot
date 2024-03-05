// const body = document.querySelector("body")
// const container = document.querySelector(".container")
// const colorText = document.querySelector(".color-text");
// let values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "a",
//     "b",
//      "d",
//      "c",
//      "e",
//      "f"
// ]

// const letfunction = () => {
//    let  color = '#'
//     for ( let i = 0; i < 6;i++) {
//        const randomNumber = Math.trunc(Math.random() * values.length);
//        color += values[randomNumber]
//     }
//     return color
// }
// const constFunction = () => {
//     let color1 = letfunction();
//     let color2 = letfunction();
//     let randomNum = Math.trunc(Math.random()*360)
//     let bgColor = `linear-gradient( 
//         ${randomNum}deg,
//         ${color1},
//         ${color2})`;
//         body.style.background = bgColor
//         colorText.textContent =bgColor
// }
// constFunction()
// container.addEventListener("click",constFunction)

const movies = [
  { name: "Avatar 3D", year: 2008, rating: 9 },
  { name: "Titanik 4D", year: 1997, rating: 7 },
  { name: "Forsaj 9 3D", year: 2020, rating: 4 },
  { name: "Avengers", year: 2012, rating: 6 },
];


const resualt = movies.map((e) => {
     return e.rating + 1
})
console.log(resualt)
// const mapMovies = movies.filter((e) => {
//   return e.year > 2010
// })

// console.log(mapMovies)