
//user input
const inputText = document.getElementById("inputText");

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
    //pass user input into the document 
    
    let color = inputText.value;
    
    document.body.style.backgroundColor = color;
    colorText.textContent = color;
}

