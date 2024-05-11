


// for (let i = 42; i === 0; i--) {
//     console.log(i)
// }


const ulElement = document.querySelector("ol")

for (let i = 1; i <= 10 ; i++) {
   
    const liElement = document.createElement("li")
    liElement.classList.add("list-class")
    liElement.append(i)

    ulElement.appendChild(liElement)
console.log(i);
    
}
