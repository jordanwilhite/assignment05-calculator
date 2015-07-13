// var numOne= document.getElementById('numOne');
// var numTwo= document.getElementById('numTwo');
// var calculate =document.getElementById('calulateBtn');
// var answer = document.getElementById('answer')
//
// var calculate = function(){
// var numOne = Number(numOne.value);
// var numTwo = Number(numTwo.value);
//   answer.innerText = ;
// };
//
//
//
// calcBtn.onclick = calculate;

var numOne = $('#num_one');
var numTwo = $('#num_two');
var calcBtn = $('#calcBtn');
var answer = $('#answer');

var calculate = function() {
  var one = Number(numOne.val());
  var two = Number(numTwo.val()); 
  var result = one + two;
  answer.text();
};

calcBtn.on('click', calculte);
