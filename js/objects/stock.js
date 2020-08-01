import {Dom} from './dom'

export class Stock {
    id;
    name;
    prices;
    dom;

    constructor(id, name, prices, dom) {
        this.id = id;
        this.name = name;
        this.prices = prices;
        this.dom = dom;
    }

    display(parentElement,clickFunc) {
        let elem = document.createElement('button');
        elem.className = "better-item";
        elem.innerText = this.name;
        parentElement.appendChild(elem);
        elem.onclick = () => clickFunc(this.id);
    }

}