const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const body = document.querySelector("body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return false;   //not supposed to perform calculation
  };
  if (divider === "0"){
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error(entries);   //should call back error
    return false;
  };
  const letter = /[a-zA-Z]/;
  const specialC = /'.!@\$%\^()_+]/;
  if (letter.test(dividend) || specialC.test(dividend) || letter.test(divider) || specialC.test(divider)){
    body.innerText = "Something critical went wrong. Please reload the page";
    console.error(entries);
  };
});