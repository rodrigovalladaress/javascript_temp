//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /(\d)(\s*[f,F,c,C])/;
  var m = temp.match(regexp);
  if (m) {
    var num = parseFloat(temp);
    var type = m[2].replace(/\s/g,"");
    if (type == 'c' || type == 'C') {
      result = (num * 1.8)+32;
      var result2 = result.toFixed(2) + " F";
    }
    else {
      result = (num - 32)/1.8;
      var result2 = result.toFixed(2) + " C";
    }
    converted.innerHTML = result2;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
