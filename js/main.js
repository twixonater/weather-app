// Temperature F is main item we are looking for paired with background.
var temperature;
var ctemp = parseInt(document.getElementById("celsiusamt").innerHTML);

document.getElementById("convertbutton").onclick= function(){
  temperature = ctemp * (9/5) + 32;
  document.getElementById('fahamt').innerHTML= temperature;
  determineBackground (temperature);
}

function determinebackground (temperature) {
  if (temperature < 40) {
    document.body.style.background= url ("../images/winter.jpg")
  }
  else if (temperature <70) {
     document.body.style.background= url ("../images/fall.jpg")
  }
  else if (temperature <90) {
     document.body.style.background= url ("../images/beach.jpg")
  }
  else if (temperature> 91) {
     document.body.style.background= url ("../images/desert.jpg")
  }
}
