const form = document.querySelector('.container form');
const email = document.querySelector('.container form input[type=email]')
const errMsg = document.querySelector('p.error-message')

form.addEventListener('submit', (e) =>{
    e.preventDefault(e);
    let emailValue = email.value;
    
    if(validateEmail(emailValue)){
        console.log('this is a valid email')
        //remove the error class from this form
        form.classList.remove('error');
        errMsg.classList.remove('error')
    }else{
        console.log('email is invalid');
        //add the error class to this form
        form.classList.add('error')
        errMsg.classList.add('error')
    }
})

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}