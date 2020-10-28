//UI ELEMENTS

const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const result = document.querySelector('.result');

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function add(e){
  if(value1.value === '' || value2.value == ''){
    alert('Insert a number in all fields');
  }
  result.value = parseInt(value1.value) + parseInt(value2.value); 
  value1.value = '';
  value2.value = '';
  e.preventDefault();
}

function subtract(e){
  if(value1.value === '' || value2.value == ''){
    alert('Insert a number in all fields');
  }
  result.value = parseInt(value1.value) - parseInt(value2.value); 
  value1.value = '';
  value2.value = '';
  e.preventDefault();
}

function multiply(e){
  if(value1.value === '' || value2.value == ''){
    alert('Insert a number in all fields');
  }
  result.value = parseInt(value1.value) * parseInt(value2.value); 
  value1.value = '';
  value2.value = '';
  e.preventDefault();
}

function divide(e){
  if(value1.value === '' || value2.value == ''){
    alert('Insert a number in all fields');
  }
  
  result.value = parseInt(value1.value) / parseInt(value2.value); 
  value1.value = '';
  value2.value = '';
  e.preventDefault();
}