var Eli = document.body.querySelector(".wrapper")
number = 5
while(number <= 10) {
  var second = Number(prompt("what is your second number"))
  if (isNaN(second)) {
      second = 0
      }
  number = number + second}
if( number >=10){
  Eli.innerHTML = "The program is over"
}