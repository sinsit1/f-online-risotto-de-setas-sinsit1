'use strict';

const url ='https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json';
let result;
let subtotalExpenses=0;
let totalExpenses=0;

    const form= document.querySelector('form');
    const items_number = document.querySelector('.total__items');
    const subtotal = document.querySelector('.subtotal__price');
    const shippingCost = document.querySelector('.shipping__price');
    const total = document.querySelector('.total__price');
    const submit= document.createElement('input');


fetch(url)
    .then(res => res.json())
    .then(data => {
        result= data;
      console.log('data', result);
      list_products();
      recipeName(result.recipe.name);
});

function recipeName(name){
    const recipeName = document.querySelector('.recipe__name');
    recipeName.innerHTML=name;
}

function list_products(){
    const product= result.recipe.ingredients;

    console.log(product);

    for (var i = 0; i < product.length; i++) {
        const li = document.createElement('li');
        const check = document.createElement('input');
        const article = document.createElement('h1');
        const brand = document.createElement('h2');
        const price = document.createElement('p');
        const priceCurrency = document.createElement('h2');
        const quantityNumber = document.createElement ('input');

        article.innerHTML = product[i].product;
        priceCurrency.innerHTML = product[i].price+' '+result.recipe.currency;

        product[i].brand !== undefined 
        ? brand.innerHTML = product[i].brand
        : brand.innerHTML ='';

        price.innerHTML = product[i].price+' '+ product[i].quantity ;

        quantityNumber.type='number';
        quantityNumber.min=0;
        quantityNumber.value= product[i].items;
        
        check.type='checkbox';
        check.name = 'products';
        check.value = product[i].price;
        const list = document.querySelector('.form__products');

        list.appendChild(li);
        li.appendChild(check);
        li.appendChild(quantityNumber);
        li.appendChild(article);
        li.appendChild(brand === undefined ? '': brand);
        li.appendChild(price);
        li.appendChild(priceCurrency);
    }
    handlerCheck();
    expenses();
}



function handlerCheck() {
    let checkboxesList = document.querySelectorAll('input[name=products]');
    checkboxesList.forEach((checkboxes) => {
        console.log('holi');
        return checkboxes.addEventListener('change', subtotal_calc);
    })
   
}


function expenses(){
    const product= result.recipe.ingredients;

    
    

    items_number.innerHTML= 'Items: '+product.length;
    subtotal.innerHTML= 'Subtotal: '+subtotalExpenses;
    shippingCost.innerHTML='Shipping Cost: 7'+result.recipe.currency;
    total.innerHTML='Total: '+totalExpenses+shippingCost;
    submit.type='submit';
    submit.value= 'Comprar ingredientes total: '+totalExpenses;
    form.appendChild(items_number);
    form.appendChild(subtotal);
    form.appendChild(shippingCost);
    form.appendChild(total);
    form.appendChild(submit);

}

function subtotal_calc(){

    let money = this.value;
    parseInt(money);
    parseInt(totalExpenses);
    parseInt(subtotalExpenses);
    console.log('holi',money )
    
    if (this.checked) {
        subtotalExpenses = money;
        
        subtotal.innerHTML = 'Subtotal: ' +totalExpenses;
        shippingCost.innerHTML = 'Gastos de envio: 7' + result.recipe.currency;
        total.innerHTML = 'Total: ' +parseInt(totalExpenses) + (money + 7) + result.recipe.currency;
        submit.innerHTML = 'Comprar ingredientes: ' + (totalExpenses + 7 ) + result.recipe.currency;
    } else if (!this.checked) {
        subtotalExpenses = money;
        subtotal.innerHTML = 'Subtotal:' + (totalExpenses);
        shippingCost.innerHTML = 'Gastos de envio: ' + 7 + result.recipe.currency;
        total.innerHTML = 'Total: ' + (totalExpenses + 7) + result.recipe.currency;
        submit.innerHTML = 'Comprar ingredientes: ' + (totalExpenses + 7) + result.recipe.currency;
    }    
    
} 




function select_all(){ 
    for (let i=0;i<document.form.elements.length;i++){
       if(document.form.elements[i].type == "checkbox")	
          {document.form.elements[i].checked=1} }
 } 

 function deselect_all(){ 
    console.log('Llego',document.form.elements );
    let a;
    for (a=0;a<document.form.elements.length;a++) {
       if(document.form.elements[a].type == "checkbox")	
        console.dir(document.form.elements);
          document.form.elements[a].checked=0;
    }
 }

 const select = document.querySelector('.select__button');
 const deselect = document.querySelector('.deselect__button');


 select.addEventListener('click', select_all);
 deselect.addEventListener('click', deselect_all);
      
    