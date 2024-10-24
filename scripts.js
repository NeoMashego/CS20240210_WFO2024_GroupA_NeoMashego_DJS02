const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);
  if (entries === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return false;   //not supposed to perform calculation
  }
});