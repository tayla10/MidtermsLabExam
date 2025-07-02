function validateForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Both fields are required!");
    return false; // Stop form submission
  }

  // If both fields are filled, redirect to home.html
  window.location.href = "home.html";
  return false; // Prevent default form submission
}
