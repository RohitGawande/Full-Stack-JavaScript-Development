const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (event) => {
  let valid = true;

  if (usernameInput.value === "") {
    usernameError.textContent = "Username is required!";
    valid = false;
  } else {
    usernameError.textContent = "";
  }

  if (passwordInput.value === "") {
    passwordError.textContent = "Password is required!";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!valid) {
    event.preventDefault();
  }
});
