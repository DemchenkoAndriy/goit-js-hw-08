

import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");

const keyStorage = "feedback-form-state";

dataFromCache();
// console.log(message);
email.addEventListener('input', throttle(cacheData,500));
message.addEventListener('input', throttle(cacheData,500));
form.addEventListener("submit", sumbitForm);
function cacheData(e) {
   

    const obj = { email: email.value, message: message.value };
    localStorage.setItem(keyStorage, JSON.stringify(obj));

       
   
};



function dataFromCache() {

    try {
        const data = JSON.parse(localStorage.getItem(keyStorage));
         email.value = data.email;
        message.value = data.message;
      
} catch (error) {
  // Error handling
}
}

function sumbitForm(e) {
e.preventDefault();
  if (email.value === "" || message.value === "") {
    alert('Fill in the "email" and "message"');
    return;
}

   
    
    const obj = { email: email.value, message: message.value };
   
      console.log(obj);
 localStorage.removeItem(keyStorage);

  e.currentTarget.reset();
}