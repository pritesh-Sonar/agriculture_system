

const obj=JSON.parse(window.localStorage.getItem('order_obj'))



let string=`<div class="input-div">
<label for="Pro_name">Product Name:</label>
<input name="Pro_name" type="Pro_name" value="${obj.Name}" id="Pro_name"  readonly >
</div>
<div class="input-div">
<label for="Pro_price">Product Price:</label>
<input name="Pro_price" type="text" value="${obj.Price}" id="Pro_price"  readonly>
</div>
<div class="input-div">
<label for="Pro_Quantity">Product Quantity:</label>
<input name="Pro_Quantity" type="number" value="1" id="Pro_Quantity"  >
</div>
<div class="input-div">
<label for="Pro_pack">Product Packging:</label>
<input name="Pro_pack" type="text" value="${obj.Pack}" id="Pro_pack" readonly >
</div>
<div class="input-div">
<label for="email">Customer Email:</label>
<input name="email" type="email"  id="email"  (keydown.enter)="onKeydown($event)"  placeholder="Enter Your Login Mail">

</div>
<button type="submit" value="submit" id="btn" >Submit</button>`

let element =document.querySelector('#my-form');
element.innerHTML=string;


