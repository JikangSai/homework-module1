var code = ' ';
var getCode = ' ';
var btnvalue;
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

function generateCode() {
  code=" ";
  for (var i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length);
    code += str.charAt(char);
  }
  return code;
}

document.getElementById("codes").innerHTML = generateCode();

function disableButton() {
  document.getElementById("submit").disabled = true;
}

function disableButton(btnvalue){
  document.getElementById("submit").disabled = btnvalue; // able/disable button
  if (btnvalue == true) { // test if button is disabled or enabled
    // set button and label color translucent
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    // set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
};