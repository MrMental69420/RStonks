import {Stock} from './objects/stock'
import {Dom} from './objects/dom'

export class Controller{
    fakeData;
    stocksList;
}

const fakeData = true;
let stocksList;

function display_stock_list() {
    stocksList.forEach(stock => {
        let elem = document.createElement('li');
        elem.className = "stock";
        stockListElem.appendChild(elem);
    });
}


if (fakeData) {
    //load fake data
    stocksList = [
        new Stock(1, 'DS-1', [1.0, 0.9, 0.7, 0.8], new Dom({'1.0': 10, '0.9': 80, '0.3': 200})),
        new Stock(2, 'PLC', [0.7, 0.8, 0.9, 0.6], new Dom({'1.0': 10, '0.9': 80, '0.3': 200})),
        new Stock(3, 'BI', [1.0, 1.1, 1.2, 1.3], new Dom({'1.0': 10, '0.9': 80, '0.3': 200}))
    ];
}

let stockListElem = document.getElementById('stock_list');
console.log(stockListElem)

display_stock_list();
