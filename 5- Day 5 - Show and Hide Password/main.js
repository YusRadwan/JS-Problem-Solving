const inputPass = document.querySelector("#passes");
const showIcon = document.querySelector("#eyeicon");

showIcon.addEventListener("mousedown", (e) => {
  if (inputPass.type === "password") inputPass.type = "text";
  addEventListener("mouseup", () => {
    if (inputPass.type === "text") inputPass.type = "password";
  });
});
