function list_products() {
    const product = result.recipe.ingredients;


    for (var i = 0; i < product.length; i++) {
        // const li = document.createElement('li');
        // const check = document.createElement('input');
        // const article = document.createElement('h1');
        // const brand = document.createElement('h2');
        // const price = document.createElement('p');
        // const priceCurrency = document.createElement('h2');
        // const quantityNumber = document.createElement('input');
        // const box = document.createElement('div');
        // const box2 = document.createElement('div');


        // li.classList.add('item__product');
        // box2.classList.add ('ingredient__prices');
        // article.innerHTML = product[i].product;
        // priceCurrency.innerHTML = product[i].price + ' ' + result.recipe.currency;

        // product[i].brand !== undefined ?
        //     brand.innerHTML = product[i].brand :
        //     brand.innerHTML = '';

        // price.innerHTML = product[i].price + ' ' + product[i].quantity;

        // quantityNumber.type = 'number';
        // quantityNumber.min = 0;
        // quantityNumber.value = product[i].items;
        // quantityNumber.classList.add ('input__quantity');

        // check.type = 'checkbox';
        // check.name = 'products';
        // check.value = product[i].price;
        // const list = document.querySelector('.form__products');

        // list.appendChild(li);
        // li.appendChild(check);
        // li.appendChild(quantityNumber);
        // li.appendChild(box);
        // li.appendChild(box2);

        // box.appendChild(article);
        // box.appendChild(brand === undefined ? '' : brand);
        // box.appendChild(price);
        // box2.appendChild(priceCurrency);
    }
    handlerInputs();
    expenses();
}
