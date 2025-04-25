function validate_form() {
    var email = document.getElementById("email");
    // console.log(email.value);
    if(email.value == ""){
        alert("❌ Please fill in the Email address first!");
    } else {
        alert("✔ We will get back to you as soon as possible!");
    }
}