


var x=document.querySelector('#Login');
var y=document.querySelector('#register');
var z=document.querySelector('.btn');
var d=document.querySelector('.container-login')

function register(){
  x.style.left="-40rem";
  y.style.left="5rem";
  z.style.left="11rem";
  
  d.classList.add('long');
  d.classList.remove('short');
}
function login(){
  x.style.left="5rem";
  y.style.left="45rem";
  z.style.left="0";
  d.classList.remove('long');
  d.classList.add('short');
}




