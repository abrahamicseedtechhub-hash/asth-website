function sendWA(){
  var n = document.getElementById('name').value;
  var p = document.getElementById('phone').value;
  var i = document.getElementById('interest').value;
  var l = document.getElementById('location').value;
  var m = document.getElementById('msg').value;

  if(!n || !p){
    alert("Please enter your name and phone number");
    return;
  }

  var text = "Hello ASTH, my name is " + n + ". My phone is " + p + ". I am interested in: " + i + ". Location: " + l + ". Message: " + m;
  window.open("https://wa.me/2348165695401?text=" + encodeURIComponent(text), "_blank");
}