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
    for (var i = 0; i < product.length; i++) {
        const li = document.createElement('li');
        const check = document.createElement('input');
        const article = document.createElement('h1');
        const brand = document.createElement('h2');
        const price = document.createElement('p');
        article.innerHTML = product[i].product;
        brand.innerHTML = product[i].brand;
        price.innerHTML = product[i].price;
        check.type='checkbox';
        check.name = 'products';
        const list = document.querySelector('.form__products');
        list.appendChild(li);
        list.appendChild(check);
        li.appendChild(article);
        li.appendChild(brand);
        li.appendChild(price);
      }
}
      
    