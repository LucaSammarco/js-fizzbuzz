


// for (let i = 42; i === 0; i--) {
//     console.log(i)
// }


// const ulElement = document.querySelector("ol")

// for (let i = 1; i <= 100 ; i++) {
   
//     const liElement = document.createElement("li")
//     liElement.classList.add("list-class")
//     liElement.append(i)

//     ulElement.appendChild(liElement)
// console.log(i);
    
// }



// for (let i = 1000; i >= 0; i--) {
//     console.log(i)
// }

let rigaConsole = ""

for (let i = 0; i < 8 ; i++) {
    if ( i % 2 === 0) {
        rigaConsole += "fizz"
    } else {
        //dispari
        rigaConsole += "buzz"
    }
}

console.log(rigaConsole)