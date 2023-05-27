
const formEl = document.querySelector('.feedback-form');
const emailEl = document.getElementsByName("email");
//const msgEl = document.getElementsByName("message");
console.log(emailEl)
formEl.addEventListener('submit',onFormSubmit);
//emailEl.addEventListener('input',onTextInput);
//msgEl.addEventListener('input',onTextInput);
function onFormSubmit(evt){
evt.preventDefault();
console.log('evt')
evt.currentTarget.reset();
}
function onTextInput(evt){
    const message = evt.currentTarget.value;
    localStorage.setItem("feedback-form-state",message);
    console.log(message)
}
function savedInputsValue(){
    const savedMsg = localStorage.getItem("feedback-form-state",message);
    if(savedMsg){
        console.log('save')
        formEl.value =savedMsg;

    }
}