function checkForm() {
   // Get form elements
   const fullName = document.getElementById('fullName');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const confirmPassword = document.getElementById('confirmPassword');
   const formErrorsDiv = document.getElementById('formErrors');

   // Error messages list and boolean flag
   let errors = [];
   let isValid = true;

   // Resetting previous errors and styles
   formErrorsDiv.classList.add('hide');
   formErrorsDiv.innerHTML = '';
   [fullName, email, password, confirmPassword].forEach(input => input.classList.remove('error'));

   // 1. Validate full name
   if (fullName.value.trim().length === 0) {
       errors.push("Missing full name.");
       fullName.classList.add('error');
       isValid = false;
   }

   // 2. Validate email address
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!email.value.match(emailPattern)) {
       errors.push("Invalid or missing email address.");
       email.classList.add('error');
       isValid = false;
   }

   // 3. Validate password length (10 to 20 characters)
   if (password.value.length < 10 || password.value.length > 20) {
       errors.push("Password must be between 10 and 20 characters.");
       password.classList.add('error');
       isValid = false;
   }

   // 4. Validate lowercase letter in password
   if (!/[a-z]/.test(password.value)) {
       errors.push("Password must contain at least one lowercase character.");
       password.classList.add('error');
       isValid = false;
   }

   // 5. Validate uppercase letter in password
   if (!/[A-Z]/.test(password.value)) {
       errors.push("Password must contain at least one uppercase character.");
       password.classList.add('error');
       isValid = false;
   }

   // 6. Validate digit in password
   if (!/\d/.test(password.value)) {
       errors.push("Password must contain at least one digit.");
       password.classList.add('error');
       isValid = false;
   }

   // 7. Check if password and confirmation password match
   if (password.value !== confirmPassword.value) {
       errors.push("Password and confirmation password don't match.");
       confirmPassword.classList.add('error');
       isValid = false;
   }

   // Handle form validation result
   if (!isValid) {
       // Display errors if there are any
       formErrorsDiv.classList.remove('hide');
       const errorList = document.createElement('ul');
       errors.forEach(error => {
           const listItem = document.createElement('li');
           listItem.textContent = error;
           errorList.appendChild(listItem);
       });
       formErrorsDiv.appendChild(errorList);
   } else {
       // No errors, hide error div and reset error styles
       formErrorsDiv.classList.add('hide');
       [fullName, email, password, confirmPassword].forEach(input => input.classList.remove('error'));
   }

   return isValid;
}
