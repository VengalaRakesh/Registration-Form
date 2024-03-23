// Function to validate full name
function validateName() {
    var fullName = document.getElementById("fullName").value;
    var fullNameError = document.getElementById("fullNameError");
    if (fullName.length < 5) {
        fullNameError.innerText = "Name must be atleast 5 characters";
    } else {
        fullNameError.innerText = "";
    }
}

// Function to validate gender
function validateGender() {
    var genderError = document.getElementById("genderError");
    var radios = document.getElementsByName('gender');
    var radioChecked = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioChecked = true;
            break;
        }
    }
    if (!radioChecked) {
        genderError.innerText = "Please select gender";
    } else {
        genderError.innerText = "";
    }
}

// Function to validate date of birth
function validateDOB() {
    var dob = document.getElementById("dob").value;
    var dobError = document.getElementById("dobError");
    var dobDate = new Date(dob);
    var currentDate = new Date();
    if (dob.trim() === '') {
        dobError.innerText = "Enter date of birth";
    } else if(dobDate >= currentDate){
        dobError.innerText = 'Date of birth exceeds current date';
    }else {
        dobError.innerText = "";
    }
}

// Function to validate email
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    if (!email.includes('@')) {
        emailError.innerText = "Enter a valid email";
    } else {
        emailError.innerText = "";
    }
}

// Function to validate phone number
function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneError = document.getElementById("phoneError");
    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        phoneError.innerText = "Enter a valid 10-digit phone number";
    } else {
        phoneError.innerText = "";
    }
}

// Function to validate password
function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    var fullName = document.getElementById("fullName").value;
    if (password.length < 8) {
        passwordError.innerText = 'Password must be atleast 8 characters';
    }
    else if(password === 'password'){
        passwordError.innerText = 'Password cannot be "password"';
    }
    else if(password === fullName){
        passwordError.innerText = 'Password cannot be the same as user name';
    }else {
        passwordError.innerText = "";
    }
}

// Function to validate confirm password
function validateConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = 'Passwords do not match';
    }
    else if(confirmPassword == ''){
        confirmPasswordError.innerText = 'Enter password';
    } else {
        confirmPasswordError.innerText = "";
    }
}

// Function to validate the entire form
function validateForm() {
    // Validate each field individually
    validateName();
    validateGender();
    validateDOB();
    validateEmail();
    validatePhoneNumber();
    validatePassword();
    validateConfirmPassword();

    // Check if any error messages are displayed
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        if (errorElements[i].innerText !== '') {
            return false; // Prevent form submission if any validation fails
        }
    }
    alert("You have registered Successfully");
    return true; // Allow form submission if all validation passes
}
