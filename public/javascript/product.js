function display(){
    var element=document.querySelector('#dis');
    element.classList.add('opt-bar-display');
    element.classList.remove('opt-bar-not-display');
    }

    function not_display(){
    var element=document.querySelector('#dis');
    element.classList.remove('opt-bar-display');
    element.classList.add('opt-bar-not-display');
    }


    let element1=document.querySelector('.back-arrow');

    element1.addEventListener('click',()=>{
        window.open('/login/landing');
       });


    //reusable code
    let string1 = "";
    let string2 = "";
    let string3 = "";

    let ele1 = document.querySelector('#contu1');
    let ele2 = document.querySelector('#contu2');
    let ele3 = document.querySelector('#contu3');
    //first container
    let j=0;
    for (let i = 0; i < 5; i++) {

        let obj = proCard[i];
        let val = `<div class="card">
        <img class="slide-img" src="${obj['Image']}" alt="">
        <div class="data">
            <p class="pro-name">${obj['Name']}</p>
            <button class="btn" value="${j}"  onclick="GoToDetails(this.value)" id="get-val">View details</button>
        </div>
    </div>`
      j++;
        string1 += val;
    }

    ele1.innerHTML = string1;
    console.log(string1);


    // second obj
    for (let i = 5; i < 10; i++) {

        let obj = proCard[i];
        let val = `<div class="card">
        <img class="slide-img" src="${obj['Image']}" alt="">
         <div class="data">
         <p class="pro-name">${obj['Name']}</p>
       <button class="btn" value="${i}" onclick="GoToDetails(this.value)" id="get-val">View details</button>
      </div>
    </div>`

        string2 += val;
    }

    ele2.innerHTML = string2;

    //third container
    for (let i = 10; i <15; i++) {

        let obj = proCard[i];
        let val = `<div class="card">
<img class="slide-img" src="${obj['Image']}" alt="">
<div class="data">
<p class="pro-name">${obj['Name']}</p>
<button class="btn" value="${i}" onclick="GoToDetails(this.value)" id="get-val" >View details</button>

</div>
</div>`

        string3 += val;
    }

    ele3.innerHTML = string3;

    function GoToDetails(id_value){
        window.localStorage.setItem('details_id',id_value);
        window.open('/login/landing/products/details');
    }