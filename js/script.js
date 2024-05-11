


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

let fizzBuzzString = ""

for (let i = 0; i < 10 ; i++) {
    if ( i % 3 === 0) {
        fizzBuzzString += "fizz"
        
    } else if ( i % 5 === 0) {
        //dispari
        fizzBuzzString += "buzz"
    }

    else {
        fizzBuzzString = "i"
    }
}

console.log(fizzBuzzString)