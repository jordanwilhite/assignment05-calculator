var calculateBtn = document.getElementById('calculateBtn');
calculateBtn.onclick = function(){
  var sum = Number (document.getElementById('num_one').value) + Number(document.getElementById('num_two').value);
  document.getElementById('answer').innerText = sum;
};
