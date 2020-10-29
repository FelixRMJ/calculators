/* Formula to convert Celsius to Fahrenheit:
    (0ºC x 9/5) + 32 = 32ºF
  
  Formula to convert Farenheit to Celsius:
    (32ºF - 32) x 5/9 = 0ºC */

//UI Elements
const temp = document.querySelector('.temp');
const cToF = document.querySelector('.ctof');
const fToC = document.querySelector('.ftoc');
const transTemp = document.querySelector('.transformed-temp');

cToF.addEventListener('click', celToFah);
fToC.addEventListener('click', fahToCel);

function celToFah(e) {
  if(isNaN(temp.value)) {
    alert('Insert a number')
  } else {
    transTemp.value = ((parseInt(temp.value) * 9/5 ) + 32).toFixed(2) + ' F' ;
  }

  e.preventDefault(); 
}
function fahToCel(e) {
  if(isNaN(temp.value)) {
    alert('Insert a number')
  } else {
    transTemp.value = ((parseInt(temp.value) -32 ) * 5/9).toFixed(2) + ' C' ;
  }

  e.preventDefault(); 
}