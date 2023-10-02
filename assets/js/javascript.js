let numero = 0;
const valoreAttuale=document.getElementById("valore");
const incrementaNumero=document.getElementById("incrementa");
const decrementaNumero=document.getElementById("decrementa");

function incrementa(){
  const incrementa= parseInt(incrementaNumero.value);
  numero += incrementa;
  valoreAttuale.textContent = numero;
}

function decrementa(){
  const decrementa= parseInt(decrementaNumero.value);
  numero -= decrementa;
  valoreAttuale.textContent = numero;
}
function reset(){
  numero = 0 ;
  valoreAttuale.textContent= numero;
}
