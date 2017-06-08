var code = prompt("enter a sentence");
function store(){

  var cha = code.charAt(0)+code.charAt(code.length-1);
  alert(cha);
  var caps = cha.toUpperCase();
  alert(caps);
  var rev = caps+code.split("").reverse().join("");
  alert(rev);
  // var reverse = code.split("").reverse().join("");
  // alert(reverse);
  return caps;
  console.log(code);
  console.log(cha);
  console.log(caps);
  console.log(rev);
}
store();
