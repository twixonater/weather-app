// Temperature F is main item we are looking for paired with background.
var temperature;

document.getElementById("convertbutton").onclick= function() {
  var ctemp = parseInt(document.getElementById("celsius").value);
  temperature = ctemp * (9/5) + 32;
  document.getElementById('fahrenheit').value= temperature;
  determineBackground(temperature);
}

function determineBackground(temperature) {
  if (temperature < 40) {
    document.body.style.backgroundImage= 'url("./images/winter.jpg")';
    console.log(temperature);
  }
  else if (temperature <70) {
     document.body.style.backgroundImage='url("./images/fall.jpg")';
  }
  else if (temperature <90) {
     document.body.style.backgroundImage= 'url("./images/beach.jpg")';
  }
  else if (temperature> 91) {
     document.body.style.backgroundImage= 'url("./images/desert.jpg")';
  }
}
