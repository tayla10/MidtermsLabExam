function validateForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email  === ""|| !password === "") {
    alert("Both fields are required!");
    return false;
  }
  return true;
}
