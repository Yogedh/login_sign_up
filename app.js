const form = document.getElementById("registerForm");
const errorMessage = document.getElementById("errorMessage");

// Adding Event Listener on the form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Getting user input
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const mobileNumber = document.getElementById("mobileNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const gender = document.getElementById("gender").value;

  // Fetching existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Checking if user already exists
  const userExists = users.some(
    (user) => user.email === email && user.password === password
  );

  if (userExists) {
    errorMessage.textContent = "Email and password already exist!";
    return;
  }

  // Validation checks
  if (
    firstName === "" ||
    lastName === "" ||
    mobileNumber === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all the details.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Create new user object
  const newUser = {
    firstName,
    lastName,
    mobileNumber,
    email,
    password,
    gender,
  };

  // Store new user in localStorage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");

  // Redirect to login page in the same tab
  window.location.href = "./login.html";
});
