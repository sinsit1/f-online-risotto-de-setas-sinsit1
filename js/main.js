'use strict';

const url = 'https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json';
let result;
let subtotalExpenses = 0;
let totalExpenses = 0;
const ship = parseInt(7);

const itemsList = document.querySelector('.form__products');
const payment = document.querySelector('.payment');
const items_number = document.querySelector('.total__items');
const subtotal = document.querySelector('.subtotal__price');
const shippingCost = document.querySelector('.shipping__price');
const total = document.querySelector('.total__price');
const submit = document.querySelector('.submit_btn');
const select = document.querySelector('.select__button');
const deselect = document.querySelector('.deselect__button');





fetch(url)
    .then(res => res.json())
    .then(data => {
        result = data;
        console.log(result);
        list_products();
        recipeName(result.recipe.name);
    });

function recipeName(name) {
    const recipeName = document.querySelector('.recipe__name');
    recipeName.innerHTML = name;
}

function list_products() {
    const ingredients = result.recipe.ingredients;
    console.log(ingredients);

    itemsList.innerHTML = ingredients.map((ingredient, i) => {
        return`
        <li class="item__product box">
            <div class="product">
                <input class="checkbox__input" type="checkbox" id="item${i}" name="products" value=${ingredient.price.toFixed(2)} />
                <input class="input__quantity" type="number" min="0" value="${ingredient.items}" />
                <div class="checkbox">
                    <label for="item${i}">${ingredient.product}</label>
                    <p>${ingredient.brand}</p>
                    <p>${ingredient.quantity}</p>
                </div>
            </div>
            <div class="ingredient__prices">
                <p>${ingredient.price}</p>
                <p>${result.recipe.currency}</p>
            </div>
        </li>
        `;
        
    }).join('');


    handlerInputs();
    expenses();
}



function handlerInputs() {
    let checkboxesList = document.querySelectorAll('input[name=products]');
    // let quantityList = document.querySelectorAll('.quantity__number');

    checkboxesList.forEach((checkboxes) => {
        return checkboxes.addEventListener('change', subtotal_calc);
    })

    // quantityList.forEach((quant) => {
    //     return quant.addEventListener('change', subtotal_calc);
    // })

}


function expenses() {
    const product = result.recipe.ingredients;

    items_number.innerHTML = 'Items: ' + product.length;
    subtotal.innerHTML = 'Subtotal: ' + (parseFloat(subtotalExpenses));
    shippingCost.innerHTML = 'Shipping Cost: ' + ship + result.recipe.currency;
    total.innerHTML = 'Total: ' + (parseFloat(totalExpenses));
    submit.value = 'Comprar ingredientes total: ' + totalExpenses;
    payment.appendChild(items_number);
    payment.appendChild(subtotal);
    payment.appendChild(shippingCost);
    payment.appendChild(total);
    payment.appendChild(submit);

}

function subtotal_calc() {
    console.log('aqui');
    let money = this.value;

    if (this.checked) {
        totalExpenses += parseFloat(money);
        subtotal.innerHTML = 'Subtotal: ' + parseFloat(totalExpenses).toFixed(2);
        shippingCost.innerHTML = 'Gastos de envio: ' + ship + result.recipe.currency;
        total.innerHTML = 'Total: ' + (parseFloat(totalExpenses) + parseFloat(ship)).toFixed(2) + result.recipe.currency;
        submit.innerHTML = 'Comprar ingredientes: ' + (parseFloat(totalExpenses) + parseFloat(ship)).toFixed(2) + result.recipe.currency;

    } else if (!this.checked) {
        totalExpenses -= parseFloat(money);
        subtotal.innerHTML = 'Subtotal: ' + parseFloat(totalExpenses).toFixed(2);
        shippingCost.innerHTML = 'Gastos de envio: ' + ship + result.recipe.currency;
        total.innerHTML = 'Total: ' + (parseFloat(totalExpenses) + parseFloat(ship)).toFixed(2) + result.recipe.currency;
        submit.innerHTML = 'Comprar ingredientes: ' + (parseFloat(totalExpenses) + parseFloat(ship)).toFixed(2) + result.recipe.currency;
    }

}


function select_all() {
    for (let i = 0; i < document.form.elements.length; i++) {
        if (document.form.elements[i].type == "checkbox") {
            document.form.elements[i].checked = 1
        }
    }
}

function deselect_all() {
    let a;
    for (a = 0; a < document.form.elements.length; a++) {
        if (document.form.elements[a].type == "checkbox")
        document.form.elements[a].checked = 0;
    }
}



select.addEventListener('click', select_all);
deselect.addEventListener('click', deselect_all);