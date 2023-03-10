const quoteIdFromAdviceSlip = document.querySelector("span#quotenumber");
const quoteFromAdviceSlip = document.querySelector("h2#quote");
const diceimage = document.getElementById("diceimage");

const API_URL = "https://api.adviceslip.com/advice";
function getAdvice(url) {
  return fetch(url).then((response) => response.json());
}
const API = { getAdvice };

function randomAdvice() {
  API.getAdvice(API_URL).then((data) => addQuote(data.slip));
}

function addQuote(quote) {
  quoteIdFromAdviceSlip.innerText = `#${quote.id}`;
  quoteFromAdviceSlip.innerText = `"${quote.advice}"`;
}

window.addEventListener("load", randomAdvice);
diceimage.addEventListener("click", randomAdvice);
