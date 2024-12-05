// Code your solutions in this file

function writeCards(name, event) {
  const messages = [];
  for (let i = 0; i < name.length; i++) {
    messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }

  return messages;
}



writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(interger){

  while (interger >= 0) {
    console.log(interger);
    interger --;
  }
}
console.log(countDown("13"));