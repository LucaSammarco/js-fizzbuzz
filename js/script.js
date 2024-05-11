


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
const fizz = " fizz "
const buzz = " buzz "
const fizzBuzz = " fizzbuff "


   for (let i = 0; i < 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzString += i + fizzBuzz
    }
    else if (i % 3 === 0) {
        fizzBuzzString += i + fizz
    }
    else if (i % 5 === 0) {
        fizzBuzzString += i + buzz
    }
    else {
        fizzBuzzString += i + " "
    }
}

console.log(fizzBuzzString);