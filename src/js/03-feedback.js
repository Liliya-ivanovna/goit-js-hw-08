
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const msgEl = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = "feedback-form-state";
const formInputs = {};
formEl.addEventListener('input',evt =>{
    formInputs[evt.target.name]= evt.target.value;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formInputs));
})
function savedInputsValue(){
    const getData = localStorage.getItem(STORAGE_KEY); 
  
    console.log(getData)
}
function onFormSubmit(evt){
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
}
