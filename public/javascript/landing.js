let element = document.querySelector('#search-me');
function display() {
    var element = document.querySelector('#dis');
    let element1=document.querySelector('.accout-of-data');
    element.classList.add('opt-bar-display');
    element.classList.remove('opt-bar-not-display');
    element1.classList.add('blur-me-black-shadow');
    var element = document.querySelector('#acc-data');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
}

function not_display() {
    var element = document.querySelector('#dis');
    let element1=document.querySelector('.accout-of-data');
    element1.classList.remove('blur-me-black-shadow');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
}

function account_display() {
    var element = document.querySelector('#acc-data');
    let element1=document.querySelector('.accout-of-data');
    element.classList.add('opt-bar-display');
    element.classList.remove('opt-bar-not-display');
    element1.classList.add('blur-me-black-shadow');
    var element = document.querySelector('#dis');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
}

function account_not_display() {
    var element = document.querySelector('#acc-data');
    let element1=document.querySelector('.accout-of-data');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
    element1.classList.remove('blur-me-black-shadow');
}


element.addEventListener('keypress',(e)=>{
   if(e.key=='Enter'){
    let search_val=element.value.toUpperCase();
   
    window.localStorage.setItem('search-content',search_val);
    window.open('/login/landing/search');

    
   }
});

let element2=document.querySelector('#change-btn-email');

element2.addEventListener('click',()=>{
    
    window.open('login/landing/changeEmail');
    
});

let element3=document.querySelector('#change-btn-num');

element3.addEventListener('click',()=>{
    
    window.open('login/landing/changeNumber');
    
});

function alertme(){
    let name=document.querySelector('#name');
    let email=document.querySelector('#email');
    let extra=document.querySelector('#extra');
    if(name.value=="" || email.value=="" || extra.value==""){
        alert("please fill full information to contact with us")
       
    }
    else{
        
        alert("we will contact with you soon as possible");
    }
}


function getval(pic){
    window.localStorage.setItem('intro-image',pic);
    window.open('/login/landing/productDetail');
}


//account information
// const obj=JSON.parse(window.localStorage.getItem('myRObj'));
// let data1=document.querySelector('#my-use-name');
// data1.innerHTML=obj.E;
// let data2=document.querySelector('#my-main-email');
// data2.innerHTML=obj.N;
// let data3=document.querySelector('#my-mb-num');
// data3.innerHTML=obj.P;
