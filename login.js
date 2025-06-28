document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("pwd");

  // ✅ Clear fields every time the page loads
  emailInput.value = "";
  passwordInput.value = "";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginUser = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(
      (user) => user.email === loginUser && user.password === password
    );

    if (userExists) {
      
     
      alert("Logged in successfully");

      // Redirect in the same tab
      window.location.href = "./home.html";
    } else {
      alert("Incorrect email or password");
      // Clear input fields
      form.reset();
    }
  });
});
