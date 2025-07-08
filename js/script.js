 function validateForm() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const errorMessage = document.getElementById('error-message');

            // Check if both password fields match
            if (password !== confirmPassword) {
                errorMessage.textContent = 'Passwords do not match!';
                return false;
            }

            // Check if email and password are provided
            if (!email || !password || !confirmPassword) {
                errorMessage.textContent = 'All fields are required!';
                return false;
            }

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                errorMessage.textContent = 'Please enter a valid email address!';
                return false;
            }

            // Password validation (example: at least 6 characters)
            if (password.length < 6) {
                errorMessage.textContent = 'Password must be at least 6 characters!';
                return false;
            }

            // Simulate successful sign-up (replace with actual sign-up logic)
            alert('Sign Up Successful');
            return true;
        }