const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    const {email, password} = e.currentTarget.elements;
    if(email.value.trim()===""||password.value.trim()===""){
      return  alert("All form fields must be filled in");
    }

    console.log({email:email.value.trim(),password:password.value.trim()})
    e.currentTarget.reset();
}
