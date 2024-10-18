// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can extend this with actual login logic)
    if (username === "" || password === "") {
        alert("Please fill out all fields");
    } else {
        alert("Login successful!");
        // You can add your login logic here
    }
});
