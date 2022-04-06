//sample list of colors hard coded, I will like to make this dynamic later on 
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//get element where colorText will be updated
const colorText = document.querySelector(".colorText")
//get btn id followed by a variable for listening to a click on this element
const btnChangeColor = document.getElementById("btn-changeColor")
btnChangeColor.addEventListener('click', function(){
    //get item from the colors array at random: colors[randomColor]
    let randomColor = generateRandomNumber();
    document.body.style.backgroundColor = colors[randomColor];
    colorText.textContent = colors[randomColor];
})

//use Math.random to generate number from 0 to 1
//multiple the result by 3
//set conditionals such that is 0-1; 1-2; 2- 3
function generateRandomNumber() {
    return Math.round(Math.random() * colors.length);
}