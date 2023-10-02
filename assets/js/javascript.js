let incrementaNum = document.getElementById("incrementa");
let decrementaNum = document.getElementById("decrementa");
let azzera = document.getElementById("azzera");
let contatore = document.getElementById("counter");


let numero = 0;

function incrementa(){
 const incrementa = parseInt(incrementaNum.value);
  numero += incrementa;
  counter.textContent = numero;
}

function decrementa(){
  const decrementa = parseInt(decrementaNum.value):
  numero -= decrementa;
  counter.textContent = numero;
}

function azzera(){
  numero = 0;
  counter.textContent = numero;
}

