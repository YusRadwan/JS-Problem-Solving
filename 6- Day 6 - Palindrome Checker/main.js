console.log("%%% Palindrome Checker %%%");

// Get Element
const textElement = document.getElementById("input");
const result = document.getElementById("result");
const buttonEl = document.getElementById("check");

// Pure Functionality
const isPalindrome = (text) => {
  // Check text if empty
  if (!text) throw new Error("Input cannot be empty");

  // Reverse Text
  let normalizedText = text
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  let reversedText = normalizedText.split("").reverse().join("");

  // Check if Equal
  return reversedText === normalizedText;
};

// Event
buttonEl.addEventListener("click", () => {
  let text = textElement.value;

  // Check Text Exists
  try {
    let isPal = isPalindrome(text);
    result.style.color = isPal ? "green" : "red";
    result.textContent = isPal
      ? `(${text}) is a palindrome!`
      : `(${text}) is not a palindrome!`;
  } catch (err) {
    result.style.color = `orange`;
    return (result.textContent = err.message);
  }
});
