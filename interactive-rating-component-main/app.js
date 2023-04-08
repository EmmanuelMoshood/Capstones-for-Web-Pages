
//helper functions
const getById = id =>{
    return document.getElementById(id)
}


// get all required DOM elements 
const btnSubmit = getById("submit")
const btnRateAgain = getById("rate-again")
const divThankYouState = getById("thank-you-state")
const divRatingState = getById("rating-state")
const ratings = document.querySelectorAll(".btn")
const ratingReport = getById("report-rating")


//functions 
const switchToThankYou = ()=>{
    // divThankYouState.classList.remove('hidden');
    
    console.log("btn works")
    console.log(document.getElementById("rating-state"))
    divThankYouState.classList.remove('hidden')
    divRatingState.style.display = "none"
}

const switchToRating = () =>{
    divThankYouState.classList.add('hidden')
    divRatingState.style.display = "block"
}

ratings.forEach((rating) => {
    rating.addEventListener("click", ()=>{
        console.log(rating.innerHTML)
        return ratingReport.innerText = rating.innerHTML
    })
})





// bind EVENTS to elements
btnSubmit.addEventListener("click", switchToThankYou)
btnRateAgain.addEventListener("click", switchToRating)