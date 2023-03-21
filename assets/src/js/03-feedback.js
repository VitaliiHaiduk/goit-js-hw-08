import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form')

feedbackForm.addEventListener('input', throttle(onDataFieldsInput, 500));
feedbackForm.addEventListener('submit', onSubmitButtonClick)


const { email, message } = feedbackForm.elements;

reloadFormContent();


function onDataFieldsInput(event) {
    const userData =  { email: email.value, 
                        message: message.value } 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))

};

function reloadFormContent() {

    let userDataParse = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    if (userDataParse) {
        email.value = userDataParse.email || "";
        message.value = userDataParse.message || "";
      }
}

function onSubmitButtonClick(event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value })
    // if (email.value === '' || message.value === '') {
    //     return alert('Email field or Message field can not be empty');
    // }

    localStorage.removeItem(STORAGE_KEY);

    event.currentTarget.reset();
   
}

