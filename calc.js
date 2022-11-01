function cTof (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputCelcius").innerHTML=(1.8 * valNum) +32;
}

function fToc (valNum) {
  valNum = parseFloat (valNum).toFixed(2);
  document.getElementById("outputCelcius").innerHTML=(0.56 * valNum - 32);
}

function ktom (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputMiles").innerHTML=(0.62 * valNum) ;
}

function motf (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputKilometers").innerHTML=(1.6 * valNum) ;
}

function keltocel (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputCelsius").innerHTML= (valNum -273.15);
}

function celtokel (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputKelvin").innerHTML=(valNum + 273.15) ;
}

function keltofah (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputFahrenheit").innerHTML= (valNum * 1.8 - 459.7) ;
}

function fahtokel (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputKelvin").innerHTML=((valNum - 32) / 1.8 + 273.15);
}
function mtof(valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputFeet").innerHTML=(valNum * 3.28084);
}

function ftom (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputMetres").innerHTML=(valNum * 0.304);
}

function inchtocent(valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputCent").innerHTML=(valNum * 2.54);
}

function centtoinch (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputInches").innerHTML=(valNum * 0.393701);
}

function galltokill(valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputKill").innerHTML=(valNum * 0.425144);
}

function kilotogall (valNum) {
  valNum = parseFloat (valNum);
  document.getElementById("outputGall").innerHTML=(valNum * 2.352);
}

