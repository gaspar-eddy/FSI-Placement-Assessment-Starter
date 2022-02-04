// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Eddy Gaspar" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let cookieTotal = 0 //Total cookies

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Select element with id of qty-total
const totalQuantity = document.querySelector('#qty-total')

// Select element qty-gb
const gbQuantity = document.querySelector('#qty-gb')

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {

    gb = gb + 1
    gbQuantity.textContent = `${gb}`
    cookieTotal = cookieTotal + 1
    totalQuantity.textContent = `${cookieTotal}`

})

// Select element with id of minus-gb
const gbMinusButton = document.querySelector('#minus-gb')

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusButton.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread - button was clicked!')

    if (gb > 0) {
        gb = gb - 1
        gbQuantity.textContent = `${gb}`
        cookieTotal = cookieTotal - 1
        totalQuantity.textContent = `${cookieTotal}`
    }  

})

// Select element with id of add-cc
const ccAddButton = document.querySelector('#add-cc')

// Select element with id of qty-cc
const ccQuantity = document.querySelector('#qty-cc')

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccAddButton.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Cocolate Chip + button was clicked!')

    cc = cc + 1
    ccQuantity.textContent = `${cc}`
    cookieTotal = cookieTotal + 1
    totalQuantity.textContent = `${cookieTotal}`

})

// Select element with id of minus-cc
const ccMinusButton = document.querySelector('#minus-cc')

ccMinusButton.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip - button was clicked!')

    if (cc > 0) {
        cc = cc - 1
        ccQuantity.textContent = `${cc}`
        cookieTotal = cookieTotal - 1
        totalQuantity.textContent = `${cookieTotal}`
    }  

})

// Select element with id of add-sugar
const sugarAddButton = document.querySelector('#add-sugar')

// Select element with id of qty-sugar
const sugarQuantity = document.querySelector('#qty-sugar')

sugarAddButton.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar + button was clicked!')

    sugar = sugar + 1
    sugarQuantity.textContent = `${sugar}`
    cookieTotal = cookieTotal + 1
    totalQuantity.textContent = `${cookieTotal}`

})

// Select element with id of minus-sugar
const sugarMinusButton = document.querySelector('#minus-sugar')

sugarMinusButton.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar - button was clicked!')

    if (sugar > 0) {
        sugar = sugar - 1
        sugarQuantity.textContent = `${sugar}`
        cookieTotal = cookieTotal - 1
        totalQuantity.textContent = `${cookieTotal}`
    }  

})