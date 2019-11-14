import CostOfDelivery from './CostOfDelivery.js';
import LocalStorage from './LocalStorage.js';
import Catalog from './Catalog';
import Ship from './Ship.js';
import Track from './Track.js';

class Buttons {
    constructor () {
        this.root = root;
    }

    save(elem) {
        let nameElement = elem.parentElement.parentElement.parentElement;
        if (nameElement.classList.contains('create-transport-ship')) {
            let id = nameElement.querySelector('input[name="ship-id"]').value.replace(/(<([^>]+)>)/ig,'');
            let model = nameElement.querySelector('input[name="ship-model"]').value.replace(/(<([^>]+)>)/ig,'');
            let name = nameElement.querySelector('input[name="ship-name"]').value.replace(/(<([^>]+)>)/ig,'');
            let year = nameElement.querySelector('input[name="ship-year"]').value.replace(/(<([^>]+)>)/ig,'');
            let capacity = nameElement.querySelector('input[name="ship-capacity"]').value.replace(/(<([^>]+)>)/ig,'');
            let speed = nameElement.querySelector('input[name="ship-speed"]').value.replace(/(<([^>]+)>)/ig,'');
            let team = nameElement.querySelector('input[name="ship-team"]').value.replace(/(<([^>]+)>)/ig,'');
            if (id === '' || model === '' || name === '' || year === '' || capacity === '' || speed === '' || team === '') return;

            let local1 = new LocalStorage('transport');
            let list  = local1.get();
            list.push({ id: id, model: model, name: name, producedYear: year, capacity: capacity, averageSpeed: speed,countOfTeam: team });
            local1.save(list);

            let ship = new Ship(speed);
            capacity = ship.showCapacityInPounds(capacity);
            speed    = ship.showAvarageSpeed();

            let catalog1 = new Catalog('.table-transport');
            catalog1.add(id, model, name, year, capacity, speed, team);
        }
        else if (nameElement.classList.contains('create-transport-track')) {
            let id = nameElement.querySelector('input[name="track-id"]').value.replace(/(<([^>]+)>)/ig,'');
            let model = nameElement.querySelector('input[name="track-model"]').value.replace(/(<([^>]+)>)/ig,'');
            let license = nameElement.querySelector('input[name="track-license"]').value.replace(/(<([^>]+)>)/ig,'');
            let year = nameElement.querySelector('input[name="track-year"]').value.replace(/(<([^>]+)>)/ig,'');
            let capacity = nameElement.querySelector('input[name="track-capacity"]').value.replace(/(<([^>]+)>)/ig,'');
            let speed = nameElement.querySelector('input[name="track-speed"]').value.replace(/(<([^>]+)>)/ig,'');
            let gas = nameElement.querySelector('input[name="track-gas"]').value.replace(/(<([^>]+)>)/ig,'');
            if (id === '' || model === '' || license === '' || year === '' || capacity === '' || speed === '' || gas === '') return;

            let local2 = new LocalStorage('transport');
            let list = local2.get();
            list.push({ id: id, model: model, licensePlate: license, producedYear: year, capacity: capacity, averageSpeed: speed,typeOfGas: gas });
            local2.save(list);

            let track = new Track(speed);
            capacity = track.showCapacityInPounds(capacity);
            speed = track.showAvarageSpeed();

            let catalog2 = new Catalog('.table-transport');
            catalog2.add(id, model, license, year, capacity, speed, gas);
        }
        else if (nameElement.classList.contains('create-cost-delivery')) {
            let cost = nameElement.querySelector('input[name="cost-model"]').value.replace(/(<([^>]+)>)/ig,'');
            let cargo = nameElement.querySelector('input[name="cost-cargo"]').value.replace(/(<([^>]+)>)/ig,'');
            let dist = nameElement.querySelector('input[name="cost-dist"]').value.replace(/(<([^>]+)>)/ig,'');

            if (cost === '' || cargo === '' || dist === '') return;

            let CostDelivery = new CostOfDelivery();
            CostDelivery.setItem(cost, cargo, dist);

            let catalog = new Catalog('.table-costs');
            catalog.add(cost, cargo, dist);
        }
    }

    cancel(elem) {
        elem.parentElement
            .parentElement
            .parentElement
            .classList.toggle('show');
        this.root.classList.toggle('opacity');
        document.body.classList.toggle('stop-scrolling');
    }
}

export default Buttons;
