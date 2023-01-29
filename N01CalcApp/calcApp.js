//get the display and store it in the variable called display
let display = document.getElementById('displayScreen');
//concatenate value of display with the argument of the button pressed
let calculate = (number)=>{
    display.value+=number;
}
//evalute the display to compute a result 
let result= ()=>{
    //make provision for error 
    try{
        display.value=eval(display.value);
    }catch(err){
        display.value = "Error";
    }

    showHistory()
}
//clear display
function clr(){
    display.value = "";
}

//del to delete last char
function del(){
    display.value= display.value.slice(0,-1);
    showHistory()
}


//get the element I am using to display history
let historyElement = document.getElementById("displayHistory")

//create a array where i will store calculation as history
let historyArr = [];

function showHistory(){
    historyArr.push(display.value);
    historyElement.innerHTML = historyArr.join("<br>");
}