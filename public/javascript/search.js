let val=localStorage.getItem('search-content')
let ele=document.querySelector('#content');




let string='';
for(let i=0;i<15;i++){
    let obj=proCard[i];
    if(obj.Name==val){

        string=`<div class="card">
        <div class="image">
        <img src="${obj.Image}" alt="">
    </div>
    </div>
    <p class="name">
        ${obj.Name}
    </p>
    <button id="click_btn" value="${i}" onclick="details(this.value)">view details</button>`;
        break;
    }
}


ele.innerHTML=string;
function details(val){
    localStorage.setItem('details_id',val);
    open('/login/landing/products/details');
}