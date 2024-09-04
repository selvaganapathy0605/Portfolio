const nameInput = document.querySelector('#name')
const mailInput = document.querySelector('#email')
const messInput = document.querySelector('#message')
const submitBtn = document.querySelector('#button')

submitBtn.addEventListener('click',(e)=>{
    if(!validations()){
        e.preventDefault();
    }
    if(validations()){
        successMess()
    }
})


const validations = () => {
    const name = nameInput.value.trim();
    const message = messInput.value.trim();
    const email = mailInput.value.trim();


    if (name === '') {
        errorMessage(nameInput, 'Name is required *');
    } else {
        successMess(nameInput);
    }

    if (message === '') {
        errorMessage(messInput, 'Message is required *');
    } else {
        successMess(messInput);
    }

    if (email === '') {
        errorMessage(mailInput, 'Email is required *');
    } else if (!emailValidations(email)) {
        errorMessage(mailInput, 'This is not an Email Id');
    } else {
        successMess(mailInput);
    }
}


const errorMessage = (e, m) => {
    const parentelement = e.parentElement;
    const errorElement = parentelement.querySelector('.error');
    errorElement.innerText = m;
}
const closeLine = document.querySelector('#closeLine')
const doneMess = document.querySelector('#success-mess')

closeLine.addEventListener('click',()=>{
    doneMess.style.display = 'none'
})

const successMess = (e) => {
    const parentelement = e.parentElement;
    const errorElement = parentelement.querySelector('.error');
    errorElement.innerText = ' ';
    doneMess.style.display = 'flex';
}

const emailValidations = (email) => {
    return String(email).toLowerCase().match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);
}
