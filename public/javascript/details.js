//reusable code



let insert=document.querySelector('#insert');

let number=window.localStorage.getItem('details_id');
let obj=product[number];
let string=`
<main class="container" id="insert">
<div class="details-section" id="details-of-ferti">
<div class="image">
    <img src="${obj['Image']}" alt="">
</div>
<div class="head-det">
    <p class="head-only"></p>
    <p class="heading">${obj['Name']}</p>

    <div class="details">
        <div id="verity" class="head-of-dat">
            <p class="head-only">Varieties:</p>
            <p class="data-only">${obj['Varieties']}</p>
        </div>
        <div id="compo" class="head-of-dat">
            <p class="head-only">Size:</p>
            <p class="data-only">${obj['Size']}</p>
        </div>
        <div id="typ" class="head-of-dat">
            <p class="head-only">ModeOfAction:</p>
            <p class="data-only">${obj['ModeOfAction']}</p>
        </div>

        <div id="pro-name" class="head-of-dat">
            <p class="head-only">TargetCrops:</p>
            <p class="data-only">${obj['TargetCrops']}</p>
        </div>
        <div id="Available" class="head-of-dat">
            <p class="head-only">TargetPest:</p>
            <p class="data-only">${obj['TargetPest']}</p>
        </div>
        <div id="pack" class="head-of-dat">
            <p class="head-only">Packaging:</p>
            <p class="data-only">${obj['Packaging']}</p>
        </div>
        <div id="manufacture" class="head-of-dat">
            <p class="head-only">manufacture date</p>
            <p class="data-only">12-09-2022</p>
        </div>
        <div id="expiry" class="head-of-dat">
            <p class="head-only">expiry date</p>
            <p class="data-only"> valid till 12-12-2025</p>
        </div>

        <div id="delivery" class="head-of-dat">
            <p class="head-only">ProductType: </p>
            <p class="data-only">${obj['ProductType']}</p>
        </div>
        <div id="price" class="head-of-dat">
            <p class="head-only">price:</p>
            <p class="data-only">${obj['Price']} <i class='bx bx-rupee'></i></p>
        </div>
    </div>
    <div class="add">
    <button type="button" id="add-cart">Buy Now</button>
    </div> 
</div>

</div>`

insert.innerHTML=string;

let add_cart=document.querySelector('#add-cart');
let pop=document.querySelector('#pop');
let details_page=document.querySelector('#details-of-ferti');
let no_btn=document.querySelector('#no-btn');
let yes_btn=document.querySelector('#yes-btn');
add_cart.addEventListener('click',()=>{
  details_page.classList.add('blur-me');
  pop.classList.remove('hide');
  pop.classList.add('show');
});

no_btn.addEventListener('click',()=>{
   pop.classList.remove('show');
  pop.classList.add('hide');
  details_page.classList.remove('blur-me');
});


yes_btn.addEventListener('click',()=>{
window.localStorage.setItem('order_obj',JSON.stringify({'Name':obj['Name'],'Price':obj['Price'],'Pack':obj['Packaging']}));
 open("/form")
});