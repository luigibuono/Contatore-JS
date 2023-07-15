let incrementa = document.getElementById("incrementa");
let decrementa = document.getElementById("decrementa");
let azzera = document.getElementById("azzera");
let contatore = document.getElementById("counter");


let int = 0;

incrementa.addEventListener('click', function(){

  int +=1;
  contatore.innerHTML=int;
});

decrementa.addEventListener('click',function(){
  int -=1;
  contatore.innerHTML=int;
})

azzera.addEventListener('click',function(){
int = 0 ;
contatore.innerHTML= int


})