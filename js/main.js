'use strict';

const url ='https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json';
let result;

fetch(url)
    .then(res => res.json())
    .then(data => {
        result= data;
      console.log('data', result);
      list_products();
});

function list_products(){
    const product= result.recipe.ingredients;
    console.log(product);
    const recipeName = document.querySelector('.recipe__name');
        recipeName.innerHTML=result.recipe.name;
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
        brand.innerHTML = product[i].brand;
        price.innerHTML = product[i].price+' '+ product[i].quantity ;
        quantityNumber.type='number';
        check.type='checkbox';
        check.name = 'products';
        const list = document.querySelector('.form__products');
        

        

        list.appendChild(li);
        li.appendChild(check);
        li.appendChild(quantityNumber);
        li.appendChild(article);
        li.appendChild(brand);
        li.appendChild(price);
        li.appendChild(priceCurrency);

      }
}

function select_all(){ 
    for (let i=0;i<document.form.elements.length;i++) 
       if(document.form.elements[i].type == "checkbox")	
          document.form.elements[i].checked=1 
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
      
    