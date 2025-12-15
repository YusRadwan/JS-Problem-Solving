console.log(`%%% Email validation App %%%`);

const emailForm = document.getElementById("emailForm");
const errorMessage = document.getElementById("error-message");
const submit = document.querySelector("button");

submit.addEventListener("click", async (e) => {
  // Stop Action
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;

  // Check
  if (!pattern.test(email)) {
    errorMessage.style.display = "block";
    errorMessage.textContent = `Please enter a valid email ...!`;
  } else {
    errorMessage.style.display = "none";
    emailForm.reset();
  }
});
