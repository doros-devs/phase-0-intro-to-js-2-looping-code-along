const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names, event) {
  let thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouMessages;
}


function countDown(start) {
  while (start >= 0) {
    console.log(start--);
  }
}