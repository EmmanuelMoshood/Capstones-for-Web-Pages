const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//var to store change color button + event listener
const btnChangeColor = document.getElementById("btn-changeColor");
btnChangeColor.addEventListener('click', function(){
    changeColorFunc();
})

//element where name of color will be displayed 
const colorText = document.querySelector(".colorText")

//////////functions
//
function changeColorFunc(){
    //call the function that generates hex code generateHexCode()
    
    let hexColor = "#"

    for(let i = 0; i<6; i++){
        hexColor += hex[generateRandomNumber()];
    }
    
    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
}

function generateRandomNumber(){
    
    return Math.floor(Math.random() * hex.length);
}