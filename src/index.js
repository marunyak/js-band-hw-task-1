import './css/main.css';
import LocalStorage from './js/modules/LocalStorage.js';
import Catalog from './js/modules/Catalog';
import Buttons from './js/modules/Buttons.js';
import Ship from './js/modules/Ship.js';
import Track from './js/modules/Track.js';

const root = document.querySelector("#root");
const ship = document.querySelector('.create-transport-ship');
const track = document.querySelector('.create-transport-track');
const costDelivery = document.querySelector('.create-cost-delivery');

//Render info for transport-catalog

let LocalStorage1 = new LocalStorage('cost');
let listCosts = LocalStorage1.get();
if (listCosts) {
    let catalog = new Catalog('.table-costs');
    listCosts.forEach(({ model: model, cost1: cost1, cost2: cost2 }) => catalog.add(model, cost1, cost2));
}

//Render info for cost-catalog

let LocalStorage2 = new LocalStorage('transport');
let listTransport = LocalStorage2.get();
if (listTransport) {
    let catalog = new Catalog('.table-transport');
    listTransport.forEach((item) => {
        if (item.licensePlate) {
            let track = new Track(item.averageSpeed);
            let capacity = track.showCapacityInPounds(item.capacity);
            let averageSpeed = track.showAvarageSpeed();
            catalog.add(item.id , item.model, item.licensePlate, item.producedYear, capacity, averageSpeed, item.typeOfGas);
        }
        else if (item.name) {
            let ship = new Ship(item.averageSpeed);
            let capacity = ship.showCapacityInPounds(item.capacity);
            let averageSpeed = ship.showAvarageSpeed();
            catalog.add(item.id , item.model, item.name, item.producedYear, capacity, averageSpeed, item.countOfTeam);
        }
    });
}

document.querySelector(".create-item").addEventListener('click', (e) => {
    let elem = e.target;
    if (elem.classList.contains('ship')) {
        ship.classList.toggle('show');
    }
    else if (elem.classList.contains('track')) {
        track.classList.toggle('show');
    }
    else if (elem.classList.contains('cost')) {
        costDelivery.classList.toggle('show');
    }
    root.classList.toggle('opacity');
    document.body.classList.toggle('stop-scrolling');
});

document.body.addEventListener('click', (e) => {
    let elem = e.target;
    if (elem.classList.contains('cancel')) {
        let button = new Buttons(root);
        button.cancel(elem);
    }
    else if (elem.classList.contains('save')) {
        let button = new Buttons(root);
        button.save(elem);
        button.cancel(elem);
    }
});
