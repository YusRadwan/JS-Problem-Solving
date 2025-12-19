console.log(`%%% Email validation App %%%`);

// Call Element
const emailForm = document.getElementById("emailForm");
const errorMessage = document.getElementById("error-message");
const submit = document.querySelector("button");

// Validation
function validEmail(email) {
  const pattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(email);
}

// Updates UI
function showError() {
  errorMessage.style.display = "block";
  errorMessage.textContent = `Please enter a valid email ...!`;
}

function hideError() {
  errorMessage.style.display = "none";
  document.getElementById("email").value = ''
}

// Event listener
emailForm.addEventListener("submit", (e) => {
  // Stop Action
  e.preventDefault();

  // Call Value input Email
  const email = document.getElementById("email").value.trim().toLowerCase();

  // Check if Valid
  if (!validEmail(email)) {
    showError();
    return;
  }

  // Hidden Message Error if Email valid
  hideError();
});
