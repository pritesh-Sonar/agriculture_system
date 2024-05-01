function myfun(){
    let num=document.querySelector('#n-umber');
    
    if(num.value==""){
        alert("please enter the new password")
    }
    else{
    let element=document.querySelector('#ani');
    element.classList.add('show');
    element.classList.remove('hide');
    window.open('/login/landing')
    }
}